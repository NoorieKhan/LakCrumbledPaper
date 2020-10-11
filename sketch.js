
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

 
 var ground1,paperball,dustbin,dustbin1,dustbin2;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	ground1=new ground(400,680,850,20);

	dustbin=new useme(500,630,120,20,PI);
	dustbin1=new useme(550,630,120,20,PI/2);
	dustbin2=new useme(600,630,120,20,);
	
	paperball=new ball(200,635,20);
	Engine.run(engine);
  
}


function draw() {
  background("black");
 
  

  dustbin.display();
  dustbin1.display();
  dustbin.display();
  paperball.display();
  ground1.display();

 
  drawSprites();
 
}

function keyPressed (){
	if(keyCode===UP_ARROW){
	 Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:155});
	}
}



