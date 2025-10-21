let width = 800;
let height = 400;
function setup() {
  createCanvas(width, height, WEBGL);
  frameRate(60);
  smooth();
}
function createSphere(x, y, z, r) {
  push();
  /*for limiting the transformation..... */
  translate(x, y, z);
  sphere(r, 30, 30);
  pop();
}
function drawNet(zPos) {
  push();
  stroke(0, 100);
  strokeWeight(1);
  noFill();
  translate(-width / 2, -height / 2, zPos);
  let gridSize = 25;
  /*
  line() in p5.js WEBGL mode draws a 3D line between two points:
  (x1, y1, z1) → (x2, y2, z2)
  */
  for (let x = 0; x <= width; x += gridSize) {
    line(x, 0, 0, x, height, 0);
  }
  for (let y = 0; y <= height; y += gridSize) {
    line(0, y, 0, width, y, 0);
  }
  pop();
}
let a = -325;
let b = -125;
let c = 50;
let d = 25;
let velocity = {
  px: -2,
  py: -1,
  pz: -1,
};
function draw() {
  background(255);
  fill("red");
  drawNet(-200);
  createSphere(a, b, c, d);
  /*
  createSphere(-325, -125, 50, 25);
   */
  a += velocity.px;
  b += velocity.py;
  c += velocity.pz;
  if (a < -width / 2 || a > width / 2) {
    velocity.px = -1 * velocity.px;
  }
  if (b < -height / 2 || b > height / 2) {
    velocity.py = -1 * velocity.py;
  }
  if (c < -200 || c > 200) {
    velocity.pz = -1 * velocity.pz;
  }
}
/**
 *
 * UNDERSTOOD that we should not use loops here
 * in function setup() {
 * }
 * scene is setup..
 * function draw() {
 * }
 * we call drawNet() and drawSphere()
 * we use push and pop for isolation..
 *
 *
 *
 *
 */
