var path,boy,cash,diamonds,jwellery,sword,economy;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg,economyImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup,economyGroup;
var votesGained = 0;


//Game States
var PLAY=1;

var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  economyImg = loadImage("economy.png");
   
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
// Moving background
path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 20;
//creating boy running
boy = createSprite(width/2,height-20,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
economyGroup = new Group();
 

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
    
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/1000;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();
    createEconomy();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
      
     
      
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection= treasureCollection + 150;
    }else if(economyGroup.isTouching(boy)) {
      economyGroup.destroyEach();
      treasureCollection= treasureCollection + 200;
      
    }else{
      if(swordGroup.isTouching(boy)) {
        votesGained=votesGained + 100;
								treasureCollection=treasureCollection-100;
                
     
                
                
							
        
       
        
        cashG.destroyEach();
        diamondsG.destroyEach();
        jwelleryG.destroyEach();
        swordGroup.destroyEach();
        economyGroup.destroyEach();
        
        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        jwelleryG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
        economyGroup.setVelocityYEach(0);
     
    }
  }

  
  drawSprites();
  textSize(20);
  stroke("black");
  fill("cyan");
  text("Votes lost: "+ treasureCollection,width-150,30);
		text("Road To Parliament",50,30);
		text("Votes Gained:"+ votesGained,800,30);
    text("FUN FACT:Manmohan Singh is the Worlds most qualified Prime Minister", 20,90);
    text("Touch Economy downfall and terrorism and pollution and corruption to lose votes",20,130)
    text("Move Your Fingers Fast touch the two shaking hands to increase votes in your favour",20,160);
    text ("BEST OF LUCK WE HOPE YOU WIN THE ELECTION",20,190);
    
  }

}

function createCash() {
  if (World.frameCount % 120 == 0) {
  var cash = createSprite(Math.round(random(50, width-100),150, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.05;
  cash.velocityY = 10;
  cash.lifetime = 200;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 150 == 0) {
  var diamonds = createSprite(Math.round(random(50, width-150),200, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.05;
  diamonds.velocityY = 35;
  diamonds.lifetime = 200;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 180 == 0) {
  var jwellery = createSprite(Math.round(random(5, width-50),240, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.05;
  jwellery.velocityY = 40;
  jwellery.lifetime = 200;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 200 == 0) {
  var sword = createSprite(Math.round(random(10, width-200),100, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 45;
  sword.lifetime = 200;
  swordGroup.add(sword);
  }
}

function createEconomy(){
if(World.frameCount % 100 == 0){
  var economy = createSprite(Math.round(random(10,width-130),110,10,10));
  economy.addImage(economyImg);
  economy.velocityY = 30;
  economy.lifetime = 200;
  economy.scale = 0.1;
  economyGroup.add(economy);
}
}