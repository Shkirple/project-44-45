var boy, boyRun, girl, girlRunning
var invisibleGround
var cloud, tcloud, cloudImg,tcloudImg ,cloudsGroup
var bird, birdImg, birdsGroup
var score;
 var obstaclesGroup


function preload(){
   boyRun= loadAnimation("boy.png");
  backgroundImg = loadImage("bg4.jpg")
  cloudImg = loadImage("cloud.jpg")
  birdImg = loadImage("bird.jpg")
  tcloudImg = loadImage("tcloud.jpg")
  girlRunning = loadAnimation("girl2.jpg")
  stone = loadImage("stone.png")
  block=loadImage("roadblock.jpg")
    
}

function setup() {

  createCanvas(windowWidth,windowHeight)
  
  
  boy = createSprite(100,160,20,50);
  boy.addAnimation("Run", boyRun);
  boy.scale = 0.2;

  girl2 = createSprite(80, 160, 20, 50)
  girl2.addAnimation("Running", girlRunning)
  girl2.scale = 0.04

  ground = createSprite(200,180,400,20);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  ground.visible = false

  invisibleGround = createSprite(200,600,400,10);
  invisibleGround.visible = false;
  
  var rand =  Math.round(random(1,100))
  console.log(rand)

  obstaclesGroup = createGroup()
  cloudsGroup = createGroup()
  birdsGroup = createGroup()

  

}

function draw() {
  background(backgroundImg);
  background.x = background.width/2
  background.velocityX = -6
  
  console.log(boy.y)
      
 if(keyDown("UP_ARROW")&& boy.y >= 100) {
    boy.velocityY = -10;
  }

  if(keyDown("DOWN_ARROW")&& boy.y>=100){
    boy.velocityY = 20
  }

  if(keyDown("RIGHT_ARROW")&& girl2.y >= 100) {
    girl2.velocityY = -10;
  }
  
  boy.velocityY = boy.velocityY + 0.8
  girl2.velocityY = girl2.velocityY +0.8
  
  
  boy.collide(invisibleGround);
  girl2.collide(invisibleGround)
  
  birdAppear()
  cloudsAppear()
  tcloudsAppear()
  obstaclesAppear()
  
  drawSprites();
}


function cloudsAppear(){
  if(frameCount%150===0){
 var cloud = createSprite(1500, Math.round(random(50,150)), 40, 10)
 cloud.velocityX = -4
 cloud.addImage(cloudImg)
 cloud.scale=.5
 cloud.depth=boy.depth
 cloud.depth = girl2.depth
 girl2.depth+=1
 boy.depth+=1
 cloudsGroup.add(cloud);
  }
  
}

function tcloudsAppear(){
  if(frameCount% Math.round(random(180,250))===0){
 var tcloud = createSprite(1500, Math.round(random(50,150)), 40, 10)
 tcloud.velocityX = -4
 tcloud.addImage(tcloudImg)
 tcloud.scale=1.5
 tcloud.depth=boy.depth
 tcloud.depth = girl2.depth
 girl2.depth+=1
 boy.depth+=1
 cloudsGroup.add(tcloud);



  }}

function obstaclesAppear(){
  if (frameCount % Math.round(random(50,120)) === 0){
    var obstacle = createSprite(1500,600,10,40);
    obstacle.velocityX = -6;
    obstacle.lifetime = 300;  
    obstacle.scale = 0.2
    obstaclesGroup.add(obstacle);
  
   var r = Math.round(random(1,2))
  switch(r){
    case 1: obstacle.addImage(stone)
    break
    case 2: obstacle.addImage(block)
    break
  }




}
  }

  function birdAppear(){
    if(frameCount% Math.round(random(30, 180))===0){
      var bird = createSprite(1500, Math.round(random(windowHeight/2, windowHeight-250)), 50, 50)
      bird.addImage(birdImg)
      bird.velocityX = -20
      bird.lifetime = 300
      bird.scale = 0.1
      birdsGroup.add(bird)
    }
  
  
  }
