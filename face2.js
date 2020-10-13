// Example Code
// TRY Incorperating the following variables in your code 
// leftHandX,leftHandY,rightHandX,rightHandY,leftEyeX,leftEyeY,rightEyeX,rightEyeY

function setup() {
	createCanvas(640, 480);
	loadPoseNet()
	background(255);
	
	background('black')
}

function draw() {
	background(vid.get())
	tint(0, 153, 204);
	noStroke()
	for (i = 0; i < 100; i+=5){
		head(noseX, noseY,200-i,100-i)
	}
		
	mouth(noseX, noseY+25, 100) 
	fill(255, 0, 255)
	//ellipse(noseX, noseY, 20, 20);
	//ellipse(rightHandX, rightHandY, 20, 20);
	//ellipse(leftHandX, leftHandY, 20, 20);
	

	eyeBall(leftEyeX, leftEyeY, '#2f2f2f');
	eyeBall(rightEyeX, rightEyeY, '#2f2f2f');
	

}

function mouth(x,y,w){
	stroke(0) 
	//line(x-w/2,y,x+w/2,y) 
	
}
function head(x,y,w,h,col){
	
	//fill(255,0,255,10) 
	//rectMode(CENTER) 
	//rect(x,y,w,h) 
	
}

function eyeBall(x,y,col){
	
	fill('black') 
	circle(x,y,40,30)
	fill(col) 
	circle(x,y,5,5)
	
}

// dont touch this code here 

// poseNet Variables
let vid
let noseX = noseY = rightHandX = rightHandY = leftHandX = leftHandY = leftEyeX = leftEyeY = rightEyeX = rightEyeY = 0
let img;
let poseNet;
let poses = [];


function loadPoseNet() {

	vid = createCapture(640, 480)
	vid.hide()
	poseNet = ml5.poseNet(vid, modelLoaded);

	// set some options
	let options = {
		imageScaleFactor: 1,
		minConfidence: 0.25
	}

	// Listen to new 'pose' events
	poseNet.on("pose", function(results) {

		poses = results;
		if (!poses[0]) return
		let pose = poses[0].pose

		if (pose) {

			noseX = updateValue('nose', 'x', pose, noseX)
			noseY = updateValue('nose', 'y', pose, noseY)
			rightHandX = updateValue('rightWrist', 'x', pose, rightHandX)
			rightHandY = updateValue('rightWrist', 'y', pose, rightHandY)
			leftHandX = updateValue('leftWrist', 'x', pose, leftHandX)
			leftHandY = updateValue('leftWrist', 'y', pose, leftHandY)
			leftEyeX = updateValue('leftEye', 'x', pose, leftEyeX)
			leftEyeY = updateValue('leftEye', 'y', pose, leftEyeY)
			rightEyeX = updateValue('rightEye', 'x', pose, rightEyeX)
			rightEyeY = updateValue('rightEye', 'y', pose, rightEyeY)

		}


	});

}

function updateValue(key1, key2, kp, curr) {


	if (kp[key1].confidence > 0.2) {
		return (kp[key1][key2] - curr) * 0.5 + curr
	}



	return curr

}

function modelLoaded() {
	console.log('model is loaded')
}