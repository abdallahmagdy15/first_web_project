/*global console*/
var button = document.getElementById('edit'),
textarea=document.getElementById('textarea'),
paragraph=document.querySelector('p');
button.onclick=function() {
        if (button.textContent==='sub')
    { //second click sub
        if(textarea.value!=='') {paragraph.textContent=textarea.value;}
        button.textContent='Edit';
        paragraph.setAttribute('style','transform: rotateY(0deg)');
        textarea.setAttribute('style','transform: rotateY(180deg)');
    }
    else{ //first click edit
        textarea.value=paragraph.textContent;
        button.textContent='sub';
        paragraph.setAttribute('style','transform: rotateY(180deg)');
        textarea.setAttribute('style','transform: rotateY(0deg)');
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
resultsOfSearch = document.getElementById('resultsOfSearch'),
 element = parent_div.querySelectorAll('div'),
 searchInput = document.getElementById('searchInput'),
 containerOfSearch = document.getElementById('containerOfSearch');

searchInput.onfocus = function(){
        containerOfSearch.setAttribute('style','transform: translateY(-30pc);transition:all .5s');
        resultsOfSearch.setAttribute('style','opacity:1;transition:all .5s');
        };

        sub_search.onblur = function (){
        containerOfSearch.setAttribute('style','transform: translateY(0pc);transition:all .5s');
        resultsOfSearch.setAttribute('style','opacity:0.0;transition:all .5s');
        resultsOfSearch.innerHTML='';
        };
       
       

sub_search.onclick = function(){
    for (var i=0 ; i < parent_div.querySelectorAll('div').length ; i++)
    {   var searchValue=searchInput.value;
        if(element[i].classList.contains(searchValue))
        {
        //show this element in div of results
        var cloneOfElement = element[i].cloneNode(true);
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
        containerOfSearch.setAttribute('style','transform: translateY(-30pc);transition:all .5s');
        resultsOfSearch.setAttribute('style','opacity:1;transition:all .5s');
        resultsOfSearch.innerHTML='<h2 style="text-align:center">no results found</h2>';
        }
       }
    }
};

//______________________________change pro pic________________________________

var pro_pic = document.getElementById('pro_pic'),
change_photo = document.getElementById('change_photo'),
file_browser = document.getElementById('file_browser');


pro_pic.onmouseenter = function(){
    change_photo.setAttribute('style','display: inline-block');
};
change_photo.onmouseenter = function(){
    change_photo.setAttribute('style','display: inline-block');
};
pro_pic.onmouseleave = function(){
    change_photo.setAttribute('style','display: none');
};
pro_pic.onclick = function(){
    file_browser.click();
    change_photo.setAttribute('bt','clicked');
};
change_photo.onclick = function(){
    file_browser.click();
    change_photo.setAttribute('bt','clicked');
};

if (file_browser.value!==''){
     var ChosenPhoto = file_browser.value;
    pro_pic.setAttribute( 'src','img/'+ChosenPhoto.slice(11));
    }
   console.log(ChosenPhoto);
   
//_______________________________________when no connection_____________________________________

var not_connected = document.getElementById('not_connected'),
drawingPage = document.getElementById('drawingPage'),
ul_links = document.getElementById('ul_links');
not_connected.onclick = function () {
    drawingPage.setAttribute('style','left: -61px ; top: 33px');
    ul_links.setAttribute('style','position: relative ; right: 11px');
};
//_______________________animation fade in-out on my name with random shadow color_______________________________
//var Name = document.querySelector('h1'),
//animation= 0;
// //_____________
//    var colors = [' blue',' black',' #751452'];
//    var colorIndex = 0;
//    setInterval(function(){
//        colorIndex++;
//        if(colorIndex===3){colorIndex = 0;}
//        console.log(colorIndex);
//        },1600);
//    //____________
//function conInterval(){
//var conIntervalbt = setInterval(function(){
//        var animationST= '0px -1px '+animation.toString()+'px';
//        animation ++;
//        Name.style.textShadow = animationST+colors[colorIndex];
//        if(animation=== 8){clearInterval(conIntervalbt);subInterval();}
//        console.log(animationST);
//},100);
//}
//function subInterval(){
//var subIntervalbt = setInterval(function(){
//                var animationST= '0px 1px '+animation.toString()+'px';
//                Name.style.textShadow = animationST+colors[colorIndex];
//                animation--;
//                if(animation === 0){clearInterval(subIntervalbt); conInterval();}
//                console.log(animationST);
//},100);
//    }
//    conInterval();
    //____________________________css3 animation______________________________

document.getElementById('iLink').onmouseout = function(){ this.setAttribute('style','transition: all .2s ease-in;transform: scale(1)'); };
document.getElementById('iLink').onmouseenter = function(){ this.setAttribute('style','transition: all .2s ease-in;transform: scale(1.1)'); };

document.getElementById('fLink').onmouseout = function(){ this.setAttribute('style','transition: all .2s ease-in;transform: scale(1)'); };
document.getElementById('fLink').onmouseenter = function(){ this.setAttribute('style','transition: all .2s ease-in;transform: scale(1.1)'); };

document.getElementById('tLink').onmouseout = function(){ this.setAttribute('style','transition: all .2s ease-in;transform: scale(1)'); };
document.getElementById('tLink').onmouseenter = function(){ this.setAttribute('style','transition: all .2s ease-in;transform: scale(1.1)'); };