let video

let pixelsGrid = []

let cx = 0 
let cy = 0 
// distance attractor filed 
// use nose eyes mouth as attractor points


function setup() {


    let canvas = createCanvas(1280, 720)
        // pixelsGrid = initGrid(10, 10)

    video = createCapture(VIDEO)
    video.hide()
    console.log('pixels grid loaded')

}

function draw() {

    // console.log('draw!')

    background(0)

    let spacing = 5
    noStroke()

    if (video) {

        // image(capture.get(),0,0)

        console.log('video available')

        for (var x = 0; x < video.width; x += spacing) {

            for (var y = 0; y < video.height; y += spacing) {

                let col = video.get(x, y)

                let dx = x - mouseX
                let dy = y - mouseY

                let offX = dx / 5
                let offY = dy / 5

                let d = dist(mouseX, mouseY, x, y)

                let radius = width/8

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

    cx++
    cy++ 

    if (cx > width) cx = 0 
    if (cy > height) cy = 0



}