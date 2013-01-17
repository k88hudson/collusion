(function(){
    var SAMPLE_DATA = {
        "nytimes.com" : {
            name: "New York Times",
            trackers: [
                "facebook.com",
                "blah.com"
            ]
        },
        "facebook.com": {
            name: "Facebook",
            trackers: [
                "facebook.com",
                "blah.com"
            ]
        }
    };

    var nav = document.querySelector( ".cl-nav" );
    var allTab = document.querySelector( ".cl-all" );
    var stage = document.querySelector( ".cl-stage" );
    var infoPanel = document.querySelector( ".cl-info" );
    var trackerPanel = document.querySelector( ".cl-tracker-panel" );
    var activeTab;

    var siteTitle = infoPanel.querySelector( ".cl-name" );
    var siteURL = infoPanel.querySelector( ".cl-url" );
    var trackerList = trackerPanel.querySelector( ".cl-tracker-list" );

    var sampleDropdown = document.querySelector( ".dropdown-example" );

    var views = {};

    function toggleActiveState() {
        if ( activeTab ) {
            activeTab.classList.remove( "active" );
        }
        this.classList.toggle( "active" );
        activeTab = this;
    }

    function toggleDrownDown( el ) {
        el.addEventListener( "click", function( e ) {
            el.classList.toggle( "expanded" );
        }, false );
    }

    views.all = function() {
        toggleActiveState.call( this );
        infoPanel.classList.remove( "on" );
        trackerPanel.classList.remove( "on" );
        stage.style.width = "750px";
    };

    views.site = function() {
        var url = this.innerHTML,
            data = SAMPLE_DATA[ url ];

        toggleActiveState.call( this );
        infoPanel.classList.add( "on" );
        trackerPanel.classList.add( "on" );
        stage.style.width = "";

        siteTitle.innerHTML = data.name;
        siteURL.innerHTML = url;
    };

    function createSiteEl( site ) {
        var data = SAMPLE_DATA[ site ],
            li = document.createElement( "li" ),
            a = document.createElement( "a" );

        a.innerHTML = site;
        a.classList.add( "site" );
        a.addEventListener( "click", views.site, false );

        li.appendChild( a );
        nav.appendChild( li );
    }

    // Setup
    for ( var site in SAMPLE_DATA ) {
        if ( SAMPLE_DATA.hasOwnProperty ( site ) ) {
            createSiteEl( site );
        }
    }

    toggleDrownDown( sampleDropdown );

    allTab.addEventListener( "click", views.all, false );
    views.all();
}());
