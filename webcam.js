let video;
let poseNet;
let pose;
let bodypix;
let segmentation;
let img;


function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    bodypix = ml5.bodyPix(video, modelReady)

}

bodyPix.load({
    architecture: 'MobileNetV1',
    outputStride: 16,
    multiplier: 0.75,
    quantBytes: 2
})

net.segmentPerson(webcamElement,  {
    flipHorizontal: true,
    internalResolution: 'medium',
    segmentationThreshold: 0.5
  })
  .then(personSegmentation => {
    if(personSegmentation!=null){
        drawBody(personSegmentation);
    }
});
cameraFrame = requestAnimFrame(detectBody);

const canvasPerson = document.getElementById("canvasPerson");
let contextPerson = canvasPerson.getContext('2d');
 
function drawBody(personSegmentation)
{
    contextPerson.drawImage(camera, 0, 0, camera.width, camera.height);
    var imageData = contextPerson.getImageData(0,0, camera.width, camera.height);
    var pixel = imageData.data;
    for (var p = 0; p<pixel.length; p+=4)
    {
      if (personSegmentation.data[p/4] == 0) {
          pixel[p+3] = 0;
      }
    }
    contextPerson.imageSmoothingEnabled = true;
    contextPerson.putImageData(imageData,0,0);
}
