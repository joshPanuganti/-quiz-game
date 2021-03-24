var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var contestant,question,quiz;
var contestant1,contestant2,contestant3,contestant4;

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}