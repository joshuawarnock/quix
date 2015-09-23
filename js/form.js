/**
 * Created by joshuawarnock on 9/16/15.
 */

var TheSearchInput = document.getElementById('searchinput');
var TheSearchButton = document.getElementById('thesearchbutton');

var SearchReturn1Title = document.getElementById('return1title');
var SearchReturn1Link = document.getElementById('return1link');
var SearchReturn1Desc = document.getElementById('return1desc');

var SearchReturn2Title = document.getElementById('return2title');
var SearchReturn2Link = document.getElementById('return2link');
var SearchReturn2Desc = document.getElementById('return2desc');

var SearchReturn3Title = document.getElementById('return3title');
var SearchReturn3Link = document.getElementById('return3link');
var SearchReturn3Desc = document.getElementById('return3desc');

var SearchReturn4Title = document.getElementById('return4title');
var SearchReturn4Link = document.getElementById('return4link');
var SearchReturn4Desc = document.getElementById('return4desc');

var SearchReturn5Title = document.getElementById('return5title');
var SearchReturn5Link = document.getElementById('return5link');
var SearchReturn5Desc = document.getElementById('return5desc');

var SearchReturn6Title = document.getElementById('return6title');
var SearchReturn6Link = document.getElementById('return6link');
var SearchReturn6Desc = document.getElementById('return6desc');

var SearchReturn7Title = document.getElementById('return7title');
var SearchReturn7Link = document.getElementById('return7link');
var SearchReturn7Desc = document.getElementById('return7desc');

var SearchReturn8Title = document.getElementById('return8title');
var SearchReturn8Link = document.getElementById('return8link');
var SearchReturn8Desc = document.getElementById('return8desc');

var SearchReturn9Title = document.getElementById('return9title');
var SearchReturn9Link = document.getElementById('return9link');
var SearchReturn9Desc = document.getElementById('return9desc');

var SearchReturn10Title = document.getElementById('return10title');
var SearchReturn10Link = document.getElementById('return10link');
var SearchReturn10Desc = document.getElementById('return10desc');


function SubmitSearch() {
  console.log(SearchFormData());
  var SearchClicked = new XMLHttpRequest();
  SearchClicked.open('GET','/api/search/' + TheSearchInput.value,true);
  SearchClicked.setRequestHeader('Content-type','application/json');
  SearchClicked.send();
  SearchClicked.addEventListener('load',function(){
    var Results = JSON.parse(SearchClicked.responseText);
    for (var i = 0; i < Results.length; i++){

      SearchReturn1Title.textContent = Results[0].title;
      SearchReturn1Link.textContent = Results[0].link;
      SearchReturn1Desc.textContent = Results[0].description;

      SearchReturn2Title.textContent = Results[1].title;
      SearchReturn2Link.textContent = Results[1].link;
      SearchReturn2Desc.textContent = Results[1].description;

      SearchReturn3Title.textContent = Results[2].title;
      SearchReturn3Link.textContent = Results[2].link;
      SearchReturn3Desc.textContent = Results[2].description;

      SearchReturn4Title.textContent = Results[3].title;
      SearchReturn4Link.textContent = Results[3].link;
      SearchReturn4Desc.textContent = Results[3].description;

      SearchReturn5Title.textContent = Results[4].title;
      SearchReturn5Link.textContent = Results[4].link;
      SearchReturn5Desc.textContent = Results[4].description;

      SearchReturn6Title.textContent = Results[5].title;
      SearchReturn6Link.textContent = Results[5].link;
      SearchReturn6Desc.textContent = Results[5].description;

      SearchReturn7Title.textContent = Results[6].title;
      SearchReturn7Link.textContent = Results[6].link;
      SearchReturn7Desc.textContent = Results[6].description;

      SearchReturn8Title.textContent = Results[7].title;
      SearchReturn8Link.textContent = Results[7].link;
      SearchReturn8Desc.textContent = Results[7].description;

      SearchReturn9Title.textContent = Results[8].title;
      SearchReturn9Link.textContent = Results[8].link;
      SearchReturn9Desc.textContent = Results[8].description;

      SearchReturn10Title.textContent = Results[9].title;
      SearchReturn10Link.textContent = Results[9].link;
      SearchReturn10Desc.textContent = Results[9].description;

    }
  });
}

function SearchFormData(){
  var SearchFormData = new Object();
  SearchFormData.searchinput = document.forms[1].elements.searchinput.value;
  return JSON.stringify(SearchFormData);
}

TheSearchButton.addEventListener('click',function(e){
  e.preventDefault();
  var UserSearchClick = document.getElementById('thesearchbutton');
  SubmitSearch(TheSearchInput.value);
},false);








//
//// Sign In Form
//var emailInput = document.getElementById('emailinput');
//var passwordInput = document.getElementById('passwordinput');
//function checkEmail(usernameInput){
//  var mssG = document.getElementById('empty-username-div');
//  if (usernameInput == 'bond'){
//    mssG.textContent = "Username Ok";
//  } else {
//    mssG.textContent = "Username Bad";
//  }
//}
//function checkPassword(passwordInput){
//  var mssG = document.getElementById('empty-password-div');
//  if (passwordInput == 'secret'){
//    mssG.textContent = "Password Ok.";
//  } else {
//    mssG.textContent = "Password Bad";
//  }
//}
//function submitSigninform(event) {
//  event.preventDefault();
//  console.log(formData());
//  var whenClicked = new XMLHttpRequest();
//  whenClicked.open("POST", "/form", true);
//  whenClicked.setRequestHeader("Content-type", "application/json");
//  whenClicked.send(formData());
//  whenClicked.addEventListener('load', function(){
//    console.log(whenClicked.responseText);
//  });
//}
//function formData() {
//  var formData = new Object();
//  formData.emailInput = document.forms[0].elements.emailInput.value;
//  formData.passwordInput = document.forms[0].elements.passwordInput.value;
//  return JSON.stringify(formData);
//}
//emailInput.addEventListener('blur', function(){
//  var userEmail = document.getElementById('emailinput');
//  checkEmail(userEmail.value);
//}, false);
//passwordInput.addEventListener('blur', function(){
//  var userPassword = document.getElementById('passwordinput');
//  checkPassword(userPassword.value);
//}, false);
//
//thesigninbutton.addEventListener('click', function(e){
//  e.preventDefault();
//  var userClick = document.getElementById('thesigninbutton');
//  submitSigninform( emailInput.value, passwordInput.value);
//}, false);
//
//thesigninbutton.addEventListener('click', submitSigninform, false);
//
//
//
//
//(function() {
//  var cx = '011075513619769460761:ryuippg5eoy';
//  var gcse = document.createElement('script');
//  gcse.type = 'text/javascript';
//  gcse.async = true;
//  gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
//      '//cse.google.com/cse.js?cx=' + cx;
//  var s = document.getElementsByTagName('script')[0];
//  s.parentNode.insertBefore(gcse, s);
//})();



