let names = ['Maryam', 'Jack Skellington', 'Corpse Bride', 'Coraline', 'Sally', 'Edward Scissorhands', 'Wybie', 'Emily', 'Victoria', 'Victor', 'Oogie Boogie', 'Other Mother','Willy Wonka','Violet','Veruca']
let verbs = ['watches', 'stars in', 'loves', 'hates', 'destroyed']
let movies = ['The Nightmare Before Christmas', 'Edward Scissorhands', 'Beetlejuice', 'Corpse Bride', 'Coraline', 'Frankenweenie', 'Charlie and the Chocolate Factory']

let sentences = []

// index 

function setup() {


    let canvas = createCanvas(800, 400)
    // canvas.parent('p5container')
    background('black')

    for (var i = 0; i < names.length; i++) {

        let sentence = random(names) + " " + random(verbs) + ' ' + random(movies)
        sentences.push(sentence)

    }

}

function draw() {

    textAlign(CENTER,CENTER)
    textSize(20)


    for (var i = 0; i < sentences.length; i++) {

        fill('orange')
							   
			background(0)


        let sentence = sentences[i]

        let posX = cos(frameCount / (5 + sentences.length * i)) * width / 6
        let posY = sin(frameCount / (5 * i + sentences.length)) * width / 6
        text(sentences[i], posX + width / 2, posY + height / 2)
			


    }
		
	
}