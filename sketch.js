var gameState = 0;

function preload(){
  FriendsImage = loadImage("Friends.png")
  AngryImage = loadImage("Angry.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  Friends = createSprite(windowWidth/2, windowHeight/2,)
  Angry = createSprite(windowWidth/2, windowHeight/2,)
}

function draw() {
  background(238,9,33);  
  drawSprites();

  if (gameState===0){
Friends.addImage(FriendsImage)
textSize(50)
fill("black")
text("HELP ME, THEY'RE GONNA GET ME!", windowWidth/2-370, 150)
//Angry.hide()
  }

  if (mousePressedOver(Friends)){
    gameState = 1
  }

  if(gameState === 1){
Angry.addImage(AngryImage)
textSize(50)
fill("black")
text("HEY! STOP THAT, LEAVE HIM ALONE!", windowWidth/2-370, 150)
//Friends.hide()
  }
}