var fixed,moving;

function setup() {
  createCanvas(800,400);
  
  fixed=createSprite(400, 200, 50, 50);
  fixed.shapeColor="green";
  moving=createSprite(600,300,60,50);
  moving.shapeColor="green";
}

function draw() {
  background(255,255,255);  

  moving.x=mouseX;
  moving.y=mouseY;

  if(moving.x-fixed.x<moving.width/2+fixed.width/2 && fixed.x-moving.x<moving.width/2+fixed.width/2 && moving.y-fixed.y<moving.height/2+fixed.height/2 && fixed.y-moving.y<moving.height/2+fixed.height/2){
   moving.shapeColor="blue";
   fixed.shapeColor="blue";
  } else {
    moving.shapeColor="green";
    fixed.shapeColor="green";
  }

  drawSprites();
}