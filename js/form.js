/**
 * Created by joshuawarnock on 9/16/15.
 */

    var TheSearchInput = document.getElementById('searchinput');
    var TheSearchButton = document.getElementById('thesearchbutton');

    function SubmitSearch() {
      console.log(SearchFormData());
      var SearchClicked = new XMLHttpRequest();
      SearchClicked.open('POST','/form',true);
      SearchClicked.setRequestHeader('Content-type','application/json');
      SearchClicked.send(SearchFormData());
      SearchClicked.addEventListener('load',function(){
        console.log(SearchClicked.responsiveText);
      });
    }
    function SearchFormData(){
      var SearchFormData = new Object();
      SearchFormData.searchinput = document.forms[0].elements.searchinput.value;
      return JSON.stringify(SearchFormData);
    }
    function CheckSearchInput(TheSearchInput){
      var Message = document.getElementById('mtsearchdiv');
      if (TheSearchInput == 'search'){
        Message.textContent = 'You can do it!';
      } else {
        Message.textContent = 'Sorry';
      }
    }
    TheSearchInput.addEventListener('blur', function () {
      var UserSearchInput = document.getElementById('searchinput');
      CheckSearchInput(UserSearchInput.value);
    },false);
    TheSearchButton.addEventListener('click',function(e){
      e.preventDefault();
      var UserSearchClick = document.getElementById('thesearchbutton');
      SubmitSearch(TheSearchInput.value);
    },false);




// Sign In Form
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

