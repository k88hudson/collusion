(function(){

  var nav = document.querySelector( ".cl-nav" );
  var sampleDropdown = document.querySelector( ".dropdown-example" );

  function dropDownGroup( el, callback ) {
    var view = document.querySelector( "[data-view]" ),
        list = el.querySelector( "[data-list]" );

    callback = callback || function(){};

    el.addEventListener( "click", function( e ) {
      var selected = el.querySelector( "[data-selected]" );
          targetValue = e.target.getAttribute( "data-value" );
      el.classList.toggle( "expanded" );
      if ( targetValue ) {
        view.innerHTML = e.target.innerHTML;
        selected.removeAttribute( "data-selected" );
        e.target.setAttribute( "data-selected", true );
        callback( targetValue );
      }
    }, false );
  }

  dropDownGroup( sampleDropdown, function( val ) {
    console.log( val );
  });

}());
