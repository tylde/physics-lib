//'use strict';
const FRAMES = 60;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// ****************************************************************************************


var ball = new Ball(400, 300, 3, 10);
ball.velocity.x = 5;
ball.velocity.y = 8;


// var balls = [];
// for (let i = 0; i < 15; i++) {
//     balls.push(new Ball(getRandomInt(50, 750), 100, 4*i, 2*i));
// }

// for (let i = 0; i < balls.length; i++) {
//     var gravity = new Vector2D(0, 0.1 * balls[i].mass);
//     balls[i].addForce(gravity);
// }



var timer = setInterval(script, 1000 / 60);


function script() {
    update();
    draw();
}


function update() {
    ball.zeroAcc();
    // for (let i = 0; i < balls.length; i++) {
    //     balls[i].move();
    // }

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


    ball.move()
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#404040';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // for (let i = 0; i < balls.length; i++) {
    //     balls[i].draw();
    // }
    ball.draw();
}




