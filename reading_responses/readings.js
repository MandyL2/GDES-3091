let readingWindows = ["reading1", "reading2", "reading3", "reading4"];
let exerciseWindows = ["exercise1", "exercise2", "exercise3", "exercise4", "exercise5", "exercise6"];
function openWindow(el) {
	if (document.getElementById(readingWindows[el]) != undefined) {
		document.getElementById(readingWindows[el]).style.display = "block";
	}
	if (document.getElementById(exerciseWindows[el]) != undefined) {
		document.getElementById(exerciseWindows[el]).style.display = "block";
	}
}

function closeWindow(el) {
	if (document.getElementById(readingWindows[el]) != undefined) {
		document.getElementById(readingWindows[el]).style.display = "none";
	}
	if (document.getElementById(exerciseWindows[el]) != undefined) {
		document.getElementById(exerciseWindows[el]).style.display = "none";
	}
}

$(".reading-outer").draggable();
