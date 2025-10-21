class Walker{
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
    }
    show() {
        stroke(0);
        point(this.x, this.y);
    }
    /*LOGIC :
    40 % -> probab of movement in x right
    20 % -> probab of movement in x left
    20 % -> probab of movement in y top
    20 % -> probab of movement in y bottom
    */
    step() {
        let step = floor(random(2));
        if (step < 0.4) {
            this.x++;
        } else if (step < 0.6) {
            this.x--;
        } else if (step < 0.8) {
            this.y++;
        } else {
            this.y--;
        }
    }
}
let walk;
function setup() {
    /*CREATE OBJECT ONCE IN SETUP..... */
    createCanvas(1000, 300);
    background("aqua");
    walk = new Walker();
}
function draw() {
    walk.step();
    walk.show();
}