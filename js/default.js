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
var TheSearchButton = document.getElementById('thesearchbutton');
function ResultResize(){
  var ResultBox = document.getElementById('search-tile');
  ResultBox.style.height = '1500px';
  ResultBox.style.width = '100%';
}
TheSearchButton.addEventListener('click',function(e){
  e.preventDefault();
  var UserSearchClick = document.getElementById('return1title');
  ResultResize(TheSearchInput.value);
},false);

var TheAccountButton = document.getElementById('account-button');
var TheAccountTile = document.getElementById('account-tile');

var grabbedList = document.getElementById('nav-list');

grabbedList.addEventListener('click', function(theEvent){
  var content = theEvent.target.getAttribute('data-content');
  checkTheclick(content);
},false);

function checkTheclick(contentId){
  var section = document.getElementById(contentId);
  if (section.style.display == 'block') {
    section.style.display = 'none';
  } else if (section.style.display == 'none' || section.style.display == '') {
    section.style.display = 'block';
  }
}


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


