const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1, box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground= new Ground(200,390,400,20);
    //console.log(ground);

    box1 = new Box(200,100,60,50);
    console.log(box1);

    box2 = new Box(220,300,50,80);
    
}

function draw(){
    background(0);
    Engine.update(engine);
   
    ground.display();
    box1.display();
    box2.display();
   
}