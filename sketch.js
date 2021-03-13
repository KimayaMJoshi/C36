var hypnoticBall, database;
var position;
var player,game,form;
var gameState =0,playerCount
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game(); 
  game.getState();

  console.log("game state is "+ gameState);
  game.start();
}

function draw(){
  background("white");
  

  
}

