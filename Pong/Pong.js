const winWidth = window.innerWidth;
const winHeight = window.innerHeight;
const paddles = [];
const paddleWidth = 20;
const paddleHeight = 150;
const ballDiameter = 35;
var ballLeftRight = false;
var ballUpDown = true;

function createLeftPaddle() {
    let leftPaddle = document.createElement('div'); //create element
    leftPaddle.id = "paddleLeft"; //set id for element
    leftPaddle.style.left = 20 + 'px' //set location
    leftPaddle.speed = 0; //placeholder for speed later
    document.body.appendChild(leftPaddle); // push onto document
    paddles.push(leftPaddle) //add to array for later
}

function createRightPaddle() {
    let rightPaddle = document.createElement('div');
    rightPaddle.id = "paddleRight";
    rightPaddle.style.left = (winWidth - paddleWidth -20) +'px'; //put right paddle 20 px in from edge
    rightPaddle.speed = 0; //placeholder for speed later
    document.body.appendChild(rightPaddle);
    paddles.push(rightPaddle)
}

function createBall() {
    let ball = document.createElement('div');
    ball.id = "ball";
    ball.dx = 5; //initialize x velocity
    ball.dy = 0;//initialize y velocity
    //console.log(ball)
    ball.style.left = (winWidth/2) - (ballDiameter) + 'px'; // center ball
    ball.style.top = (winHeight/2) - (ballDiameter) + 'px'; //center ball
    document.body.appendChild(ball);
}

function moveball() {
    let ball = document.getElementById('ball');
    //left/right movement
    if(ballLeftRight) {
        ball.style.left = (parseInt(ball.style.left) + ball.dx) + 'px';
    } else {
        ball.style.left = (parseInt(ball.style.left) - ball.dx) + 'px';
    }
    //up/down movement
    if(ballUpDown) {
        ball.style.top = (parseInt(ball.style.top) + ball.dy) + 'px';
    } else {
        ball.style.top = (parseInt(ball.style.top) - ball.dy) + 'px';
    }
    
    checkPaddleCollide()
    setTimeout(moveball,58); //moves ball
}

function checkPaddleCollide() {
    let ball = document.getElementById('ball');
    let leftPaddle = paddles[0];
    let rightPaddle = paddles[1];
    //first check left paddle
    if(parseInt(ball.style.left) < parseInt(leftPaddle.style.left) + paddleWidth) { //TODO: add up/down check to make sure we are within the paddle's top and bottom
        ballLeftRight = !ballLeftRight;
    } else {
        //code for scoring here
    }
    //check right paddle
    //TODO finish this


    
}


createLeftPaddle();
createRightPaddle();
createBall();
//moveball();