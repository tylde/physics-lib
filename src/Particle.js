class Particle {
    constructor(x, y, mass) {
        this.pos = new Vector2D(x, y, mass);
        this.vel = new Vector2D(0, 0);
        this.acc = new Vector2D(0, 0);

        this.mass = mass;
    }
    
    zeroAcc() {
        this.acc.x = 0;
        this.acc.y = 0;
        return this;
    }

    addForce(force) {
        var fc = force.get();
        fc.div(this.mass);
        this.acc.add(fc);
        return this;
    }
}