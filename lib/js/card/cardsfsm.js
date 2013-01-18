define( [ "machina" ], function( machina ) {
    var CardsFsm = machina.Fsm.extend({
        initialState: "uninitialized",
        namespace: "app.fsm",
        states: {
        "uninitialized" : {
            _onEnter: function() {
                // do stuff immediately after we transition into uninitialized
            },

            "initialize" : function( payload ) {
                // handle an "initialize" event
            },

            _onExit: function() {
                // do stuff immediately before we transition out of uninitialized
                // Note: you can't transition or invoke another inside _onExit
            }
        },

        "ready" : {
            "*" : function( payload ) {
                // any message that comes while in the "ready" state will get handled here
                // unless it matches another "ready" handler exactly.
                }
            }
        }
    });

    return CardsFsm;
});