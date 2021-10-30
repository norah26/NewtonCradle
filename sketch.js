const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;
var rope1,rope2,rope3,rope4,rope5
var ground1,ground2

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	
    ground1 = new g1(800,height,1600,20);
    ground2 = new g1(800,300,400,20);
   
    ball1   = new b1(800,500,20)
    ball2   = new b1(850,300,20)
    ball3   = new b1(900,300,20)
    ball4   = new b1(750,300,20)
    ball5   = new b1(700,300,20)

    rope1   = new  SlingShot(ball1.body,{x:800, y:300})
    rope2   = new  SlingShot(ball2.body,{x:850, y:300})
    rope3   = new  SlingShot(ball3.body,{x:900, y:300})
    rope4   = new  SlingShot(ball4.body,{x:750, y:300})
    rope5   = new  SlingShot(ball5.body,{x:700, y:300})
}
  



function draw() {
  rectMode(CENTER);
  background("blue");
 Engine.update(engine)


  ground1.display();
  ground2.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  
}


function mouseDragged(){
    Matter.Body.setPosition(ball3.body, {x: mouseX , y: mouseY});
}




  	
