// code referenced from
//https://alvarotrigo.com/blog/css-animations-scroll/#:~:text=What%20are%20CSS%20Scroll%20Animations,text%2C%20images%2C%20and%20videos.
function fadeIn() {
	var fadeIns = document.querySelectorAll(".fade-in");
	for (var i = 0; i < fadeIns.length; i++) {
		var windowHeight = window.innerHeight;
		var elementTop = fadeIns[i].getBoundingClientRect().top;
		var elementVisible = 150;
		if (elementTop < windowHeight - elementVisible) {
			fadeIns[i].classList.add("active");
		} else {
			fadeIns[i].classList.remove("active");
		}
	}
}
window.addEventListener("scroll", fadeIn);

// To check the scroll position on page load
fadeIn();
