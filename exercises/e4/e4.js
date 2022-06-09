$("#legally-blonde").draggable();
$("#book").draggable();
$("#loona").draggable();
$("#shmata").draggable();
$("#echo").draggable();

// bring entry being clicked to the front
let counter = 0;
$(document).on("mousedown", ".draggable", function () {
	$(this).css("z-index", counter);
});

$(document).on("mouseup", ".draggable", function () {
	counter++;
});
