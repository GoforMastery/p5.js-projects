/*random walk.... */
let position;
let velocityArray = [
  [10, 10],
  [-10, 10],
  [10, -10],
  [-10, -10],
];
function setup() {
  createCanvas(640, 240);
  position = createVector(100, 100);
}
function draw() {
  let randomVal = floor(random(4));
  position.add(velocityArray[randomVal]);
  stroke(0);
  if (position.x < 0 || position.x > 640) {
    position.x = 100;
  }
  if (position.y < 0 || position.y > 240) {
    position.y = 100;
  }
  point(position.x, position.y);
}
