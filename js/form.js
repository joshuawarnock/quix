/**
 * Created by joshuawarnock on 9/16/15.
 */

var emailInput = document.getElementById('emailinput');
var passwordInput = document.getElementById('passwordinput');

function checkEmail(usernameInput){
  var mssG = document.getElementById('empty-username-div');
  if (usernameInput == 'bond'){
    mssG.textContent = "Username Ok";
  } else {
    mssG.textContent = "Username Bad";
  }
}

function checkPassword(passwordInput){
  var mssG = document.getElementById('empty-password-div');
  if (passwordInput == 'secret'){
    mssG.textContent = "Password Ok.";
  } else {
    mssG.textContent = "Password Bad";
  }
}

emailInput.addEventListener('blur', function(){
  var userEmail = document.getElementById('emailinput');
  checkEmail(userEmail.value);
}, false);

passwordInput.addEventListener('blur', function(){
  var userPassword = document.getElementById('passwordinput');
  checkPassword(userPassword.value);
}, false);



