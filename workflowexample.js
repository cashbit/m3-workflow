var example= {
    "_id" : ObjectId("55910a033a26b25639be1f0b"),
    "name" : "ticketwf",
    "version" : "1.0",
    "collection" : "ticket",
    "uroles" : [
        "admin",
        "user",
        "guest"
    ],
    "steps" : [
        { name: "S1",
            transitions: [
                {
                    "name" : "entro",
                    "from" : "S1",
                    "to" : "S2",
                    "actionsbefore" : [],
                    "actionsafter" : [],
                    "uroles" : "*",
                    "guards" : []
                },
                {
                    "name" : "esco senza pagare",
                    "from" : "S1",
                    "to" : "S4",
                    "actionsbefore" : [],
                    "actionsafter" : [],
                    "uroles" : "*",
                    "guards" : []
                }
            ]},
        { name:"S2",
            transitions: [
                {
                    "name" : "scelgo",
                    "from" : "S2",
                    "to" : "S2",
                    "actionsbefore" : [],
                    "actionsafter" : [],
                    "uroles" : "*",
                    "guards" : []
                },
                {
                    "name" : "pago",
                    "from" : "S2",
                    "to" : "S3",
                    "actionsbefore" : [],
                    "actionsafter" : [],
                    "uroles" : "*",
                    "guards" : []
                }
            ] },
        { name: "S3",
            transitions: [
                {
                    "name" : "esco",
                    "from" : "S3",
                    "to" : "S4",
                    "actionsbefore" : [],
                    "actionsafter" : [],
                    "uroles" : "*",
                    "guards" : []
                }
            ]

        },
        { name:"S4",
            transitions: [
                {
                    "name" : "rientro",
                    "from" : "S4",
                    "to" : "S1",
                    "actionsbefore" : [],
                    "actionsafter" : [],
                    "uroles" : "*",
                    "guards" : []
                }
            ]

        }
    ],
    "init" : [
        "S1"
    ]

}