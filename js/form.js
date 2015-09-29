/**
 * Created by joshuawarnock on 9/16/15.
 */

var TheSearchInput = document.getElementById('searchinput');
var TheSearchButton = document.getElementById('thesearchbutton');

function SubmitSearch() {
  console.log(SearchFormData());
  var SearchClicked = new XMLHttpRequest();
  SearchClicked.open('GET','/api/search/' + TheSearchInput.value,true);
  SearchClicked.setRequestHeader('Content-type','application/json');
  SearchClicked.send();
  SearchClicked.addEventListener('load',function(){
    var results = JSON.parse(SearchClicked.responseText);
    var resultList = document.getElementById('search-return-area');
    for (var i = 0; i < results.length; i++) {
      var result = document.createElement('div');
      var title = document.createElement('div');
      var link = document.createElement('div');
      var description = document.createElement('div');

      result.setAttribute('class', 'well');
      title.textContent = results[i].title;
      title.setAttribute('class', 'result-title');
      link.textContent = results[i].link;
      link.setAttribute('class', 'result-link');
      link.setAttribute('href', results[i].link);
      description.textContent = results[i].description;
      description.setAttribute('class', 'result-description');

      result.appendChild(title);
      result.appendChild(link);
      result.appendChild(description);
      resultList.appendChild(result);
    }
  });
}
function SearchFormData(){
  var SearchFormData = new Object();
  SearchFormData.searchinput = document.forms[2].elements.searchinput.value;
  return JSON.stringify(SearchFormData);
}
TheSearchButton.addEventListener('click',function(e){
  e.preventDefault();
  var UserSearchClick = document.getElementById('thesearchbutton');
  SubmitSearch(TheSearchInput.value);
},false);