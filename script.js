setInterval(addTime,1000)
function addTime(){
var today = new Date();

var s = today.getSeconds();
 
var h = today.getHours();

var mi= today.getMinutes();


if(h<10){
	h= '0'+h;
}

if(mi<10){
	mi='0'+mi;
}
if(s<10){
	s='0'+s;
}


var currentDate=h+":"+mi+":"+s;
document.getElementsByTagName('time')[0].innerText="Local Time: "+currentDate;
}
var url="https://favqs.com/api/qotd";
var q=document.getElementsByTagName('q')[0];
var author=document.getElementsByClassName("author")[0];
var request = new XMLHttpRequest();
request.onreadystatechange = function () {
	if(this.status==404)  
   {
    	alert(response.message);
   }
    
	else if (this.readyState == 4 && this.status == 200){
		var response = JSON.parse(this.responseText);
		//console.log(response);
		q.innerText=response.quote.body;
		author.innerText="- "+response.quote.author;
		document.getElementsByTagName('a')[0].setAttribute("href",response.quote.url)
		document.getElementsByTagName('a')[1].setAttribute("href","https://www.google.com/search?q="+response.quote.author)
	}
}


var button=document.getElementsByTagName('button')[0];
var colors = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b",
        "c", "d", "e", "f"
    ];
button.onmouseenter=function(){
	'use strict'
	   var i, value='',result='';
    for(i=0;i<=5;i++){
        value  = Math.floor(Math.random() * colors.length);
        result += colors[value];
	}
	result="#"+result;
	//console.log(result);
	button.style.backgroundColor=result;
}
button.onclick=function(){
button.innerText="Next"
document.getElementsByTagName('div')[0].style.visibility="visible";
request.open("GET",url,true);
request.send();
request.onreadystatechange()
}

