class Ball extends Circle {
    constructor(x, y, mass, r) {
        super(x, y, mass, r);
        
        this.topspeed = 10;
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
}





// class Ball {
//     constructor(x, y, r) {
//         this.position = new Vector2D(x, y);
//         this.velocity = new Vector2D(2, 5);
//         this.acceleration = new Vector2D(0, 0);
//         this.topspeed = 10;

//         this.r = r;
//     }
//     move() {
//         this.velocity.add(this.acceleration);
//         this.velocity.limit(this.topspeed);
//         this.position.add(this.velocity);
        
//         if (this.position.y - this.r < 0) {
//             this.position.y = 0 + this.r;
//             this.velocity.y = -this.velocity.y;
//         }
//         else if (this.position.y + this.r > canvas.height) {
//             this.position.y = canvas.height - this.r;
//             this.velocity.y = -this.velocity.y;
//         }
//         if (this.position.x - this.r < 0) {
//             this.position.x = 0 + this.r;
//             this.velocity.x = -this.velocity.x;
//         }
//         else if (this.position.x + this.r > canvas.width) {
//             this.position.x = canvas.width - this.r;
//             this.velocity.x = -this.velocity.x;
//         }
//     }
//     draw() {
//         ctx.fillStyle = 'white';
//         ctx.beginPath();
//         ctx.lineWidth = 2;
//         ctx.arc(this.position.x, this.position.y, this.r, 0, Math.PI*2);
//         ctx.fill();
//         ctx.strokeStyle = '#123';
//         ctx.stroke();
//         ctx.closePath();
//     }
// }
