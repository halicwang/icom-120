let squares = [];
let numSquares = 10000;
let colorPal = ["#E63946", "#1D3557", "#F4A261", "#2A9D8F"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  for (let i = 0; i < numSquares; i++) {
    squares.push(new Square());
  }
}

function draw() {
  background(255);

  for (let i = 0; i < numSquares; i++) {
    squares[i].update();
    squares[i].keepInCanvas();
    squares[i].display();
  }
}
