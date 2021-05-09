//SHOW CHECKED BOXES

const checkbox = document.querySelectorAll(".checkbox");

const categoryOnly = document.querySelectorAll(".category:not(.permanent)"); //Todas las que sean "category", pero que no sean "category permanent"

//functions that shows the checked option

function findChecked(){
	
	for (let x = 0; x < checkbox.length; x++){

		if (checkbox[x].checked == true) {
			categoryOnly[x].style.display = "";
		}
		else {
			categoryOnly[x].style.display = "none";
		}
	}
}


//SHOW/HIDE THE FORM

//the two divs
const form = document.querySelector("#form");
const questions = document.querySelector("#questions");

//the button
const display = document.querySelector("#display"); 

//the innerHTML
let buttonQuestion = "Display the questions";
let buttonForm = "Display the form";

//functions that display/hide the divs

function changeButton(){
	if (display.innerHTML == buttonForm) {
		display.innerHTML = buttonQuestion;
	}
	else {
		display.innerHTML = buttonForm;

	}
}

function displayForm(){
	if (form.style.display != "none") {
		form.style.display = "none";
	}
	else {
		form.style.display = "";
	}
}

function hideQuestion(){
	if (questions.style.display != "none") {
		questions.style.display = "none";
	}

	else {
		questions.style.display = "";
	}
}



display.onclick = function() {
	findChecked();
	changeButton();
	displayForm();
	hideQuestion();
};


