var yoff = 0.0;


function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255);

	fill(color(30, 30, 40))
	

	var xoff = 0.01;

	beginShape();

	for (var i = 0; i < windowWidth; i += 1) {
		vertex(i, 450 + noise(xoff, yoff)*50);
		xoff += 0.01;
	}

	vertex(windowWidth, windowHeight);
	vertex(0, windowHeight);

	endShape();

	yoff += 0.01;
}
