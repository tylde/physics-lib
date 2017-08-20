class Ball extends Circle {
    constructor(x, y, mass, r) {
        super(x, y, mass, r);
        
        this.topspeed = 10;
        this.collision = false;
    }
    move() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);
        this.position.add(this.velocity);
        
        if (this.position.y - this.r < 0) {
            this.position.y = 0 + this.r;
            this.velocity.y = -this.velocity.y;
        }
        else if (this.position.y + this.r > canvas.height) {
            this.position.y = canvas.height - this.r;
            this.velocity.y = -this.velocity.y;
        }
        if (this.position.x - this.r < 0) {
            this.position.x = 0 + this.r;
            this.velocity.x = -this.velocity.x;
        }
        else if (this.position.x + this.r > canvas.width) {
            this.position.x = canvas.width - this.r;
            this.velocity.x = -this.velocity.x;
        }
    }
    draw() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.arc(this.position.x, this.position.y, this.r, 0, Math.PI*2);
        ctx.fill();
        ctx.strokeStyle = '#123';
        ctx.stroke();
        ctx.closePath();
    }

    bounce(ball) {
        let vNormal = Vector2D.sub(ball.position, this.position);
        let vTangent = new Vector2D(-vNormal.y, vNormal.x)
        let dist = vNormal.mag();
        //if (dist < this.r + ball.r && (this.collision === false && ball.collision === false)) {
        if (dist < this.r + ball.r) {
            // this.collision = true;
            // ball.collision = true;
            console.log('bounce');
            vNormal.norm();
            vTangent.norm();
            let v1n = vNormal.dot(this.velocity);
            let v1t = vTangent.dot(this.velocity);
            let v2n = vNormal.dot(ball.velocity);
            let v2t = vTangent.dot(ball.velocity);

            let v1n_ = (v1n * (this.mass - ball.mass) + 2 * ball.mass * v2n) / (this.mass + ball.mass);
            let v2n_ = (v2n * (ball.mass - this.mass) + 2 * this.mass * v1n) / (this.mass + ball.mass);


            let v1t_ = v1t;
            let v2t_ = v2t;

            let vel1n = vNormal.get().mult(v1n_);
            let vel1t = vTangent.get().mult(v1t_);
            let vel2n = vNormal.get().mult(v2n_);
            let vel2t = vTangent.get().mult(v2t_);

            this.velocity = vel1n.add(vel1t);
            ball.velocity = vel2n.add(vel2t);
        }
        else if (dist > this.r + ball.r) {
            // this.collision = false;
            // ball.collision = false;
        }
    }
}