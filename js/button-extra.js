const buttonPlus = document.querySelector("#button-plus");
const buttonMinus = document.querySelector("#button-minus");
const extraDiv = document.querySelector("#extra");

buttonPlus.onclick = function(){
	const newDiv = document.createElement("div");
	newDiv.setAttribute("class","newDiv");

	const newTextInput = document.createElement("input");
	newTextInput.setAttribute("type","text");
	newTextInput.setAttribute("placeholder", "Name");

	const newNumberInput = document.createElement("input");
	Object.assign(newNumberInput, {
		type: "number",
		min: "0",
		max: "10",
		class: "extra-input"
	});

	let newCheckbox = document.createElement("input");
	newCheckbox.setAttribute("type","checkbox");
	newCheckbox.setAttribute("class", "checkbox-extra");

	newDiv.appendChild(newTextInput);
	newDiv.appendChild(newNumberInput);
	newDiv.appendChild(newCheckbox);
	
	extraDiv.appendChild(newDiv);
};

buttonMinus.onclick = function(){
	extraDiv.removeChild(document.querySelector(".newDiv"));
};