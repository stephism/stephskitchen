//create element
var img = document.createElement('img');
//add src attribute to the image element
img.src = "Chioma.jpg";
img.style.height= '100px'
//append text to the page
var myP =  document.getElementById('myP');
//append img to the page
myP.appendChild(img) 

//create a button element
var button = document.getElementById('myButton');
//add event listener, e.g; mouseover, to the element; give it a function(instruction)
button.addEventListener('mouseover', function(){
	//style the element to your taste, e.g; backgroundColor
	this.style.backgroundColor ='red';
	//you can insert a styled class from a css folder connected to the html document
	this.className = 'clicked'
})