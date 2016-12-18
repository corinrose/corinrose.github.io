var yoff = 0.0;


function setup() {
	createCanvas(screen.width, 800);
}

function draw() {
	background(255);

	fill(color(30, 30, 40))
	

	var xoff = 0.01;

	beginShape();

	for (var i = 0; i < screen.width; i += 1) {
		vertex(i, 450 + noise(xoff, yoff)*50);
		xoff += 0.01;
	}

	vertex(screen.width, screen.height);
	vertex(0, screen.height);

	endShape();

	yoff += 0.01;
}
