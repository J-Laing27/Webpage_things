function changeheading(){
	
	document.getElementById("BILLAY").innerHTML = "<em> Oh lawd he comin' </em >";
};

function vanish(){
	
	var elementHolster = document.getElementsByClassName("hero");
	elementHolster[0].style.display = "none";
};

function changeLogo(){
	
	var elementBox = document.getElementsByClassName("logo");
	elementBox[0].style.backgroundImage = "url('images/skullicon.svg')";
	
}

function changeColour(){
	
	document.getElementById("BILLAY").style.color = 'Blue';
	
}

function changeColour2(e,colour){
	
	document.getElementById("BILLAY").style.color = colour;
	
}


var sneakyBoi = document.getElementsByClassName("hover");
sneakyBoi[0].addEventListener("mouseover",myFunction);

function myFunction(){
	
	document.getElementById("BILLAY").innerHTML += "DINNY <br>";
	
}