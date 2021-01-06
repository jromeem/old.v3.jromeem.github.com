console.log("random uselesss :)");

var mapp = function(value, seq1Low, seq1High, seq2Low, seq2High) {
    return ((seq2High - seq2Low) / (seq1High - seq1Low))*(value - seq1Low) + seq2Low;
}
var delta = 0;

setInterval(function() {
    delta += 0.10;

    var x = Math.sin(delta);
    var y = Math.cos(delta);
    
    var red = Math.sin(delta + 0.0);
    var green = Math.sin(delta + (2*Math.PI/3));
    var blue = Math.sin(delta + (4*Math.PI/3));

    $('#delta').text(delta);
    $('#sin').text(x);
    $('#cos').text(y);

    $('#sinbar-handle-1').css("left", x*260);
    $('#cosbar-handle-2').css("left", y*260);

    $('#red-handle').css("left", red*260);
    $('#green-handle').css("left", green*260);
    $('#blue-handle').css("left", blue*260);

    var red255 = Math.floor(mapp(red, -1, 1, 150, 255));
    var green255 = Math.floor(mapp(green, -1, 1, 150, 255));
    var blue255 = Math.floor(mapp(blue, -1, 1, 150, 255));

    $('#red').text(red255);
    $('#green').text(green255);
    $('#blue').text(blue255);

    var rgb = "rgb(" + red255 + "," + green255 + "," + blue255 + ")"
    $('#square').css("background-color", rgb);

    console.log("rgb:", rgb);

}, 50);