
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new bob (230,550,85);
	bobObject2 = new bob (315,550,85);
	bobObject3 = new bob (400,550,85);
	bobObject4 = new bob (485,550,85);
	bobObject5 = new bob (570,550,85);
	roofObject = new roof (400,100,500,50);
	bobDiameter = 85
	//connection1 = roofObject.body-170
	rope1=new rope(bobObject1.body, roofObject.body,-bobDiameter*2, 0)
	rope2=new rope(bobObject2.body, roofObject.body,-bobDiameter, 0)
	rope3=new rope(bobObject3.body, roofObject.body,0, 0)
	rope4=new rope(bobObject4.body, roofObject.body,bobDiameter, 0)
	rope5=new rope(bobObject5.body, roofObject.body,bobDiameter*2, 0)
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,130,130);
  Engine.update(engine);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-400,y:400});
	   console.log(bobObject1.body)
	 }
   }



