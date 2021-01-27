class Block{
  constructor(x, y, width, height) {
      var options = {
          isStatic: false,
          'restitution':1,
          'friction':1,
          'density':0.5, 
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 255
      // this.image = loadImage("sprites/polygon.png");
      World.add(world, this.body);
    }
    score(){
      if(this.visibility < 0 && this.visibility >- 105){
        score++;
      }
    }
    display(){
      if(this.body.speed< 8){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        fill("blue");
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }else{
        push();
        World.remove(world, this.body);
        this.visibility = this.visibility-5;
        tint(255, this.visibility);
        //  
        console.log(this.body.speed);
        // image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        pop();
      }
      // var angle = this.body.angle;
      // var pos = this.body.position;
      // push();
      // fill("blue");
      // translate(pos.x, pos.y);
      // rotate(angle);
      // rectMode(CENTER);
      // rect(0, 0, this.width, this.height);
      // pop();
    }
}