const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var i, j, k;

function setup() {
  createCanvas(500,800);
  engine=Engine.create();
  world=engine.world;

  ground = new Ground(240,790,480,20);
  for(k=0; k<=480; k=k+80)
  {
    divisions.push(new Divisions(k, 800-divisionHeight/2, 10, divisionHeight));
  }
  
  for(j=40; j<=480; j=j+50)
  {
    plinkos.push(new Plinko(j, 75));
  }
  for(j=15; j<=470; j=j+50)
  {
    plinkos.push(new Plinko(j, 175));
  }
  for(j=40; j<=480; j=j+50)
  {
    plinkos.push(new Plinko(j, 275));
  }
  for(j=15; j<=470; j=j+50)
  {
    plinkos.push(new Plinko(j, 375));
  }
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  
  for(i=0; i<divisions.length; i++)
  {
    divisions[i].display();
  }
  for(i=0; i<plinkos.length; i++)
  {
    plinkos[i].display();
  }
  if(frameCount%50==0)
  {
    particles.push(new Particle(random(50, 450), 10, 10));
  }
  for(k=0; k<particles.length; k++)
  {
    particles[k].display();
  }
}