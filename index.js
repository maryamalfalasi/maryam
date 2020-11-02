
let video;
let poseNet;
// let noseX = 0
// let noseY = 0
// let eyelX = 0
// let eyelY = 0



function setup(){
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.hide()
    console.log(ml5);
    poseNet = ml5.poseNet(video, modelReady);
    poseNet.on('pose' , gotPoses);
}
// function gotPoses(poses){
//     console.log(poses)
//     if (poses.length > 0) {

//     let nX = poses[0].pose.keypoints[0].position.x
//     let nY = poses[0].pose.keypoints[0].position.y
//     let eX = poses[0].pose.keypoints[1].position.x
//     let eY = poses[0].pose.keypoints[1].position.y

//     noseX = lerp(noseX, nX, 0.5)
//     noseY = lerp(noseY, nY, 0.5)
//     eyelX = lerp(eyelX, eX, 0.5)
//     eyelY = lerp(eyelY, eY, 0.5)

// //     }
// }
function modelReady(){
    console.log('model ready')
}
function draw(){
    background(220);
    tint(0, 153, 204);
    image(video, 0, 0)

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

    // let d = dist(noseX, noseY, eyelX, eyelY)

    // // filter(GRAY)

    // fill(255, 0, 0)
    // ellipse(noseX, noseY, d)

    // fill(0, 0, 255)
    // ellipse(eyelX, eyelY, 50)

    }
}