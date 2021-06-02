var canvas;
var gameState=0;
var form,game;
var astroJet,astroJetIMG;
var xp,xpIMG,xpGroup;
var meteor,meteorIMG,meteorGroup;
var alien,ufo,boss,fireBall,fireBallIMG,fireBall2IMG;
var alienGroup,ufoGroup,fireBallGroup2,fireBall2;
var alienIMG,ufoIMG,bossIMG;
var bg,bg2,backgroundIMG;
var out,outIMG;
var missile,missileIMG,missileGroup;
var startButton,startButtonIMG;
var helth1,helth2,helth1IMG,helth2IMG;
var title,titleIMG,info,infoIMG;
var laser1,laser1IMG,laser1Group;
var audio,audioLoad;
var score = 0;
var xp1 = 0;

function preload(){
  backgroundIMG = loadImage("images/galex.jpg");
  alienIMG = loadImage("images/alien.png");
  astroJetIMG = loadImage("images/jet.png");
  ufoIMG = loadImage("images/UFO.png");
  startButtonIMG = loadImage("images/button.png");
  outIMG = loadImage("images/outlook.png");
  fireBallIMG = loadImage("images/fireBall.png");
  fireBall2IMG = loadImage("images/laser.png");
  bossIMG = loadImage("images/boss.png");
  xpIMG = loadImage("images/point.png");
  meteorIMG = loadImage("images/meteor.png");
  helth1IMG = loadImage("images/helth1.png");
  helth2IMG = loadImage("images/helth2.png");
  titleIMG = loadImage("images/title.png");
  infoIMG = loadImage("images/info.png");
  missileIMG = loadImage("images/missile.png");
  laser1IMG = loadImage("images/laser 1.png");
  audioLoad = loadAudio("12-Gauge-Pump-Action-Shotgun-Close-Gunshot-A-www.fesliyanstudios.com");

}

function setup() {
  createCanvas(400,625);
  game = new Game();
  game.start();
  game.setLevel1();

  fireBallGroup=createGroup();
  alienGroup=createGroup();
  xpGroup=createGroup();
  meteorGroup=createGroup();
  ufoGroup=createGroup();
  missileGroup=createGroup();
  laser1Group=createGroup();
  
}

function draw() {
  background(0);
  drawSprites();

  fill("gold");
        textSize(13);
        text("score :"+score,310,25);
        textSize(12);
        text("XP :"+xp1,310,40);
        textSize(15);
        text("--------------------------------------------------------------------------------------",1,70);       
  


        astroJet.x = mouseX;
       
            
  if(gameState === 0){
      fill("gold")
      textSize(15);
      text("PLAY",182,300); 
      textSize(15);
      text("--------------------------------------------------------------------------------------",1,130);       

    if(mousePressedOver(startButton)){
      gameState = 1;
      bg.visible=false;
      startButton.visible = false;

    }
    if(mousePressedOver(info)){
      textSize(15);
      text("Level 1 : Instructions \n1. Use mouse To move\n2. Destroy aliens to proceed further",100,250);
    }
  }

  if(gameState === 1){
    game.playLevel1();
    spawnMeteor();
  }
  if(gameState === 2){
    game.playLevel2();
    spawnMeteor();
  }
     
      
}

function spawnMeteor(){
  if (frameCount % 30=== 0) {
    var meteor = createSprite(100,70,50,50);
    meteor.x = Math.round(random(50,350));
    meteor.addImage(meteorIMG);
    meteor.scale = 0.1;
    meteor.velocityY = 8;
    meteor.lifetime = 200;
    meteorGroup.add(meteor);
  }
  
}

 
  


