var canvas = document.querySelector("canvas");
var game = canvas.getContext("2d");
var x = 0;
var y = 0;
var xspeed = 0;
var yspeed =  0;
var gravity = 1;
var height = 50;
var ground = canvas.height - height;

var playerRight = new Image();
playerRight.src = "player.png";
var imageRatio = 1;
playerRight.onload = function() {
  imageRatio = playerRight.width / playerRight.height;
}
var playerLeft = new Image();
playerLeft.src = "player2.png";
var playerImage = playerRight;

function draw() {
  x = x + xspeed;
  y = y + yspeed;
  yspeed = yspeed + gravity;

if (y > ground){
  y = ground;
  yspeed = 0;
}

  game.fillStyle = "lightblue";
  game.fillRect(0, 0, canvas.width, canvas.height);

  game.drawImage(playerImage, x, y, height * imageRatio, height);
}

setInterval(draw, 20);

function startMove(event) {
  //pressed left
  if (event.keyCode == 37) {
    xspeed = -5;
    playerImage = playerLeft;
  }
  //pressed right
  if (event.keyCode == 39) {
    xspeed = 5;
    playerImage = playerRight;
  }
  //pressed up
  if (event.keyCode == 38) {
    yspeed = -15;
  }
}

document.onkeydown = startMove;

function stopMove(event) {
  if (event.keyCode == 37 || event.keyCode == 39) {
    xspeed = 0;
  }
}

document.onkeyup = stopMove;
