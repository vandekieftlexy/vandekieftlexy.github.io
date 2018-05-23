var bubbleSize = 40;
var bubble1X, bubble1Y;

function setup() {
  // put setup code here
  createCanvas(500,400);
  bubble1 = {
    x: random(0, width),
    y: random(0, height),
    c: random(0, 255)
  };

  bubble2 = {
    x: random(0, width),
    y: random(0, height),
    c: random(0, 255)
  };
}

function draw() {
  // put drawing code here
  background("pink");

  ellipse(bubble1.x, bubble1.y, bubbleSize, bubbleSize);
  ellipse(bubble2.x, bubble2.y, bubbleSize, bubbleSize);

  fill(bubble1.c);
  fill(bubble2.c);

  bubble1.x += random(-2, 2);
  bubble1.y += random(-2, 2);
  bubble2.x += random(-2, 2);
  bubble2.y += random(-2, 2);
}