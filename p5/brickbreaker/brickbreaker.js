let ball;
var ballX = 100;
var ballY = 250;

function setup() {
    createCanvas(600,500);

    ball = {
        xvelocity: random(-5, -4),
        yvelocity: random(-5, -4),
    };

    brick = {
        color: ('#901f32'),
    };

}

function draw() {
    background('#7bccc2');

    //paddle
    fill('#00122E');
    rect(mouseX, 450, 100, 10);

    //brick
    fill(brick.color);
    rect(250, 150, 50, 50);
    noStroke();

    //ball
    fill('#fab297');
    ellipse(ballX, ballY, 20, 20);
    ballX = (ballX - ball.xvelocity);
    ballY = (ballY- ball.yvelocity);

    //scoreboard
    text('score:'+ score, 10, 30);
    fill("black");
    textSize(32);
    //text(score, 10, 10, 70, 80);


    if (ballY >= 450 && ballY <= 460 && ballX >= mouseX && ballX <= mouseX + 100) {
        ball.yvelocity = -ball.yvelocity;
        // xvelocity = xvelocity + 5;
        console.log("hit");
    }

    if (ballX <= 0 || ballX >= 600) {
        ball.xvelocity = -ball.xvelocity;
    }

    if (ballY <= 0) {
        ball.yvelocity = -ball.yvelocity;
    }

    if (ballY >= 600) {
        text('Game Over!', 175, 100);
        textSize(50);
    }

    if (250<=ballX && ballX<=300 && 150<=ballY && ballY<=200) {
        console.log("hitbrick");
        brick.color = '#7bccc2';
        ball.yvelocity = 0;
        ball.xvelocity = 0;
        text('You Win!', 175, 100);
        textSize(50);
    }

}
