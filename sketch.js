var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudGroup, cloudImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  groundImage = loadImage("ground2.png")
  cloudImage = loadImage("cloud.png");
}

function setup() {
  createCanvas(600, 200);
  
  //create a trex sprite
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
  
  // creating invisible ground
  

  invisibleGround = createSprite(200,190,400,20);
  invisibleGround.visible = false;

  //create ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
}

function draw() {
  background(180);
  
  ground.velocityX = -5;
  
  if (ground.x<0){
    ground.x = ground.width/2;
  }
  
  //jumping the trex on space key press
  if(keyDown("space")&& trex.y > 155) {
    trex.velocityY = -12;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  spawnclouds();

 //stop trex from falling down 
  trex.collide(invisibleGround);
  drawSprites();
}

 function spawnclouds(){
  if(frameCount% 80 == 0){
   cloud = createSprite(600,10);
   cloud.addImage("cloud", cloudImage);
   cloud.scale = 0.5;
   cloud.velocityX = -4;
   trex.depth = cloud.depth +1;

   cloud.y = Math.round(random(60,100));
  }
 }