var images=["Nasa1.jpg", "Nasa2.jpg", "Nasa3.jpg", "Nasa4.jpg", "Nasa5.jpg"];
var randomnumber=(Math.floor( Math.random()*5));
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var RoverH = 100;
var RoverW = 100;
var RoverX = 10;
var RoverY = 10;

function load() {
    bacgroungimg = new Image();
    Roverimg = new Image();
    bacgroungimg.src =images[randomnumber];
    Roverimg.src = "rover.png";
    bacgroungimg.onload = uploadBackground;
    Roverimg.unload = uploadRover;
}

function uploadBackground() {
    ctx.drawImage(bacgroungimg, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(Roverimg, RoverX, RoverY, RoverW, RoverH);
    console.log("DrawRover")
}
window.addEventListener("keydown", mykeydown)

function mykeydown(e) {

    keypress = e.keyCode;
    console.log("Keypress"+keypress);
    if (keypress == 38) {
        up();
        console.log("Up");

    }
    if (keypress == 40) {
        down();
        console.log("down");

    }

    if (keypress == 37) {
        left();
        console.log("left");

    }

    if (keypress == 39) {
        right();
        console.log("right");

    }
}

function up() {
    if(RoverY >= 0 ){
        RoverY = RoverY - 10;
        uploadBackground();
        uploadRover();
    }
}

function down() {
    if(RoverY <= 500){
        RoverY = RoverY + 10;
        uploadBackground();
        uploadRover();
    }
}

function left() {
    if(RoverX >= 0 ){
        RoverX = RoverX - 10;
        uploadBackground();
        uploadRover();
    }
}

function right() {
    if(RoverX <= 700){
        RoverX = RoverX + 10;
        uploadBackground();
        uploadRover();
    }
}