define( [ "machina" ], function( machina ) {
    var AppFsm = machina.Fsm.extend({
        initialState: "uninitialized",
        namespace: "app.fsm",
        states: {
        "uninitialized" : {
            _onEnter: function() {
                // do stuff immediately after we transition into uninitialized
                this.handle( "initialize" );
            },

            "initialize" : function( payload ) {
                // handle an "initialize" event
                // Here you could do some kind of async operation to get the app ready.
                this.transition( "ready" );
            },

            _onExit: function() {
                // do stuff immediately before we transition out of uninitialized
                // Note: you can't transition or invoke another inside _onExit
            }
        },

        "ready" : {
            "_onEnter" : function( payload ) {
                    // any message that comes while in the "ready" state will get handled here
                    // unless it matches another "ready" handler exactly.
                    this.emit( "ready" );
                }
            }
        }
    });

    return AppFsm;
});