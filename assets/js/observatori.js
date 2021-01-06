console.log('hello observatori!');

var song;

function preload() {
    song = loadSound('http://www.xeno-canto.org/sounds/uploaded/WKVKSVMNDZ/17720.mp3');
}

function setup() {
    var canvas = createCanvas(500, 500);
    canvas.parent("p5canvas");
    song.play();
}

function draw() {
    // console.log(song.isPlaying());
    background(100);
    ellipse(200, 200, 100, 100);
}
