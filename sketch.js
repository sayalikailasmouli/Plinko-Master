const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particle;
var turn = 0;
var count = 0;
var gamestate = "play";
var particles = [];
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var back

function preload(){
  back=loadImage("download.png")

}

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }  
}
function draw() {
  background(back);
  Engine.update(engine);
  fill("red");
 text("Score : "+count,10,40);
 textSize(30);
 text("500",15,550);
 text("500",95,550);
 text("500",175,550);
 text("500",255,550);
 text("100",335,550);
 text("100",415,550);
 text("100",495,550);
 text("200",575,550);
 text("200",655,550);
 text("200",735,550);
 line(0,490,900, 490);

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===12){
    //particles.push(new Particle(random(width/2-100, width/2+100), 10,10));
  //}

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  
   for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
    if (gamestate==="end") {
      textSize(60);
      text("Game Over",300,350)
    }
  }
  if (particle!=null) {
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<300){
        count = count+500;
        particle = null;
        if (turn>=5) {
          gamestate = "end";
        }
       }
    } 
  } 
  if (particle!=null) {
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<600 && particle.body.position.x >301){
        count = count+100;
        particle = null;
        if (turn>=5) {
          gamestate = "end";
        }
       }
    } 
  } 
  if (particle!=null) {
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<900 && particle.body.position.x >601){
        count = count+200;
        particle = null;
        if (turn>=5) {
          gamestate = "end";
        }
       }
    } 
  } 
}
function mousePressed(){
  if (gamestate!=="end") {
    turn++;
    particle = new Particle(mouseX,10,10,10);
    
  } 
  
}