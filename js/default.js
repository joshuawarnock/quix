/**
 * Created by joshuawarnock on 9/15/15.
 */

// external js
// http://packery.metafizzy.co/packery.pkgd.js
// http://draggabilly.desandro.com/draggabilly.pkgd.js

// Packery setup------------------------------------------------------------------|
$( function() {
  var $container = $('.packery').packery({
    columnWidth: 20,
    rowHeight: 20
  });
  $container.find('.item').each( function( i, itemElem ) {
    // make element draggable with Draggabilly
    var draggie = new Draggabilly( itemElem );
    // bind Draggabilly events to Packery
    $container.packery( 'bindDraggabillyEvents', draggie );
  });
});
// Prepend Tile Begin-------------------------------------------------------------|
// Account Tile
$( function() {
  var $container = $('.packery').packery();
  $('#account-button').on( 'click', function() {
    // create new item elements
    var elems = [];
    for ( var i = 0; i < 1; i++ ) {
      var elem = MakeAccountTile();
      elems.push( elem );
    }
    // append elements to container
    $container.prepend( elems );
    // add and lay out newly appended elements
    $container.packery( 'prepended', elems );
  });
});
// Vehicle Tile
$( function() {
  var $container = $('.packery').packery();
  $('#vehicle-button').on( 'click', function() {
    // create new item elements
    var elems = [];
    for ( var i = 0; i < 1; i++ ) {
      var elem = VehicleTileMaker();
      elems.push( elem );
    }
    // append elements to container
    $container.prepend( elems );
    // add and lay out newly appended elements
    $container.packery( 'prepended', elems );
  });
});
// Manual Tile
$( function() {
  var $container = $('.packery').packery();
  $('#manual-button').on( 'click', function() {
    // create new item elements
    var elems = [];
    for ( var i = 0; i < 1; i++ ) {
      var elem = ManualTileMaker();
      elems.push( elem );
    }
    // append elements to container
    $container.prepend( elems );
    // add and lay out newly appended elements
    $container.packery( 'prepended', elems );
  });
});
// Shop Tile
$( function() {
  var $container = $('.packery').packery();
  $('#shop-button').on( 'click', function() {
    // create new item elements
    var elems = [];
    for ( var i = 0; i < 1; i++ ) {
      var elem = ShopTileMaker();
      elems.push( elem );
    }
    // append elements to container
    $container.prepend( elems );
    // add and lay out newly appended elements
    $container.packery( 'prepended', elems );
  });
});
// Video Tile
$( function() {
  var $container = $('.packery').packery();
  $('#video-button').on( 'click', function() {
    // create new item elements
    var elems = [];
    for ( var i = 0; i < 1; i++ ) {
      var elem = VideoTileMaker();
      elems.push( elem );
    }
    // append elements to container
    $container.prepend( elems );
    // add and lay out newly appended elements
    $container.packery( 'prepended', elems );
  });
});
// Search Tile
$( function() {
  var $container = $('.packery').packery();
  $('#search-button').on( 'click', function() {
    // create new item elements
    var elems = [];
    for ( var i = 0; i < 1; i++ ) {
      var elem = SearchTileMaker();
      elems.push( elem );
    }
    // append elements to container
    $container.prepend( elems );
    // add and lay out newly appended elements
    $container.packery( 'prepended', elems );
  });
});
// Account Tile Maker
function MakeAccountTile() {
  var elem = document.createElement('div');
  elem.className = 'item w3 h3';
  elem.id = 'account-tile';
  //elem.background = "url('/images/my-account-icon.png') no-repeat center center";
  elem.style.backgroundImage = "url('/images/my-account-icon.png')";
  elem.style.backgroundRepeat = "no-repeat";
  elem.style.verticalAlign = "middle";
  return elem;
}
// Vehicle Tile Maker
function VehicleTileMaker() {
  var elem = document.createElement('div');
  elem.className = 'item w3 h3';
  elem.id = 'vehicles-tile';
  elem.style.backgroundImage = "url('/images/my-vehicles-icon.png')";
  elem.style.backgroundRepeat = "no-repeat";
  return elem;
}
// Manual Tile Maker
function ManualTileMaker() {
  var elem = document.createElement('div');
  elem.className = 'item w3 h3';
  elem.id = 'manual-tile';
  elem.style.backgroundImage = "url('/images/manual-icon-tran.png')";
  elem.style.backgroundRepeat = "no-repeat";
  return elem;
}
// Shop Tile Maker
function ShopTileMaker() {
  var elem = document.createElement('div');
  elem.className = 'item w3 h3';
  elem.id = 'shop-tile';
  elem.style.backgroundImage = "url('/images/parts-shopping-icon.png')";
  elem.style.backgroundRepeat = "no-repeat";
  return elem;
}
// Video Tile Maker
function VideoTileMaker() {
  var elem = document.createElement('div');
  elem.className = 'item w3 h3';
  elem.id = 'video-tile';
  elem.style.backgroundImage = "url('/images/play-icon.png')";
  elem.style.backgroundRepeat = "no-repeat";
  return elem;
}
// Search Tile Maker
//function SearchTileMaker() {
//  var elem = document.createElement('div');
//  elem.className = 'item w3 h3';
//  elem.id = 'search-tile';
//  var elem2 = document.createElement('div');
//  elem2.className = 'row center-block search-row';
//  elem.appendChild('elem2');
//  return elem;
//}
function SearchTileMaker() {
  var elem = document.createElement('div');
  elem.innerHTML = '<div class="item w3 h3"><div class="row center-block search-row"> <div class="col-md-12"> <div id="carousel-search-container"> <h3 class="text-center carousel-search-heading">Find your fix.</h3> <form> <div class="input-group stylish-input-group"> <input id="searchinput" type="text" class="form-control" placeholder="Search"> <span class="input-group-addon carousel-search-button"><button id="thesearchbutton" type="submit"><span class="glyphicon glyphicon-search"></span></button></span> </div> <div id="mtsearchdiv"></div> </form> </div> </div> </div> </div>';
  return elem;
}
// Prepend Tile End---------------------------------------------|

// Tile Expand Fit
$( function() {
  var $container = $('.packery').packery();
  $container.on( 'dblclick', '.item', function( event ) {
    var $target = $( event.target );
    var isGigante = $target.hasClass('gigante');
    $target.toggleClass('gigante');
    if ( isGigante ) {
      // if shrinking, just layout
      $container.packery();
    } else {
      $container.packery( 'fit', event.target );
    }
  });
});




//$(document).ready(function() {
//  $('#carousel-tile').carousel({
//    interval:   1000
//  });
//});

//// Carousel touch slider
//$(document).ready(function() {
//  $("#carousel-tile").swiperight(function() {
//    $(this).carousel('prev');
//  });
//  $("#carousel-tile").swipeleft(function() {
//    $(this).carousel('next');
//  });
//});
