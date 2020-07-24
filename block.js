class Block{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true,density:1.5,resitution:0.25})
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("grey");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}