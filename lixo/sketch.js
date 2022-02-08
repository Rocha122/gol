const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bola
var lixod
var chao






function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	 
	Engine.run(engine);

//chao
chao = new ground(800,670,1600,20)
  




	// bola
	bola_options ={
		restitution:0.3,
		friction: 0,
		density: 1.2
	}
	
	bola = Bodies.circle(220,10,20, bola_options)
	World.add(world, bola)


//lixoD



lixod= new ground (1350,600,20,120)


//lixoE

lixoe= new ground (1110,600,20,120)







}










function draw() {

  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ellipseMode(RADIUS)
  ellipse(bola.position.x, bola.position.y, 20)
 
  chao.display()
  lixoe.display()
  lixod.display()

}

function keyPressed(){
	if (keyCode=== UP_ARROW) {
		Matter.Body.applyForce(bola, bola.position, {x:85,y:-85})
	}
	
}

