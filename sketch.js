var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var redWall, redWall2, redWall3;
var redWallSprite, redWallSprite2, redWallSprite3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	redWallSprite = createSprite(width/2-(90),height-40,20,100);
	redWallSprite.shapeColor = "red";

	redWallSprite2 = createSprite(width/2,height-40,200,20);
	redWallSprite2.shapeColor = "red";

	redWallSprite3 = createSprite(width/2+(90),height-90,20,100);
	redWallSprite3.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);

	redWall = Bodies.rectangle(width/2-(90),height-90,20,100, {isStatic:true});
	World.add(world,redWall);

	redWall2 = Bodies.rectangle(width/2,height-50,200,20, {isStatic:true});
	World.add(world,redWall2);

	redWall3 = Bodies.rectangle(width/2+(90),height-90,20,100, {isStatic:true});
	World.add(world,redWall3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  redWallSprite.x = redWall.position.x;
  redWallSprite.y = redWall.position.y;

  redWallSprite2.x = redWall2.position.x;
  redWallSprite2.y = redWall2.position.y;

  redWallSprite3.x = redWall3.position.x;
  redWallSprite3.y = redWall3.position.y;


  //redWallSprite2.x = redWall.position.x;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Body.setStatic(packageBody,false);
  }
}



