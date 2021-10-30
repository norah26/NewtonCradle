class b1 {
    constructor(x,y,r) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,r,options);
      this.radius = r;
 
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      ellipseMode(RADIUS);
      fill("pink");
      ellipse(pos.x, pos.y, this.radius,this.radius);
      pop()
    }
  };