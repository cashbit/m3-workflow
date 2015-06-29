var example= {
    "name" : "ticketwf",
    "version" : "1.0",
    "collection" : "ticket",
    "uroles" : [
        "admin",
        "user",
        "guest"
    ],
    "steps" : [
        { name: "Entered shop",
            transitions: [
                {
                    "name" : "Start shopping",
                    "to" : "Selecting items",
                    "actionsbefore" : [],
                    "actionsafter" : [],
                    "uroles" : "*",
                    "guards" : []
                },
                {
                    "name" : "Exit shop",
                    "to" : "Exit shop",
                    "actionsbefore" : [],
                    "actionsafter" : [],
                    "uroles" : "*",
                    "guards" : []
                }
            ]},
        { name:"Selecting items",
            transitions: [
                {
                    "name" : "Add item to kart",
                    "to" : "Selecting items",
                    "actionsbefore" : [],
                    "actionsafter" : [],
                    "uroles" : "*",
                    "guards" : []
                },{
                    "name" : "Remove item from kart",
                    "to" : "Selecting items",
                    "actionsbefore" : [],
                    "actionsafter" : [],
                    "uroles" : "*",
                    "guards" : []
                },
                {
                    "name" : "Check out",
                    "to" : "Payment",
                    "actionsbefore" : [],
                    "actionsafter" : [],
                    "uroles" : "*",
                    "guards" : []
                },{
                    "name" : "Exit shop",
                    "to" : "Exit shop",
                    "actionsbefore" : [],
                    "actionsafter" : [],
                    "uroles" : "*",
                    "guards" : []
                }
            ] },
        { name: "Payment",
            transitions: [
                {
                    "name" : "Greetings",
                    "to" : "Exit shop",
                    "actionsbefore" : [],
                    "actionsafter" : [],
                    "uroles" : "*",
                    "guards" : []
                },{
                    "name" : "Empty kart",
                    "to" : "Selecting items",
                    "actionsbefore" : [],
                    "actionsafter" : [],
                    "uroles" : "*",
                    "guards" : []
                }
            ]

        },
        { name:"Exit shop",
            transitions: [
                {
                    "name" : "Restart",
                    "to" : "Entered shop",
                    "actionsbefore" : [],
                    "actionsafter" : [],
                    "uroles" : "*",
                    "guards" : []
                }
            ]

        }
    ],
    "init" : [
        "Entered shop"
    ]

}