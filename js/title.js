const title = document.querySelector("#title");
const select = document.querySelector("#select-tipo")

let words = ["MOVIE", "TV SHOW", "ANIME"];
let number;

function randomNumber(){
	number = Math.round(Math.random()*2);

	return number;
}

async function changeTitle(){
	randomNumber();

	title.innerHTML= "RATE THE " + words[number];
};

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function checkOption(){
	if (select.selectedIndex == 0){
		changeTitle();

		await delay(1000);

		checkOption();
	}
}

select.onchange = function(){
			title.innerHTML = "RATE THE " + words[select.selectedIndex-1];
}

checkOption();