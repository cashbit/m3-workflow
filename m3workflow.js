m3workflow = function(config){
   var __config = config;
    function stepByName(stepName){
        var resultstep;
        __config.steps.forEach(function(step){
            if (step.name===stepName) resultstep= step
        });
        return resultstep;
    }
    return{
       config:__config,
       state: undefined,
       setstate:function(statename){
            var self=this;
            this.config.steps.forEach(function(step){
                if (step.name==statename){
                    self.state=step;
                }
            });
            return self.state.name==statename;
        },
       transitionExec:function(transitionName){
           var transitionOk = false;
            var self = this;
           this.state.transitions.forEach(function(transition) {
              if (transition.name===transitionName){
                  transitionOk =true;
                  var res = self.checkGuards(transition);
                  if (res) {
                      transition.actionsBefore = transition.actionsBefore||[true];
                      var resbefore = transition.actionsBefore.every(function(actionBefore){
                         return actionBefore(self,transition);
                      });
                      if (resbefore){
                          var newstatename = transition.to ;
                          self.state = self.stepByName(newstatename);
                          transition.actionsAfter = transition.actionsAfter||[function(){}];
                          transition.actionsAfter.every(function(actionAfter){
                              return actionAfter(self,transition);
                          });
                      }
                  } else {
                      throw new Error("No guards satisfied for transition:"+ transitionName);
                  }
              }
           });
           if (!transitionOk) throw new Error("No transition found with name:"+ transitionName);
           return this.state;
       },
        checkGuards: function (transition) {
            var self = this;
            var res = true;
            transition.guardcounter = 0;
            if (!transition.guards) return res
            res = transition.guards.every(function (guard) {
                if (typeof guard === "function"){
                    var guardres = guard(self,transition);
                    if (guardres) transition.guardcounter++;
                    return guardres;
                } else {
                    if (guard) transition.guardcounter++;
                    return guard;
                }
            });
            return res;
        },
        transitionEnum:function(){
            var self = this;
           if(!this.state){
               this.state = stepByName("undefined");
           }
           var transitions = [];

           this.state.transitions.every(function(transition) {
               var res = self.checkGuards(transition);
               if (res) transitions.push(transition);
               return res;
           });
           return transitions;
       },
        stepByName: stepByName

   }
}