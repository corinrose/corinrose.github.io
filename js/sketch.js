var yoff = 0.0;
base = 600;
scl = 50;

window.addEventListener("scroll", function (event) {
  base = 600 - window.pageYOffset/10;
  scl = 50 + window.pageYOffset/10;
});

function setup() {
	createCanvas(windowWidth, windowHeight); 
}

function draw() {
	background(255);

	fill(color(32, 39, 41))
	
	var xoff = 0.01;

	beginShape();

	for (var i = 0; i < windowWidth; i += 10) {
    		n = base + noise(xoff, yoff)*(-scl)
		vertex(i, n);
		xoff += 0.05;
	}

	vertex(windowWidth, windowHeight);
	vertex(0, windowHeight);

	endShape();

	yoff += 0.01;
}
