let miPelota;
let frutas = ['mazana', miPelota, 234, 'granadilla'];

function setup() {
	createCanvas(windowWidth, windowHeight);
	miPelota = new Pelota();
}
//     >>=>
function draw() {
	background(255);
	for (let x = 0; x < mouseX; x += mouseY + 10) {
		square(x, 50, 5);
	}
	// circle(mouseX, mouseY, 20);
	// miPelota.update(300);
	// miPelota.display();
}
