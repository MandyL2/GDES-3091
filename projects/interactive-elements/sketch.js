let scrollWheel = 0;
let r = 77;
let g = 250;
let b = 204;
let fontSize = 24;
let scroll = ["s", "c", "r", "o", "l", "l", "j", "u", "s", "t", "k", "e", "e", "p"];
let scrolling = ["s", "c", "r", "o", "l", "l", "i", "n", "g"];
var r2 = 2;
var g2 = 3;
var b2 = 4;

function preload() {
	//import font
	loadFont(
		"https://use.typekit.net/af/d86242/00000000000000007735f723/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3"
	);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	textAlign(CENTER);
	var w = windowWidth;
	var h = windowHeight;

	background(220);

	// introductory text when user first sees webpage
	if (scrollWheel == 0) {
		textFont("Arial", 30);
		text("WARNING: flashing colours", w / 2, h / 2);
		textFont("droog", 30);
		text("Scrolling with a trackpad is recommended", w / 2, h / 2 + 40);
	}

	//loop to create tunnel
	for (let i = 0; i < 10; i++) {
		let size = constrain(scrollWheel - i * 100, 0, w * 2);
		//once end of tunnel is reached, display spiralling text
		if (i == 9 && size > w) {
			spiralText();
			//reset the colours randomly once blue elemnent of rgb is less than zero
			if (b < 0) {
				resetColours();
			}
		} else {
			//change colour of each circle as user scrolls through tunnel
			fill(color(r + i * 10, g - i * 26, b - i * 8));
			circle(w / 2, h / 2, size);
		}
	}
}

function spiralText() {
	var w = windowWidth;
	var h = windowHeight;
	let spinRadius = 25;

	textFont("droog", fontSize);

	//loop to display first set of text
	for (let i = 0; i < scroll.length; i++) {
		//change fill colour based on how much user has scrolled
		fill(r - spinRadius * r2, g - spinRadius * g2, b - spinRadius * b2);
		push();
		//spread text around the circumference of a circle that gradally gets larger
		translate(
			w / 2 + spinRadius * cos(radians(fontSize) * -1 + i),
			h / 2 + spinRadius * sin(radians(fontSize) * -1 + i)
		);
		text(scroll[i], 0, 0);
		spinRadius += 25 + spinRadius * 0.2;
		pop();
	}

	//loop to display second set of text
	for (let i = 0; i < scrolling.length; i++) {
		push();
		textFont("droog", 24);
		//change fill colour randomly
		fill(random(10, 250), random(50, 250), random(20, 250));
		translate(
			w / 2 + 200 * cos(radians(fontSize) + i * 0.5),
			h / 2 + 200 * sin(radians(fontSize) + i * 0.5)
		);
		text(scrolling[i], 0, 0);
		pop();
	}
}

function resetColours() {
	r = random(250);
	g = random(250);
	b = random(250);

	r2 = random(1, 3);
	g2 = random(1, 3);
	b2 = random(1, 3);
}

function mouseWheel(event) {
	scrollWheel += constrain(event.delta, -1000, 1000);
	r += event.delta / 15;
	g += event.delta / 20;
	b -= event.delta / 25;
	fontSize += constrain(event.delta, -100, 1);

	//uncomment to block page scrolling
	return false;
}
