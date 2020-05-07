

var speed;
var bulletWeight;
 var bulletSpeed;
var thicknessofWall;
function setup() {
  createCanvas(1600,400);
  bulletWeight = random(30,52);
  thicknessofWall = random(22,83);
 bullet = createSprite(50,200,50,5);
 wall = createSprite(1200,200,thicknessofWall,height/2)
 speed = random(223,321)
 bullet.velocityX = speed;
 bullet.shapeColor = color(255)
 wall.shapeColor = color(230,230,230)
}

function draw() {
  background("black");
  
  if (hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var dam = 0.5*bulletWeight*speed*speed/(thicknessofWall * thicknessofWall*thicknessofWall);
    
    if (dam<10){
      wall.shapeColor = color(0,255,0)
        }
    if (dam>10){
          wall.shapeColor = color(255,0,0)
            }
   
  }
 drawSprites();
 }
function hasCollided(Ibullet,Iwall){
bulletRightEdge = Ibullet.x+Ibullet.width;
wallLeftEdge = Iwall.x;
if (bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}