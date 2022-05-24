let counter = 0;

// array containing the div containers of each flag
let flag = [
	document.getElementById("sweden"),
	document.getElementById("finland"),
	document.getElementById("denmark"),
	document.getElementById("iceland"),
	document.getElementById("france"),
	document.getElementById("mandy"),
];

// array containing the names of each flag
let flag_names = ["Sweden", "Finland", "Denmark", "Iceland", "5th Flag: France", "5th 'Flag': original"];

// display Sweden as default
document.getElementById("flag_name").innerHTML = flag_names[0];

//function that shows the next flag in the array while hiding the current one
function goForward() {
	if (counter < flag.length) {
		if (flag[counter + 1] != undefined) {
			document.getElementById("flag_name").innerHTML = flag_names[counter + 1];
			flag[counter + 1].style.display = "grid";
			flag[counter].style.display = "none";
		}
	}
	counter < flag.length - 1 ? counter++ : counter;
	console.log(counter);
}

// function that shows the previous flag in the array while hiding the current one
function goBack() {
	if (counter > 0) {
		if (flag[counter - 1] != undefined) {
			document.getElementById("flag_name").innerHTML = flag_names[counter - 1];
			flag[counter - 1].style.display = "grid";
			flag[counter].style.display = "none";
		}
	}
	counter > 0 ? counter-- : counter;
	console.log(counter);
}
