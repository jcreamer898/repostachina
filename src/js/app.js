define( [ "underscore", "monologue", "postal", "fsm/appFsm", "monopost", "machina-postal" ], function( _, Monologue, postal, AppFsm ) {
	Monologue.debug = true;

	postal.addWireTap(function( data, env ) {
        console.log( JSON.stringify( env ) );
    });

	var App = function() {

	};


	_.extend( App.prototype, {
		init: function() {
			this.goPostal( "app" );

			this.channels = {
				"app": postal.channel( "app" ),
				"fsm": postal.channel( "app.fsm.events" )
			};
			this.channels.fsm.subscribe( "ready", this.ready )
				.withContext( this );

			this.fsm = new AppFsm();
		},
		ready: function() {
			this.emit( "ready" );
		}
	});

	Monologue.mixin( App );

	return new App();
});