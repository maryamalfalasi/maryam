let video;
let poseNet;
let pose;
let img0
let img1
function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
video.hide();
  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses)
}

function gotPoses(poses){
  console.log(poses);
  if (poses.length>0){
    pose = poses[0].pose;
  }
}


function preload(){
  img0=loadImage('flow5.PNG')
img1=loadImage('flow6.PNG')}


function modelLoaded(){
  console.log('poseNet ready');
}
function draw() {
  background(220);
  image(video,0,0)
  if (pose){
  image(img0,pose.nose.x,pose.nose.y,300,300);
  }
if (pose){
  image(img1,pose.nose.y,pose.nose.y,300,300);
  }

}