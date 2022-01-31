class Boat{
    constructor(x,y,w,h,py){

        this.body = Bodies.rectangle(x,y,w,h);
        this.w = w;
        this.h = h;
        this.py = py;
        this.image = loadImage("assets/boat.png");
        World.add(world,this.body);
    }

    show(){
        var angle = this.body.angle;
        var pos = this.body.position;

        Matter.Body.setVelocity(boat.body,{
            x:-2,
            y:0
          });

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,this.py,this.w,this.h);
        pop();
    }
    

}