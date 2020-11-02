let video;
let poseNet;
let pose;


function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function gotPoses(poses) {
    if (poses.length > 0) {
        pose = poses[0].pose;
    }
}


function modelLoaded() {
    console.log('poseNet ready');
}

function draw() {
    image(video, 0, 0);
    tint(0, 153, 204);
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

        // Nose
        fill(0);
        triangle(pose.nose.x - (d/3), pose.nose.y - (d/10), pose.nose.x + (d/3), pose.nose.y -(d/10), pose.nose.x, pose.nose.y + (d/3));

          //Outer Ear
        triangle(pose.nose.x + d, pose.nose.y - (d*1.2), pose.nose.x + (d/1.2), pose.nose.y -(d*2), pose.nose.x + (d/5), pose.nose.y - (d*1.5));
        triangle(pose.nose.x - d, pose.nose.y - (d*1.2), pose.nose.x - (d/1.2), pose.nose.y -(d*2), pose.nose.x - (d/5), pose.nose.y - (d*1.5));

        // Inner Ear
        fill('#FA8072');
        triangle(pose.nose.x + (d*.9), pose.nose.y - (d*1.3), pose.nose.x + (d/1.3), pose.nose.y - (d*1.8), pose.nose.x + (d/3.33), pose.nose.y - (d*1.5));
        triangle(pose.nose.x - (d*.9), pose.nose.y - (d*1.3), pose.nose.x - (d/1.3), pose.nose.y - (d*1.8), pose.nose.x - (d/3.33), pose.nose.y - (d*1.5));

        // Whiskers
        // line(pose.nose.x + (d/2.5), pose.nose.y - (d/20), pose.nose.x + (d), pose.nose.y - (d/4));
        // line(pose.nose.x + (d/2.5), pose.nose.y + (d/20), pose.nose.x + d, pose.nose.y + (d/4));
        // line(pose.nose.x + (d/2.5), pose.nose.y, pose.nose.x + d, pose.nose.y);

        // line(pose.nose.x - (d/2.5), pose.nose.y - (d/20), pose.nose.x - d, pose.nose.y - (d/4));
        // line(pose.nose.x - (d/2.5), pose.nose.y + (d/20), pose.nose.x - d, pose.nose.y + (d/4));
        // line(pose.nose.x - (d/2.5), pose.nose.y, pose.nose.x - d, pose.nose.y);

    }
}


