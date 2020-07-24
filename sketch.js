const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground,control,type=1;
var state;
var plinko=[];
var ball=[];
var division=[];

function preload(){ 
}

function setup() {
  createCanvas(600,725);
  control=new Buttons();

	engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  game();
  ground =new Block(width/2,height-10,width,20);
  for(var b=0;b<2;b++){
    new Block(b*width,height/2,10,height);
  }
}

function draw() {
  background(0,0,0);
  show();
  if(type==1){
  done();}
  control.display();
  ground.display();
  drawSprites();
}

function game(){
  {
    for(var i=0;i<=8;i+=1){
      division.push(new Block(i*74+5,height-135,10,240));
    }
    for(var y=1;y<5;y++){
      var s,z;
      if(y%2==0){s=1;z=-20;}else{s=0;z=-60;}
        for(var x=1;x+s<9;x++){
        plinko.push(new Plinko(x*80+z,y*(50-10/y)+230,12.5+y/2));
        }
    }
  }
}
function show(){
  for(var k=0;k<division.length;k++){
    division[k].display();
  }
  for(var k=0;k<plinko.length;k++){
    plinko[k].display();
  }
  for(var k=0;k<ball.length;k++){
    ball[k].display();
  }
 
  textSize(20);
  if(type==0){
  text("Press Space for random chip",170,125);
  }else{text("Computer",250,125);}

  for(var y1=100;y1<260;y1+=150){
    for(var x1=0;x1<=width;x1+=75){
      fill(rgb(255,255,255));
      rect(x1,y1,0,2.5);
    }
  }
}

function done(){
  if(frameCount%60==0){
    ball.push(new Particle(random(10,590),random(100,230)));
    //console.log(ball.length);
  }
}
function keyPressed(){
  if(type==0){
  if(keyCode===32){
    ball.push(new Particle(random(15,585),random(100,230)));
    //console.log(ball.length);
  }
  }
}