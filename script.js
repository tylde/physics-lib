//'use strict';

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// ****************************************************************************************


var part = new Particle(400, 300, 2);
var wind = new Vector2D(10, 5);

console.log(wind);
console.log(part.acc);
part.addForce(wind);
console.log(wind);
console.log(part.acc);

var ball = new Circle(400, 300, 2, 10);

// var u = new Vector2D(4, 3);
// var v = new Vector2D(2, 5);
// var w = Vector2D.add(u, v);
// console.log(u);
// console.log(v);
// console.log(w);

// console.log(v);
// console.log(v.mag());
// console.log('----------------------------');
// v.norm();
// console.log(v);
// console.log(v.mag());
// console.log('----------------------------');
// v.limit(11)

// console.log(v);
// console.log(v.mag());


// var a = new Vector2D(4, 3);
// var b = new Vector2D(2, 5);
// console.log(a.angleDeg(b));

var timer = setInterval(script, 1000 / 60);


function script() {
    ball.move();
    draw();
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#404040';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ball.draw();
}




