const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ground;
var stand1;
var ball;

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
 
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
 
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  block17 = new Block(480,235,30,40);
  block18 = new Block(300,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block19 = new Block(330,195,30,40);
  block20 = new Block(300,195,30,40);
  block21  = new Block(450,195,30,40);
  block22 = new Block(480,195,30,40);
  //top
  block16 = new Block(390,155,30,40);
  block23 = new Block(360,155,30,40);
  block24 = new Block(300,155,30,40);
  block25 = new Block(420,155,30,40);
  block26 = new Block(450,155,30,40);
  block27 = new Block(330,155,30,40);
  block28 = new Block(480,155,30,40);

  
  

  
  //polygon with slings
  ball = Bodies.circle(50,200,60)
  World.add(world,ball)
  //creating slingShot
 rope = new Rope(ball,{x:100,y:0})
 


}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
 
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block17.display();
  block18.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  fill("grey");
  block16.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  

  fill("brown")
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,60,60);
 rope.display();



  
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}


  