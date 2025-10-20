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
function setup() {
  createCanvas(640, 240);
  walker = new Walker();
  background("aqua");
}

function draw() {
  walker.step();
  walker.show();
}
