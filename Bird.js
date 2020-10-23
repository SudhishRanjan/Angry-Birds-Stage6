class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage=loadImage("sprites/smoke.png")
    this.tregecterry=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.position.x>200 && this.body.velocity.x>10){
      var position = [this.body.position.x,this.body.position.y]
      this.tregecterry.push(position)
    }
    for(var i = 0;i<this.tregecterry.length;i++){
      image(this.smokeImage,this.tregecterry[i][0],this.tregecterry[i][1])
    }
    super.display();
  }
}
