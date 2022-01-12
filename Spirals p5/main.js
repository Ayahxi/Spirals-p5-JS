function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);
  frameRate(50);
  radiusInc = random(0.01, 0.55);
  angleInc = random(5, 9);
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);

  rInc = random(0, 30);
  gInc = random(0, 30);
  bInc = random(0, 30);
}
let radius = 0;
let angle = 12;
let radiusInc;
let angleInc;
let r;
let g;
let b;

let rInc;
let gInc;
let bInc;

function draw() {
  if (frameCount === 1) {
    capturer.start();
  }
  for (let i = 0; i < 4; i++) {
    push();
    translate(width / 2, height / 2);
    rotate(angle);
    angle += angleInc;
    radius += radiusInc;
    //Strive.drawTickAxes();
    strokeWeight(6);
    stroke(r, g, b);
    point(radius, 0);
    r += rInc;
    g += gInc;
    b += bInc;
    if (r > 255) {
      r = 0;
    }
    if (g > 255) {
      g = 0;
    }
    if (b > 255) {
      b = 0;
    }
    pop();
  }
  if (frameCount < 60 * 60) {
    capturer.capture(canvas);
  } else if (frameCount === 60 * 60) {
    capturer.save();
    capturer.stop();
  }
}
