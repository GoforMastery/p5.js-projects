/*
let x = 100, y = 100
let velocityx = 1, velocityy = 3.3
*/
let position, velocity;
function setup() {
  createCanvas(640, 240);
  position = createVector(100, 100);
  velocity = createVector(1, 3.3);
}
function draw() {
  background(255);
  position.add(velocity);
  if (position.x > width || position.x < 0) {
    velocity.x = -1 * velocity.x;
  }
  if (position.y > height || position.y < 0) {
    velocity.y = -1 * velocity.y;
  }
  stroke(0);
  fill(127);
  circle(position.x, position.y, 50);
}
