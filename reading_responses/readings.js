let windows = ["reading1", "reading2", "reading3", "reading4"];
function openWindow(el) {
	document.getElementById(windows[el]).style.display = "block";
}

function closeWindow(el) {
	document.getElementById(windows[el]).style.display = "none";
}

$(".reading-outer").draggable();
