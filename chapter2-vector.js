class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  add(v) {
    this.x += v.x;
    this.y += v.y;
  }
}
let resx, resy;
let obj = new Vector(2, 3);
obj.add({ x: 3, y: 4 });
resx = obj.x;
resy = obj.y;
console.log(resx, resy);
