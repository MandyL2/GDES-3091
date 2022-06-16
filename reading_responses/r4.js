let counter = 0;

let pages = [
	document.getElementById("front"),
	document.getElementById("contents"),
	document.getElementById("r1r2"),
	document.getElementById("r3r4"),
	document.getElementById("backCover"),
];
function skip() {
	counter = 2;
	goForward();
	pages[1].style.display = "none";
}
function goForward() {
	if (counter < pages.length) {
		if (pages[counter + 1] != undefined) {
			pages[counter + 1].style.display = "grid";
			pages[counter].style.display = "none";
		}
	}
	counter < pages.length - 1 ? counter++ : counter;
	console.log(counter);
}

// function that shows the previous pages in the array while hiding the current one
function goBack() {
	if (counter > 0) {
		if (pages[counter - 1] != undefined) {
			pages[counter - 1].style.display = "grid";
			pages[counter].style.display = "none";
		}
	}
	counter > 0 ? counter-- : counter;
	console.log(counter);
}
