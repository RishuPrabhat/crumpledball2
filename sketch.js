
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(100,100);
	dustbin1 = new Dustbin(920,300)
  
	ground = new Ground(600,380,1200,20)
//	Engine.run(engine);
  
}


function draw() {
  background(255)

  Engine.update(engine)
  
  paper1.displayPaper();
  dustbin1.displaydustbin();
  
  ground.display();
  
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
  }
}














