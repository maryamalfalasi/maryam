var capture;

function setup() { 
  createCanvas(600, 400);
   // canvas.parent('p5container')
  capture = createCapture(VIDEO);
  capture.size(400, 300);
  noStroke();
}
function draw() { 
  //background(0);
  capture.loadPixels();
  var stepSize = 5;
  for (var x = 0; x < capture.width; x += stepSize) {
		// noprotect
    for (var y = 0; y < capture.height; y += stepSize) {
      var index = ((y*capture.width) + x) * 4;
      var redVal = capture.pixels[index];
      var greenVal = capture.pixels[index + 1];
      var blueVal = capture.pixels[index + 2];
			fill(redVal/2, greenVal/2, blueVal*2,190);
			ellipse(x, y, stepSize, stepSize);
    }
  }
}

