//SHOW CHECKED BOXES

const checkbox = document.querySelectorAll(".checkbox");

const protagonist = document.querySelector("#protagonist");
const antagonist = document.querySelector("#antagonist");
const secondary = document.querySelector("#secondary");
const extra = document.querySelector("#extra");

const list = [protagonist,antagonist,secondary,extra];

//functions that shows the checked option

function findChecked(){
	
	for (let x = 0; x < checkbox.length; x++){

		if (checkbox[x].checked == true) {
			list[x].style.display = "block";
		}
		else {
			list[x].style.display = "none";
		};
	};
};


//SHOW/HIDE THE FORM

//the two divs
const form = document.querySelector("#form");
const questions = document.querySelector("#questions");

//the button
const display = document.querySelector("#display"); 

let i = 0;

//functions that display/hide the divs

function changeButton(){
	if (i == 0) {
		display.innerHTML = "Display the questions";
		i = 1;
		return;
	};
	
	if (i == 1) {
		display.innerHTML = "Display the form";
		i = 0;
		return;
	};
};

function displayForm(){
	if (i == 0) {
		form.style.display = "none";
		return;
	};

	if (i == 1) {
		form.style.display = "flex";
		return;
	};
};

function hideQuestion(){
	if (i == 0) {
		questions.style.display = "block";
		return;
	};

	if (i == 1) {
		questions.style.display = "none";
		return;
	};
};



display.onclick = function() {
	findChecked();
	changeButton();
	displayForm();
	hideQuestion();
};


