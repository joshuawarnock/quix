function SubmitSearch(){console.log(SearchFormData());var e=new XMLHttpRequest;e.open("GET","/api/search/"+TheSearchInput.value,!0),e.setRequestHeader("Content-type","application/json"),e.send(),e.addEventListener("load",function(){for(var t=JSON.parse(e.responseText),n=document.getElementById("search-return-area"),r=0;r<t.length;r++){var a=document.createElement("div"),c=document.createElement("div"),u=document.createElement("div"),i=document.createElement("div");a.setAttribute("class","well"),c.textContent=t[r].title,c.setAttribute("class","result-title"),u.textContent=t[r].link,u.setAttribute("class","result-link"),u.setAttribute("href",t[r].link),i.textContent=t[r].description,i.setAttribute("class","result-description"),a.appendChild(c),a.appendChild(u),a.appendChild(i),n.appendChild(a)}})}function SearchFormData(){var e=new Object;return e.searchinput=document.forms[2].elements.searchinput.value,JSON.stringify(e)}var TheSearchInput=document.getElementById("searchinput"),TheSearchButton=document.getElementById("thesearchbutton");TheSearchButton.addEventListener("click",function(e){e.preventDefault();document.getElementById("thesearchbutton");SubmitSearch(TheSearchInput.value)},!1);