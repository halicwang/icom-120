class Square {

  constructor() {
    this.size = 30;
    this.halfSize = this.size / 2;

    this.x = random(this.size, width - this.size);
    this.y = random(this.size, height - this.size);

    this.xSpeed = random(-3, 3);
    this.ySpeed = random(-3, 3);

    this.angle = random(0, 360);
    this.spinSpeed = random(-3, 3);

    this.color = colorPal[floor(random(0, colorPal.length))];
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.angle += this.spinSpeed;
  }

  keepInCanvas() {
    if (this.x + this.halfSize > width) {
      if (this.xSpeed > 0) {
        this.xSpeed = -this.xSpeed;
      }
    }

    if (this.x - this.halfSize < 0) {
      if (this.xSpeed < 0) {
        this.xSpeed = -this.xSpeed;
      }
    }

    if (this.y + this.halfSize > height) {
      if (this.ySpeed > 0) {
        this.ySpeed = -this.ySpeed;
      }
    }

    if (this.y - this.halfSize < 0) {
      if (this.ySpeed < 0) {
        this.ySpeed = -this.ySpeed;
      }
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    rectMode(CENTER);
    noFill();
    strokeWeight(2);
    stroke(this.color);
    rect(0, 0, this.size, this.size);
    pop();
  }
}
