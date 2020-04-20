const Engine = Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;

var raindrops;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world

  raindrops = new Raindrops(200,200,50,50);
}

function draw() {
  background(0);  
  Engine.update(engine);
  console.log(raindrops);

  raindrops.display();

  drawSprites();
}