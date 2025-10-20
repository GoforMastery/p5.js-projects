class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }
  show() {
    stroke(0);
    point(this.x, this.y);
  }
  step() {
    /*floor(random(3)) generates 0 1 2 we left shift it...*/
    let xstep = floor(random(3)) - 1;
    let ystep = floor(random(3)) - 1;
    this.x += xstep;
    this.y += ystep;
  }
}
let walker;
let total = 20;
let randomCounts = [];
function setup() {
  createCanvas(640, 240);
  for (let i = 0; i < 20; ++i) {
    randomCounts[i] = 0;
  }
  background("aqua");
}

function draw() {
  background(255);
  let index = floor(random(randomCounts.length));
  /**random numbers from 0 to 19 size of 20... */
  randomCounts[index]++;
  stroke(0);
  fill(127);
  let w = width / randomCounts.length;
  for (let x = 0; x < randomCounts.length; ++x) {
    rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
    /**rectange drawn using upper left and width and height..... */
  }
}
