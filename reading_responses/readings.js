let readingWindows = ["reading1", "reading2", "reading3", "reading4", "reading5"];
let exerciseWindows = ["exercise1", "exercise2", "exercise3", "exercise4", "exercise5", "exercise6"];
let margin = 20;
function openWindow(el) {
	if (document.getElementById(readingWindows[el]) != undefined) {
		document.getElementById(readingWindows[el]).style.display = "block";
		document.getElementById(readingWindows[el]).style.marginTop = margin + "px";
		document.getElementById(readingWindows[el]).style.marginRight = margin + "px";
		margin += 20;
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
let counter = 0;
$(document).on("mousedown", ".reading-outer", function () {
	$(this).css("z-index", counter);
});

$(document).on("mouseup", ".reading-outer", function () {
	counter++;
});
