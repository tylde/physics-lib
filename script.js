//'use strict';
const FRAMES = 60;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// ****************************************************************************************

var balls = [];
for (let i = 0; i < 100; i++) {
    var isGood = false;
    var ball = {};
    while(!isGood) {
        isGood = true;
        ball = new Ball(getRandomInt(20, 780), getRandomInt(20, 580), 1, 10);
        for (let j = 0; j < balls.length; j++) {
            let vect = Vector2D.sub(ball.position, balls[j].position);
            let dist = vect.mag();
            if (dist < ball.r + balls[j].r) {
                isGood = false;
            }
        }
    }
    balls.push(ball);

    balls[i].velocity = new Vector2D(getRandomFloat(-2, 2, 3), getRandomFloat(-2, 2, 3));
}

var timer = setInterval(script, 1000 / FRAMES);

// function loop() {
//     script();
//     window.requestAnimationFrame(function() {
//         loop();
//     });
// }
// loop();

function script() {
    update();
    draw();
}

function update() {
    for (let i = 0; i < balls.length; i++) {
        balls[i].move();
    }

    for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
            if (balls[i] != balls[j]) {
                balls[i].bounce(balls[j]);
            }
        }
    }

    //ball.zeroAcc();

    // // GRAVITY
    // var gravity = new Vector2D(0, 0.1 * ball.mass);
    // ball.addForce(gravity);

    // // FRICTION
    // var friction = ball.velocity.get();
    // var coefficient = 0.1;
    // var normalForce = 1;
    // friction.mult(-1).norm().mult(coefficient).mult(normalForce);
    // ball.addForce(friction);
    // console.log(friction, ball.velocity, ball.velocity.mag(), ball.acceleration);

    // // AIR DRAG
    // var dragCoeff = 0.05;
    // var speed = ball.velocity.mag();
    // var surface = 1;
    // var dragMag = dragCoeff * Math.pow(speed, 2);
    // var drag = ball.velocity.get().norm().mult(-1).mult(surface).mult(dragMag);
    // ball.addForce(drag);
    // console.log(ball.velocity);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#404040';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
    }
}
