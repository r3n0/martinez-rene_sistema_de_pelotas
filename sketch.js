let t = 0;
function setup() {
	createCanvas(windowWidth, windowHeight);
	// noLoop();
	rectMode(CENTER);
}
// >>=====> DRAW <=====<<
function draw() {
	background(163, 99, 252);
	noStroke();
	let anchura = 30;
	let gap = 20;

	for (let x = anchura; x < windowWidth - anchura; x += anchura + gap) {
		for (let y = anchura; y < windowHeight - anchura; y += anchura + gap) {
			fill(47, 255, 255);
			square(
				x,
				y,
				anchura + map(noise(x / 1000, y / 1000, t), 0, 1, -40, 40)
			);
		}
	}

	t += 0.005;
}
