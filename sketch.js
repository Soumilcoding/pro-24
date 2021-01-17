
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var crumpledpaper, ret1,ret2,ret3 

function preload()
{

	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

ret1 = new Dustbin(200,200,10,100);
ret2 = new Dustbin(200,100,100,10);
ret3 = new Dustbin(100,200,100,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");

  ret1.display();
  ret2.display();
  ret3.display();


  drawSprites();
}





