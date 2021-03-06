class Particle{
    constructor(x,y){
        this.r=15;
        this.body=Bodies.circle(x,y,this.r,{isStatic:false,resitution:0.45,density:1});
        this.radius=this.r*2;
        World.add(world,this.body);
        this.color=rgb(random(10,255),random(10,255),random(10,255));
    }
    display(){
        push();
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop();
    }
    cut(){
        World.remove(world,this.object);
    }
}