var button = document.getElementById('edit'),
textarea=document.getElementById('textarea'),
paragraph=document.querySelector('p');
button.onclick=function() { if (button.textContent==='sub')
{ //second click sub
    if(textarea.value!=='') {paragraph.textContent=textarea.value;}
    paragraph.setAttribute('style','');
    textarea.setAttribute('style','display:none');
    button.textContent='Edit';
}
else{ //first click edit
     textarea.value=paragraph.textContent;
    paragraph.setAttribute('style','visibility:hidden');
    textarea.setAttribute('style','display:inline-block');
    button.textContent='sub';
}
};
/*____________________________search button will appear on focus____________________________
var sub_search=document.getElementById('sub_search'),
searchInput=document.getElementById('searchInput');
searchInput.onfocus=function (){sub_search.setAttribute('style','display:inline-block');};
searchInput.onblur=function (){sub_search.setAttribute('style','display:none');};
*/
//__________________________________search process _______________________________________________
var sub_search=document.getElementById('sub_search'),
parent_div=document.getElementById('parent'),
resultsOfSearch = document.getElementById('resultsOfSearch');
var exitResults = document.getElementById('exitResults');
var element = parent_div.querySelectorAll('div');

sub_search.onclick = function(){
    for (var i=0 ; i < parent_div.querySelectorAll('div').length ; i++)
    {   var searchValue=searchInput.value;
        if(element[i].classList.contains(searchValue))
        {
        //show this element in div of results
        var cloneOfElement = element[i].cloneNode(true);
        resultsOfSearch.setAttribute('style','visibility:visible');
        exitResults.setAttribute('style','visibility:visible');
        resultsOfSearch.innerHTML='<h2 style="text-align:center">Result</h2>';
        resultsOfSearch.appendChild(cloneOfElement);
        //____to show portraits in results____
        if (cloneOfElement.id ==='div_portrait'){
            cloneOfElement.setAttribute('style','display:block');
        }
        break;
        }
       else
       {
        if(i==(parent_div.querySelectorAll('div').length-1)){
            resultsOfSearch.setAttribute('style','visibility:visible');
            exitResults.setAttribute('style','visibility:visible');
            resultsOfSearch.innerHTML='<h2 style="text-align:center">no results found</h2>';
        }
       }
    }
};
exitResults.onclick = function(){
resultsOfSearch.setAttribute('style','visibility:hidden');
this.setAttribute('style','visibility:hidden');
resultsOfSearch.innerHTML='';
};
//______________________________change pro pic________________________________

var pro_pic = document.getElementById('pro_pic'),
change_photo = document.getElementById('change_photo'),
file_browser = document.getElementById('file_browser');


pro_pic.onmouseover = function(){
    change_photo.setAttribute('style','display: inline-block');
};
pro_pic.onmouseout = function(){
    change_photo.setAttribute('style','display: none');
};
pro_pic.onclick = function(){
    file_browser.click();
    change_photo.setAttribute('name','clicked');
};

if (file_browser.value!==''){
     var ChosenPhoto = file_browser.value;
    pro_pic.setAttribute( 'src',ChosenPhoto);
    }
   console.log(change_photo.name);
   
//_______________________________________when no connection_____________________________________

var not_connected = document.getElementById('not_connected'),
drawingPage = document.getElementById('drawingPage'),
ul_links = document.getElementById('ul_links');
not_connected.onclick = function () {
    drawingPage.setAttribute('style','left: -61px ; top: 33px');
    ul_links.setAttribute('style','position: relative ; right: 11px');
};