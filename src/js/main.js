requirejs.config({
    paths: {
        "backbone"       : "vendor/backbone",
        "underscore"     : "vendor/underscore-min",
        "machina"        : "vendor/machina",
        "postal"         : "vendor/postal",
        "machina-postal" : "vendor/machina.postal",
        "monopost"       : "vendor/monopost",
        "template"       : "../templates",
        "monologue"      : "vendor/monologue",
        "io"             : "socket.io/socket.io"
    },
    // urlArgs: "bust=" +  (new Date()).getTime(),
    shim: {
        "backbone": {
            deps: [ "jquery", "underscore" ],
            exports: "Backbone"
        },
        "underscore": {
            exports: "_"
        },
        "monopost": {
            deps: [ "monologue" ]
        }
    }
});

if ( !window.mocha ) {
    requirejs( [ "jquery", "app", "postal", "machina", "machina-postal", "monologue", "monopost" ], function ( $, app, postal, machina, machP, Monologue, monP ) {
        
        app.init();
        
        window.app = app;
    });
}

