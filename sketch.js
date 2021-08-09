var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var garage, c1, c2, c3, c4;
var Macqueen, Macqueen1;

var form, player, game;

function preload(){
  car = loadImage("Images/Car.png");
  car1 = loadImage("Images/car1.png");
  backgroundImage = loadImage("Images/tr.jpg");
  winner = loadImage("Images/winner.jpg");
}
function setup(){
  canvas = createCanvas(displayWidth-30,displayHeight-175);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    //clear();
    game.end();
  }
}
