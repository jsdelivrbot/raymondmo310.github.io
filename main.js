var NUM_CIRCLES = 12

var circleDiameter;
var circleRadius;
    
var rVal;
var gVal;
var bVal;

function setup() {
  createCanvas(250, 100);

  frameRate(16);

  circleDiameter = width/NUM_CIRCLES;
  circleRadius = circleDiameter/2;

  rVal = 100;
  gVal = 120;
  bVal = 140;
}

function draw() {
  var isShifted = false;

  var y = height;
  while (y >= 0) {

    var x;

    if (isShifted) {
      x = circleRadius;
    } else {
      x = 0;
    }

    while (x <= width) {
      stroke(color(rVal, gVal, bVal));
      fill(color(rVal, gVal, bVal));
      rect(x, y, 15, 5);
      x = x + circleDiameter;
    }

    y = y - circleRadius;
    isShifted = !isShifted;

    rVal = (rVal + 254) % 256;
    gVal = (gVal + 222) % 256;
    bVal = (bVal + 143) % 256;
  }
}