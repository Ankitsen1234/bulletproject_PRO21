class Bullet{
constructor(x,y,weight,speed){
this.sprite = createSprite(200,200,this.weight,this.speed)
this.weight = weight
this.speed = speed
speed = random(223,321)
weight = random(30,52)
this.sprite.shapeColor = "white"

}


}