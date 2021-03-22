
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var chain1,chain2,chain3,chain4,chain5,chain6;
var roof;
var ball1,ball2,ball3,ball4,ball5,ball6;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here. What has happened ?
	roof  = new Ground (460,200,150,20);
	

	ball1 = new Paper  (400,400,25);
	ball2 = new Paper  (425,400,25);
	ball3 = new Paper  (450,400,25);
	ball4 = new Paper  (475,400,25);
	ball5 = new Paper  (500,400,25);
	ball6 = new Paper  (525,400,25);

	chain1 = new Chain  (ball1.body,{x:400,y:200});
	chain2 = new Chain  (ball2.body,{x:425,y:200});
	chain3 = new Chain  (ball3.body,{x:450,y:200});
	chain4 = new Chain  (ball4.body,{x:475,y:200});
	chain5 = new Chain  (ball5.body,{x:500,y:200});
	chain6 = new Chain  (ball6.body,{x:525,y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
	

	roof.display();

	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();
	ball6.display();

	chain1.display();	
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();
	chain6.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		console.log("hello");
		
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-5,y:-5	});
	}
}

