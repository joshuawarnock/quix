/**
 * Created by joshuawarnock on 9/15/15.
 */

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
// Tile Hide/Show-------------------------------------------|
var grabbedList = document.getElementById('nav-list');
grabbedList.addEventListener('click', function(theEvent){
  var content = theEvent.target.getAttribute('data-content');
  checkTheclick(content);
},false);
function checkTheclick(contentId){
  var section = document.getElementById(contentId);
  var elStyle = window.getComputedStyle(section).getPropertyValue('display');
  console.log(elStyle);
  if (elStyle == 'block') {
    section.style.display = 'none';
  } else if (elStyle == 'none' || elStyle == '') {
    section.style.display = 'block';
  }
}
// Account Hide/Show-----------------------------|
var AccountTile = document.getElementById('account-tile');
AccountTile.addEventListener('dblclick', function(theEvent){
  var content = theEvent.target.getAttribute('data-content');
  AccountShow(content);
});
function AccountShow(contentId){
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
  console.log(theDiv);
  theDiv.style.display = 'block';
}
accountButtons.addEventListener('click', function(){
  var content = event.target.getAttribute('data-content');
  showTab(content);
});
// Vehicle Selector Hide/Show-----------------------------|
var VehicleTile = document.getElementById('vehicle-tile');
VehicleTile.addEventListener('dblclick', function(theEvent){
  var content = theEvent.target.getAttribute('data-content');
  SelectorShow(content);
},false);
function SelectorShow(contentId){
  var section = document.getElementById(contentId);
  if (section.style.display == 'block') {
    section.style.display = 'none';
  } else if (section.style.display == 'none' || section.style.display == '') {
    section.style.display = 'block';
  }
}
// Vehicle Selector Display Selection--------------------------------------|
var VehicleSubmitButton = document.getElementById('vehicle-submit-button');
function VehicleSelection(){
  var VehicleDisplay = document.getElementById('vehicle-selection');
  var VehicleYear = document.getElementById('year');
  var VehicleMake = document.getElementById('make');
  var VehicleModel = document.getElementById('model');
  var VehicleEdition = document.getElementById('edition');
  var VehicleEngine = document.getElementById('engine');
  VehicleDisplay.textContent = 'Current Vehicle: ' + VehicleYear.value + ' ' + VehicleMake.value + ' ' + VehicleModel.value + ' ' + VehicleEdition.value + ' ' + VehicleEngine.value;
}
VehicleSubmitButton.addEventListener('click', function(event){
  var content = event.target.getAttribute('data-content');
  event.preventDefault();
  VehicleSelection(content);
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
// Engine breadcrumb selector
$('#engine').change( function(){
  var element = document.getElementById('engine');
  var selectedEdition = element.options[element.selectedIndex].text;
  var editionCrumb = document.getElementById('engine-crumb');
  editionCrumb.text = selectedEdition;
});
//// Search Tile Expand and Listener-------------------------------|
//var TheSearchButton = document.getElementById('thesearchbutton');
//function ResultResize(){
//  var ResultBox = document.getElementById('search-tile');
//  ResultBox.style.height = '1500px';
//  ResultBox.style.width = '100%';
//}
//TheSearchButton.addEventListener('click',function(e){
//  e.preventDefault();
//  var UserSearchClick = document.getElementById('return1title');
//  ResultResize(TheSearchInput.value);
//},false);

// Search Container show/hide --------------------------|
var SearchTile = document.getElementById('search-tile');
function SearchShow(contentId){
  var section = document.getElementById(contentId);
  var elStyle = window.getComputedStyle(section).getPropertyValue('display');
  if (elStyle == 'block') {
    section.style.display = 'none';
  } else if (elStyle == 'none' || elStyle == '') {
    section.style.display = 'block';
  }
}
SearchTile.addEventListener('dblclick', function(theEvent){
  var content = theEvent.target.getAttribute('data-content');
  SearchShow(content);
},false);
