class Walker {
    constructor() {
        this.x = height / 2;
        this.y = width / 2;
    }
    show() {
        stroke(0);
        point(this.x, this.y);
    }
    step() {
        let stepx = floor(random(6)) - 1;
        let stepy = floor(random(6)) - 1;
        if (stepx <= 1) {
            this.x -= 1;
        } else {
            this.x += 1;
        }
        if (stepy <= 1) {
            this.y -= 1;
        } else {
            this.y += 1;
        }
    }
}