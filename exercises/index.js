$(".window-outer").draggable();
$(".exercise-nav").resizable({
	minHeight: 270,
	minWidth: 250,
	maxHeight: 275,
	maxWidth: 500,
});
$(".exercise-outer").draggable();
$(".exercise-outer").resizable();

let counter = 0;
$(document).on("mousedown", ".exercise-outer", function () {
	$(this).css("z-index", counter);
});

$(document).on("mouseup", ".exercise-outer", function () {
	counter++;
});
