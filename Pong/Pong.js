const winWidth = window.innerWidth;
const winHeight = window.innerHeight;
const paddles = []

function createLeftPaddle() {
    let leftPaddle = document.createElement('div'); //create element
    leftPaddle.id = "paddleLeft"; //set id for element
    document.body.appendChild(leftPaddle); // push onto document
    paddles.push(leftPaddle) //add to array for later
}

function createRightPaddle() {
    let rightPaddle = document.createElement('div');
    rightPaddle.id = "paddleRight";
    rightPaddle.style.position = "abolute";
    console.log(rightPaddle);
    document.body.appendChild(rightPaddle);
}

createLeftPaddle();
createRightPaddle();