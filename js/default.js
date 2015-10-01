/**
 * Created by joshuawarnock on 9/15/15.
 */

// Dashboard Setup-------------------------------------------|
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
// Tile Hide/Show---------------------------------------------|
var grabbedList = document.getElementById('nav-list');
grabbedList.addEventListener('click', function(theEvent){
  var content = theEvent.target.getAttribute('data-content');
  checkTheclick(content);
},false);
function checkTheclick(contentId){
  var section = document.getElementById(contentId);
  var elStyle = window.getComputedStyle(section).getPropertyValue('display');
  if (elStyle == 'block') {
    section.style.display = 'none';
  } else if (elStyle == 'none' || elStyle == '') {
    section.style.display = 'block';
  }
}
// Account Hide/Show-----------------------------|
var accountTile = document.getElementById('account-tile');
accountTile.addEventListener('dblclick', function(theEvent){
  var content = theEvent.target.getAttribute('data-content');
  accountShow(content);
});
function accountShow(contentId){
  var section = document.getElementById(contentId);
  var elStyle = window.getComputedStyle(section).getPropertyValue('display');
  if (elStyle == 'block') {
    section.style.display = 'none';
  } else if (elStyle == 'none' || elStyle == '') {
    section.style.display = 'block';
  }
}
// Account Tab Hide/Show-----------------------------|
var accountButtons = document.getElementById('account-button-group');
function showTab(contentId) {
  var theDiv = document.getElementById(contentId);
  var restDivs = ['profile-tab', 'vehicles-tab', 'projects-tab', 'friends-tab', 'photos-tab'];
  for (var i = 0; i < restDivs.length; i++){
    if (theDiv != document.getElementById(restDivs[i])){
      document.getElementById(restDivs[i]).style.display = 'none';
    }
  }
  theDiv.style.display = 'block';
}
accountButtons.addEventListener('click', function(){
  var content = event.target.getAttribute('data-content');
  showTab(content);
});
// Vehicle Selector Hide/Show-----------------------------|
var vehicleTile = document.getElementById('vehicle-tile');

vehicleTile.addEventListener('dblclick', function(theEvent){
  var content = theEvent.target.getAttribute('data-content');
  selectorShow(content);
},false);

function selectorShow(contentId){
  var section = document.getElementById(contentId);
  if (section.style.display == 'block') {
    section.style.display = 'none';
  } else if (section.style.display == 'none' || section.style.display == '') {
    section.style.display = 'block';
  }
}

// Vehicle Selector Display Selection--------------------------------------|
var vehicleSubmitButton = document.getElementById('vehicle-submit-button');

function vehicleSelection(){
  var vehicleDisplay = document.getElementById('vehicle-selection');
  var vehicleYear = document.getElementById('year');
  var vehicleMake = document.getElementById('make');
  var vehicleModel = document.getElementById('model');
  var vehicleEdition = document.getElementById('edition');
  vehicleDisplay.textContent = vehicleYear.value + ' ' + vehicleMake.value + ' ' + vehicleModel.value + ' ' + vehicleEdition.value;
}

vehicleSubmitButton.addEventListener('click', function(event){
  var content = event.target.getAttribute('data-content');
  event.preventDefault();
  vehicleSelection(content);
},false);

// Breadcrumb Selector ------------------------------------------|
// Year breadcrumb selector
$('#year').change( function(){
  var element = document.getElementById('year');
  var selectedYear = element.options[element.selectedIndex].text;
  var yearCrumb = document.getElementById('year-crumb');
  yearCrumb.text = selectedYear;
});

// Make breadcrumb selector
$('#make').change( function(){
  var element = document.getElementById('make');
  var selectedMake = element.options[element.selectedIndex].text;
  var makeCrumb = document.getElementById('make-crumb');
  makeCrumb.text = selectedMake;
});

// Model breadcrumb selector
$('#model').change( function(){
  var element = document.getElementById('model');
  var selectedModel = element.options[element.selectedIndex].text;
  var modelCrumb = document.getElementById('model-crumb');
  modelCrumb.text = selectedModel;
});
// Edition breadcrumb selector
$('#edition').change( function(){
  var element = document.getElementById('edition');
  var selectedEdition = element.options[element.selectedIndex].text;
  var editionCrumb = document.getElementById('edition-crumb');
  editionCrumb.text = selectedEdition;
});
// Search Container show/hide --------------------------|
var searchTile = document.getElementById('search-tile');
function searchShow(contentId){
  var section = document.getElementById(contentId);
  var elStyle = window.getComputedStyle(section).getPropertyValue('display');
  if (elStyle == 'block') {
    section.style.display = 'none';
  } else if (elStyle == 'none' || elStyle == '') {
    section.style.display = 'block';
  }
}
searchTile.addEventListener('dblclick', function(theEvent){
  var content = theEvent.target.getAttribute('data-content');
  searchShow(content);
},false);
// Document Container show/hide --------------------------|
var documentsTile = document.getElementById('manual-tile');
function documentShow(contentId){
  var section = document.getElementById(contentId);
  var elStyle = window.getComputedStyle(section).getPropertyValue('display');
  if (elStyle == 'block') {
    section.style.display = 'none';
  } else if (elStyle == 'none' || elStyle == '') {
    section.style.display = 'block';
  }
}
documentsTile.addEventListener('dblclick', function(theEvent){
  var content = theEvent.target.getAttribute('data-content');
  documentShow(content);
},false);

var div_menu = document.getElementById('navbar-menu');
window.onscroll = function (e) {
  if (div_menu)
    div_menu.style.top = window.pageYOffset + 'px';
};