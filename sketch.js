
var ball;

function setup() {
  createCanvas(400,400);

  ball = createSprite(200,200, 50,50)

  
}

function draw() {
  background("Pink");

  drawSprites()
  
  if(keyIsDown(RIGHT_ARROW)){
  ball.x=ball.x+2
  }

  if(keyIsDown(LEFT_ARROW)){
    ball.x=ball.x-2
  }

}




