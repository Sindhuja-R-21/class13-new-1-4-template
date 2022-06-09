var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud,cloudImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png"); 
  groundImage = loadImage("ground2.png");
   
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;



 
}


function draw() {
  //set background color
  background("pink");

  //var a=Math.round(random(1,100))
 // console.log(a)
 console.log(frameCount)
  

  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 150) {
    trex.velocityY = -10;
  }
  
  //adding gravity
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);

  //calling SpawnClouds Function
  spawnClouds();
  
  drawSprites();
  
}

//Creating / Defining a function
//Calling a function
function spawnClouds(){
 
  //only in the multiples of 60
  if(frameCount%60===0){ 
    var cloud=createSprite(600,100,40,10);
    cloud.velocityX=-4;
  }


}

