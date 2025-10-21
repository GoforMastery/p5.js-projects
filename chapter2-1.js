let x = 100;
let y = 100;
let xSpeed = 2.5;
let ySpeed = 2;
function setup() {
  createCanvas(640, 240);
}
function draw() {
  background(255);
  x = x + xSpeed;
  y = y + ySpeed;
  if (x > width || x < 0) {
    xSpeed = -1 * xSpeed;
  }
  if (y > height || y < 0) {
    ySpeed = -1 * ySpeed;
  }
  stroke(0);
  strokeWeight(4);
  fill(127);
  circle(x, y, 48);
  point(x, y);
  stroke("black");
}
