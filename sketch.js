
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rope1,rope2,rope3,rope4,rope5,B1,B2,B3,B4,B5,r;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	B1= new Bob(50,600,40);
	B2= new Bob(350,600,40);
	B3= new Bob(600,600,40);
	B4= new Bob(800,600,40);
	B5= new Bob(900,600,40);
	r=new Roof(400,150,600,40);
	rope1= new Rope(B1.body,r.body,-70,0);
	rope2= new Rope(B2.body,r.body,-30,0);
	rope3= new Rope(B3.body,r.body,0,0);
	rope4= new Rope(B4.body,r.body,30,0);
	rope5= new Rope(B5.body,r.body,70,0);

	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  
  background(255);
  
  
 
r.display();
B1.display();
B2.display();
B3.display();
B4.display();
B5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

}

function keyPressed(){
if(keyCode===UP_ARROW)
Matter.Body.applyForce(B1.body,B1.body.position,{x:-50,y:-45})
}


