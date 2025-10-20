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
    let Fx = this.x;
    let Fy = this.y;
    let dx = mouseX - Fx;
    let dy = mouseY - Fy;
    dx *= 0.5;
    dy *= 0.5;
    let randomVal = floor(random(2));
    if (randomVal === 0) {
      this.x = Fx + dx;
      this.y = Fy + dy;
    } else {
      this.x = Fx - dx;
      this.y = Fy - dy;
    }
  }
}
let obj;
function setup() {
  createCanvas(1200, 240);
  background("aqua");
  obj = new Walker();
}
function draw() {
  obj.step();
  obj.show();
}
