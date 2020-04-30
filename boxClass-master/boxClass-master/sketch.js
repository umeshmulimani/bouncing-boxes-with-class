const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3;
var ground1;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(280,250,20,60);
    box3 = new Box(300,150,40,70);
    ground1 = new ground(200,380,400,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
   box3.display();
   ground1.display();
}