class Ball {
    constructor(x, y, r) {
        this.pos = new Vector2D(x, y);
        this.vel = new Vector2D(2, 5);
        this.acc = new Vector2D(0, 0);
        this.topspeed = 10;

        this.r = r;
    }
    move() {
        this.vel.add(this.acc);
        this.vel.limit(this.topspeed);
        this.pos.add(this.vel);
        
        if (this.pos.y - this.r < 0) {
            this.pos.y = 0 + this.r;
            this.vel.y = -this.vel.y;
        }
        else if (this.pos.y + this.r > canvas.height) {
            this.pos.y = canvas.height - this.r;
            this.vel.y = -this.vel.y;
        }
        if (this.pos.x - this.r < 0) {
            this.pos.x = 0 + this.r;
            this.vel.x = -this.vel.x;
        }
        else if (this.pos.x + this.r > canvas.width) {
            this.pos.x = canvas.width - this.r;
            this.vel.x = -this.vel.x;
        }
    }
    draw() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI*2);
        ctx.fill();
        ctx.strokeStyle = '#123';
        ctx.stroke();
        ctx.closePath();
    }
}
