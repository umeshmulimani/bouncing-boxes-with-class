class ground{
  constructor(x,y,width,height){

    var ground_options = {
        isStatic: true,
    }
    this.body = Bodies.rectangle(x,y,width,height,ground_options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
  }
//function
display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x,pos.y,this.width,this.height);
}

}