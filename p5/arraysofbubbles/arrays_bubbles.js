// define bubbles as an array
let bubbles=[];
var bubblesSize = 40;

// setup your bubble objects
function setup() {
   createCanvas(500, 400);

   for (let i = 0; i < 100; i++) {
        bubbles[i] = {
            x: random(0, width),
            y: random(0, height),
            c: random(0,255)
        };
   }
}

function draw() {
    background("purple");

    for (let i = 0; i < bubbles.length; i++)
    {
        fill(bubbles[i].c);
        ellipse (bubbles[i].x, bubbles[i].y, bubblesSize);
        bubbles[i].x += random(-2,2);
        bubbles[i].y += random(-2,2);
    }
}