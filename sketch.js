var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1200,400);
  thickness=random(22,83);
 wall= createSprite(1000, 200,thickness,height/2 );
wall.shapeColor="grey";
bullet=createSprite(100,200,50,30);
bullet.shapeColor="Blue";
speed=random(223,321);
weight=random(30,52);
bullet.velocityX=speed;
}
function draw() {
  background(0);  
  if(bullet.isTouching(wall)){
    bullet.velocityX=0
    deformation=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(deformation<10){
    bullet.shapeColor="green"
    }
    else {
      bullet.shapeColor="red"
    }
  
  }
  drawSprites();
}
