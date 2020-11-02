import * as bodyPix from '@tensorflow-models/body-pix'; 

async function loadAndUseBodyPix() {
   const net = await bodyPix.load();
   // BodyPix model loaded
}
const imageElement = document.getElementById('image');

// load the BodyPix model from a checkpoint
const net = await bodyPix.load();

// arguments for estimating person segmentation.
const outputStride = 16;
const segmentationThreshold = 0.5;

const personSegmentation = await net.estimatePersonSegmentation(imageElement, outputStride, segmentationThreshold);

const imageElement = document.getElementById('image');

const net = await bodyPix.load();
const segmentation = await net.estimatePersonSegmentation(imageElement);

const maskBackground = true;
// Convert the personSegmentation into a mask to darken the background.
const backgroundDarkeningMask = bodyPix.toMaskImageData(personSegmentation, maskBackground);

const opacity = 0.7;

const canvas = document.getElementById('canvas');
// draw the mask onto the image on a canvas.  With opacity set to 0.7 this will darken the background.
bodyPix.drawMask(
    canvas, imageElement, backgroundDarkeningMask, opacity);

    const imageElement = document.getElementById('image');

// load the BodyPix model from a checkpoint
const net = await bodyPix.load();

// arguments for estimating body part segmentation.
const outputStride = 16;
const segmentationThreshold = 0.5;

// load the person segmentation model from a checkpoint
const net = await bodyPix.load();

const partSegmentation = await net.estimatePartSegmentation(imageElement, outputStride, segmentationThreshold);

const imageElement = document.getElementById('person');

const net = await bodyPix.load();
const partSegmentation = await net.estimatePartSegmentation(imageElement);

const rainbow = [
  [110, 64, 170], [106, 72, 183], [100, 81, 196], [92, 91, 206],
  [84, 101, 214], [75, 113, 221], [66, 125, 224], [56, 138, 226],
  [48, 150, 224], [40, 163, 220], [33, 176, 214], [29, 188, 205],
  [26, 199, 194], [26, 210, 182], [28, 219, 169], [33, 227, 155],
  [41, 234, 141], [51, 240, 128], [64, 243, 116], [79, 246, 105],
  [96, 247, 97],  [115, 246, 91], [134, 245, 88], [155, 243, 88]
];

// the colored part image is an rgb image with a corresponding color from the rainbow colors for each part at each pixel.
const coloredPartImage = bodyPix.toColoredPartImageData(partSegmentation, rainbow);
const opacity = 0.7;

const canvas = document.getElementById('canvas');
// draw the colored part image on top of the original image onto a canvas.  The colored part image will be drawn semi-transparent, with an opacity of 0.7, allowing for the original image to be visible under.
bodyPix.drawMask(
    canvas, imageElement, coloredPartImageData, opacity);

    