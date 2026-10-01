let posX = [200, 50, 100, 80];
let posY = [150, 30, 200, 300];
let d = [20, 40, 100, 60];
let myColor = ['#EB6F44', '#7AC141', '#9C7635', '#DBBEF7'];
let x, y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(0);
  noStroke();
  
  fill(myColor[0]);
  circle(posX[0], posY[0], d[0]);

  fill(myColor[1]);
  circle(posX[1], posY[1], d[1]);

  fill(myColor[2]);
  circle(posX[2], posY[2], d[2]);

  fill(myColor[3]);
  circle(posX[3], posY[3], d[3]);

  for(i = 0; i < 20; i++) {
    noFill();
    stroke('blue');
    strokeWeight(3);
    rect(x, y, i * 20, i * 30);
}
}
