const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, hero, monster;
var backgroundImg, rope;
var block1, block2, block3, block4, block5, block6, block7, block8;

function preload() {
  backgroundImg = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(2600, 1500);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(450, 700, 1300, 20);


  hero = new Hero(100, 700, 100);

  rope = new Rope(hero.body, { x: 300, y: 500 });

  monster = new Monster(1100, 600, 100)

  block1 = new Block(700, 400, 40, 40);
  block2 = new Block(700, 440, 40, 40);
  block3 = new Block(700, 480, 40, 40);
  block4 = new Block(700, 520, 40, 40);
  block5 = new Block(700, 560, 40, 40);
  block6 = new Block(700, 600, 40, 40);
  block7 = new Block(700, 640, 40, 40);
  block8 = new Block(700, 680, 40, 40);

  Engine.run(engine);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  ground.display();
  
  hero.display();
  
  rope.display();

  monster.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  rope.fly();
}