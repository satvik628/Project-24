
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 
	dustbinBox1=new Box()
	
	
	

	ballBody = Bodies.circle(300 , 200 , 25 , {restitution:0.3});
	World.add(world, ballBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	console.log(ground)
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
 background("black");

 

  rectMode(CENTER);
  fill("yellow");
  rect(ground.position.x,ground.position.y,ground.width,ground.height)
  
  


  
  ellipseMode(RADIUS);
  fill("pink");
  ellipse(ballBody.position.x, ballBody.position.y, 20, 20);
 
  
  
 
}



