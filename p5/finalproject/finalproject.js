let ball;
var ballX = 325;
var ballY = 250;
var bricks = [];
var score = 0;
var timesplayed = 0;

function setup() {
    createCanvas(650,500);

    ball = {
        //xvelocity: random(-5, -4),
        //yvelocity: random(-5, -4),
        xvelocity: 0,
        yvelocity: 0
    };
    bricksinit();
   textFont('Georgia');
}

function bricksinit() {
    bricks=[];
    for (let i = 0; i < 10; i++) {
        brick = {
            color: ('#901f32'),
            x: i * 100 + 55,
            y: 50
        };
   bricks.push(brick);
   }
}

function draw() {
    background('#7bccc2');

    //if (keyIsPressed === true) {
       // ball.xvelocity = random(-5, -4),
        //ball.yvelocity = random(-5, -4),
   // }

    //paddle
    fill('#00122E');
    rect(mouseX, 450, 100, 10);
    if (mouseX >= 550) {
        mouseX = 550;
    }

    //brick
    for (let i = 0; i < bricks.length; i++) {
        fill(brick.color);
        noStroke();
        rect(bricks[i].x, bricks[i].y, 50, 30);

        if (bricks[i].x<=ballX && ballX<=(bricks[i].x + 50) && bricks[i].y<=ballY - 10 && ballY - 10<=(bricks[i].y + 30)) {
        console.log("hitbrick");
        ball.yvelocity = -ball.yvelocity;
        bricks.splice(i,1);
        score = score + 1;
        //text('You Win!', 175, 100);
        //textSize(50);
    }
        //if (ball.xvelocity == 0 && score == 0) {
        if (timesplayed == 0) {
            text('Press the Space Bar to Start', 100, 200);
            start();
        }
    }

    //rect(250, 150, 50, 50);

    //ball
    fill('#f2cab9');
    ellipse(ballX, ballY, 20, 20);
    ballX = (ballX - ball.xvelocity);
    ballY = (ballY- ball.yvelocity);

     //scoreboard
    text('Score:'+ score, 10, 30);
    textSize(32);

    if (score == 6) {
       text('You Win! Press Space Bar to Play Again!', 32, 200);
       ball.xvelocity = 0;
       ball.yvelocity = 0;
       start();
       //bricksinit();
    }

    //paddle movement
    if (ballY >= 450 && ballY <= 460 && ballX >= mouseX && ballX <= mouseX + 100) {
        ball.yvelocity = -ball.yvelocity;
        // xvelocity = xvelocity + 5;
        console.log("hit");
    }

    if (ballX <= 0 || ballX >= 650) {
        ball.xvelocity = -ball.xvelocity;
    }

    if (ballY <= 0) {
        ball.yvelocity = -ball.yvelocity;
    }

    if (ballY >= 600) {
        textSize(32);
        text('Game Over! Press Space Bar to Try Again!', 30, 200);
        ball.xvelocity = 0;
        ball.yvelocity = 0;
        start();
        //bricksinit();
}
  function start() {
    if (keyIsPressed === true){
        if (keyCode === 32) {
            ballX = width/2;
            ballY = height/2;
            score = 0;
            ball.xvelocity = random(-5, -4),
            ball.yvelocity = random(-5, -4),
            timesplayed = timesplayed + 1;
            bricksinit();
        }
        }
    }
}