const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var ground;
var platform;
var backgroundImage;
var cLog,slingshot;
function preload(){

backgroundImage = loadImage("sprites/bg.png")

}

function setup(){
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,20)
    platform = new Ground(150,300,300,170)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70)
    box3 = new Box(700,240,70,70)
    box4 = new Box(900,240,70,70)
    box5 = new Box(810,160,70,70)

    pig1 = new Pig(810,350)
    pig2 = new Pig(810,220)

    log1 = new Log(810,260,300,PI/2) // radian = 180/2 = 90
    log2 = new Log(810,180,300,PI/2)
    log3 = new Log(760,120,150,PI/7)
    log4 = new Log(870,120,150,-PI/7)
    //cLog = new Log(300,200,80,PI/2);
    
    bird = new Bird(100,100)

slingshot = new Slingshot(bird.body,{x:200,y:100})

}

function draw(){

    background(backgroundImage);

    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    
    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();
    //cLog.display();

    bird.display();

   platform.display();

    ground.display() 
 slingshot.display();

}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly()
}