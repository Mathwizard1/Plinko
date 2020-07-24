class Plinko{
    constructor(x,y,r){
        this.body=Bodies.circle(x,y,r,{isStatic:true});
        this.radius=r*2;
        World.add(world,this.body);
    }
    display(){
        ellipseMode(CENTER);
        fill("white");
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}