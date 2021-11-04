

var battlefieldImg
var zombie1Img
var zombie1
function preload(){
  battlefieldImg = loadImage("IMAGES/battlefield.jpeg")
  zombie1Img = loadAnimation("IMAGES/zombie_run_1-removebg-preview.png","IMAGES/zombie_run_2-removebg-preview.png","IMAGES/zombie_run_3-removebg-preview.png","IMAGES/zombie_run_4-removebg-preview.png","IMAGES/zombie_run_5-removebg-preview.png")
}



function setup() {
  createCanvas(1520,690);
  
}

function draw() {
  background(battlefieldImg);  
  zombiesTeam()
  drawSprites();
}

function zombiesTeam(){
  zombie1 = createSprite(200,100,20,20)
  zombie1.addAnimation("run",zombie1Img)
 //zombie1.velocityY = 2
}