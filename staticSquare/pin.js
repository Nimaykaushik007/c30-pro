class Pin extends Baseclass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/pin.png");
    this.visiblity = 255;
  }

  display(){
    console.log(this.body.speed);
    if(this.body.speed<3.0){
      super.display();
    }
    else{
      World.remove(world,this.body);
      push();
      this.visiblity = this.visiblity-6;
      tint(255,this.visiblity);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
  }
}