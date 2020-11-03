// let bodypix;
let video;
// let segmentation;
// let img;
let poseNet;
let pose;
let skeleton;
// let noseX = 0
// let noseY = 0

let pixelsGrid = []

let cx = 0 
let cy = 0 

// distance attractor filed 
// use nose eyes mouth as attractor points


// const options = {
//   outputStride: 8, // 8, 16, or 32, default is 16
//   segmentationThreshold: 0.3 // 0 - 1, defaults to 0.5 
// }

function setup() {
  let canvas = createCanvas(1280, 720);

  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide(); 
  //bodypix = ml5.bodyPix(video, modelReady)
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
//   console.log('pixels grid loaded')
  

}

function gotPoses(poses){
    // console.log(poses)
    if (poses.length > 0) {

    pose = poses[0].pose;
    skeleton = poses[0].skeleton
      
    // let nX = poses[0].pose.keypoints[0].position.x
    // let nY = poses[0].pose.keypoints[0].position.y
    
    // noseX = lerp(noseX, nX, 0.5)
    // noseY = lerp(noseY, nY, 0.5)
    
    }
}
function draw() {

    // console.log('draw!')

    background('black')

    let spacing = 8
    noStroke()

    if (video) {

        // image(capture.get(),0,0)

        console.log('video available')

        for (var x = 0; x < video.width; x += spacing) {

            for (var y = 0; y < video.height; y += spacing) {

                let col = video.get(x, y)
                
                if (pose) {

                let dx = x - pose.nose.x
                let dy = y - pose.nose.y

                let offX = dx / 5
                let offY = dy / 5

                let d = dist(pose.nose.x, pose.nose.y, 0, 0)

                let radius = width/4

                if (d < radius) {

                    let alpha = (1-d/radius)*255

                    let circleRadius = (1-d/radius)*50
                    // stroke(255)

                    fill(brightness(col)*2,alpha)
                    circle(x + offX+cx, y + offY + sin(frameCount/100)*height/4, circleRadius)

}

                }




            }


        }

    }

    cx++
    cy++ 

    if (cx > width) cx = 0 
    if (cy > height) cy = 0



}