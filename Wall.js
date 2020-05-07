class Wall{

constructor(thickness){
this.x = 1300
this.y = 200
this.thickness = thickness
thickness = random(22,83)
this.sprite = createSprite(this.x,this.y,this.thickness,this.thickness*2)
this.sprite.shapeColor = color(80,80,80)
    
}

}