var paper, dustbin, dustbin1, dustbin2, ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinImg = "dustbingreen.png";

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	background(255);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,60);
	dustbin = new Dustbin(690,600,50,10,/*dustbinImg*/);
	dustbin1 = new Dustbin(750,550,50,10);
	dustbin2 = new Dustbin(630,550,50,10);
	ground = new Dustbin(400,650,1000,30);

	Engine.run(engine);
  
}


function draw() {
  background(0);

	paper.display();
	dustbin.display();
	dustbin1.display();
	dustbin2.display();

  drawSprites();
 
}

function keyPressed () {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:410,y:-320});
	}
}

