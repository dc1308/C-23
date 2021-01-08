class Box{
  constructor(x, y, w,h){

    var options = {
        restitution : 0.3
    }

    this.body = Bodies.rectangle(x, y, w,h, options);
    this.w = w;
    this.h = h;
    World.add(world ,this.body );
  }  

  display(){
    var pos = this.body.position;
   // console.log(pos);
    push(); 
    translate(pos.x, pos.y);
    rotate(this.body.angle * 5);
    rectMode(CENTER);
    rect(0,0, this.w , this.h);
    pop();
  }
}