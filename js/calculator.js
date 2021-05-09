const calculate = document.querySelector("#calculate");
const category = document.querySelectorAll(".category"); 
const rate = document.querySelectorAll(".rate");

const categoryTitle = ["protagonist", "antagonist", "secondary", "world", "script", "extra"];

function mathOnInputs(){
	for (let i = 0; i < category.length; i++){

		if (category[i].style.display != "none") {

			const input = document.querySelectorAll(`.${categoryTitle[i]}-input`);

			let result = 0;

			for (let x = 0; x < input.length; x++){

				result = result + Number(input[x].value);

			}

			document.querySelector(`#${categoryTitle[i]}-rate`).value = Math.round((result/input.length));
		}
	}
}

function finalRate(){

	let x = 0;
	let result = 0;

	for (let i = 0; i < category.length; i++){

		if (category[i].style.display != "none") {
			result = result + Number(rate[i].value);
			x = x + 1; 
		}
	}
	document.querySelector("#final-input").value = Math.round((result/x));
}

calculate.onclick = function(){
	mathOnInputs();
	finalRate();
};
