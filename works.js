let bodypix;
let video;
let segmentation;
let img;
let poseNet;
let pose;


const options = {
  outputStride: 8, // 8, 16, or 32, default is 16
  segmentationThreshold: 0.3 // 0 - 1, defaults to 0.5 
}

function setup() {
  createCanvas(620, 440);

  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide(); 
  bodypix = ml5.bodyPix(video, modelReady)
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);

}

function modelReady() {
    console.log('ready!')
    bodypix.segment(gotResults, options)
  }
  
  function gotResults(err, result) {
    if (err) {
      console.log(err)
      return
    }
    // console.log(result);
    segmentation = result;
  
    background(0);
    image(video, 0, 0, width, height)
    image(segmentation.maskBackground, 0, 0, width, height)
    bodypix.segment(gotResults, options)
  
  }

function draw() {
  // background(VIDEO);

  translate(video.width, 0);
  scale(-1, 1);
  image(video, 0, 0);
  filter(GRAY)
  
   if (pose) {
        let eyeR = pose.rightEye;
        let eyeL = pose.leftEye;
        let d = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y);

        //Outer Eye
        fill(0);
        ellipse(eyeR.x,eyeR.y,d/2, (d/2));
        ellipse(eyeL.x,eyeR.y,d/2, d/2);

        // Inner Eye
        fill(255);
        ellipse(eyeR.x + 8,eyeR.y + 8, d/15, d/15);
        ellipse(eyeR.x - 8,eyeR.y - 8, d/15, d/15);
        ellipse(eyeR.x - 8,eyeR.y + 8, d/15, d/15);
        ellipse(eyeR.x + 8,eyeR.y - 8, d/15, d/15);

        ellipse(eyeL.x + 8,eyeR.y + 8, d/15, d/15);
        ellipse(eyeL.x - 8,eyeR.y - 8, d/15, d/15);
        ellipse(eyeL.x - 8,eyeR.y + 8, d/15, d/15);
        ellipse(eyeL.x + 8,eyeR.y - 8, d/15, d/15);

  
    }

}
  
  function gotPoses(poses) {
    if (poses.length > 0) {
        pose = poses[0].pose;
    }
}
  
  function modelLoaded() {
    console.log('poseNet ready');
}

 