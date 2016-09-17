var myImage=document.querySelector('img');

myImage.onclick=function(){
	var newSrc=myImage.getAttribute('src');
	if(newSrc === 'images/red_panda_firefox.gif'){
		myImage.setAttribute('src', 'images/panda2.png');
	} else {
		myImage.setAttribute('src', 'images/red_panda_firefox.gif');
	}
}

var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');

function setUserName(){
	var myName=prompt('Enter your name');
	localStorage.setItem('name', myName);
	myHeading.textContent='Red Pandas are cool, '+myName;
}

if(!localStorage.getItem('name')){
	setUserName();
} else {
	var storedName=localStorage.getItem('name');
	myHeading.textContent='Red Pandas are cool, '+storedName;
}

myButton.onclick=function(){
	setUserName();
}