let fallElmnt = document.querySelector("#fall");
let bounceElmnt = document.querySelector("#bounce");

//comment out code below here
/* loops through each :nth-child of the word "bounce" and assigns it an animation with a random delay time
whenever the mouse hovers over the "bounce" div container */
bounceElmnt.addEventListener("mouseenter", e => {
	for (let i = 1; i < 7; i++) {
		var delay = Math.floor(Math.random() * 100) + 10;
		document.querySelector("#bounce span:nth-child(" + i + ")").style.animation = "bounce 1s infinite";
		document.querySelector("#bounce span:nth-child(" + i + ")").style.animationDelay = delay + "ms";
	}
});

/*clears the animation for each :nth-child of the word "bounce" when the mouse is no longer over the 
"bounce" div container to simulate the effect of css :hover */
bounceElmnt.addEventListener("mouseleave", e => {
	for (let i = 1; i < 7; i++) {
		document.querySelector("#bounce span:nth-child(" + i + ")").style.animation = "none";
	}
});

/*animating and "fall" on mouse hover using javascript. Loops through all the :nth-child elements
from last to first element with increasing delay */
fallElmnt.addEventListener("mouseenter", e => {
	let delay = 1;
	for (let i = 4; i > 0; i--) {
		document.querySelector("#fall span:nth-child(" + i + ")").style.animation = "fall 1.5s infinite";
		document.querySelector("#fall span:nth-child(" + i + ")").style.animationDelay = delay + "00ms";
		delay++;
	}
});

/*clears the animation for each :nth-child of the word "fall" when the mouse is no longer over the 
"fall" div container to simulate the effect of css :hover */
fallElmnt.addEventListener("mouseleave", e => {
	for (let i = 4; i > 0; i--) {
		document.querySelector("#fall span:nth-child(" + i + ")").style.animation = "none";
	}
});
// comment out code above here

// assigning a random delay time if animating the word bounce with :hover in css. Uncomment code below
// if checking functionality of #bounce:hover animations
// for (let i = 2; i < 6; i++) {
// 	var delay = Math.floor(Math.random() * 100) + 10;
// 	document.querySelector("#bounce span:nth-child(" + i + ")").style.animationDelay = delay + "ms";
// }
