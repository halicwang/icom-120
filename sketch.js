let x,y,d;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  d = 50;

}


function draw() {
  background(255,10);
  fill(255,0,0);
  circle(x,y,d);

  if(x < width){
    x+=3;
  }

  if(x > width){
    x-=3;
  }


  circle (200, 200 + sin(frameCount * 200) * 10, 50)
  circle (300, 200, cos(frameCount * 0.1) * 48)
  rect (175, 280, 150, abs(sin(frameCount * 0.1)) * 60)

}

