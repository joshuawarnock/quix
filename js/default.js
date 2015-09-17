/**
 * Created by joshuawarnock on 9/15/15.
 */

// external js
// http://packery.metafizzy.co/packery.pkgd.js
// http://draggabilly.desandro.com/draggabilly.pkgd.js

// Packery setup---------------------------------------------|
$( function() {
  var $container = $('.packery').packery({
    columnWidth: 40,
    rowHeight: 40
  });
  $container.find('.item').each( function( i, itemElem ) {
    // make element draggable with Draggabilly
    var draggie = new Draggabilly( itemElem );
    // bind Draggabilly events to Packery
    $container.packery( 'bindDraggabillyEvents', draggie );
  });
});
// Packery setup---------------------------------------------|

// Prepend Tile---------------------------------------------|
$( function() {
  var $container = $('.packery').packery();
  $('#account-button').on( 'click', function() {
    // create new item elements
    var elems = [];
    for ( var i = 0; i < 1; i++ ) {
      var elem = getItemElement();
      elems.push( elem );
    }
    // append elements to container
    $container.prepend( elems );
    // add and lay out newly appended elements
    $container.packery( 'prepended', elems );
  });
});
$( function() {
  var $container = $('.packery').packery();
  $('#vehicle-button').on( 'click', function() {
    // create new item elements
    var elems = [];
    for ( var i = 0; i < 1; i++ ) {
      var elem = getItemElement();
      elems.push( elem );
    }
    // append elements to container
    $container.prepend( elems );
    // add and lay out newly appended elements
    $container.packery( 'prepended', elems );
  });
});
// Create item element
function getItemElement() {
  var elem = document.createElement('div');
  var widthClass = 'w2';
  var heightClass = 'h2';
  elem.className = 'item ' + widthClass + ' ' + heightClass;
  return elem;
}
// Prepend Tile---------------------------------------------|


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
