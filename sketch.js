var gameState = 0;

function preload(){
  FriendsImage = loadImage("Friends.png")
  AngryImage = loadImage("Angry.png")
  ZombieImage = loadImage("Zombie.png")
  Next1Image = loadImage("Next1.png")
  Next2Image = loadImage("Next2.png")
  Next3Image = loadImage("Next3.png")
  PunchingImage = loadImage("Punching.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  Friends = createSprite(windowWidth/2, windowHeight/2)
  Friends.addImage(FriendsImage)
  Angry = createSprite(windowWidth/2, windowHeight/2)
  Angry.addImage(AngryImage)
  Zombie = createSprite(windowWidth/2, windowHeight/2)
  Zombie.addImage(ZombieImage)
  Next1 = createSprite (windowWidth/2-600, windowHeight/2+400)
  Next1.addImage(Next1Image)
  Next1.scale = 0.3
  Next2 = createSprite (windowWidth/2-100, windowHeight/2+400)
  Next2.addImage(Next2Image)
  Next3 = createSprite (windowWidth/2+400, windowHeight/2+400)
  Next3.addImage(Next3Image)
  Next1.scale = 0.3
  Punching = createSprite(windowWidth/2, windowHeight/2)
  Punching.scale = 0.35
    Punching.addImage(PunchingImage)
}

function draw() {
  background(238,9,33);  
  drawSprites();

  if (gameState===0){
  Friends.visible = true
  Next1.visible = true
  Angry.visible = false
  Zombie.visible = false
  Next2.visible = false
  Next3.visible = false
  Punching.visible = false

textSize(50)
fill("black")
text("HELP ME, THEY'RE GONNA GET ME!", windowWidth/2-370, 150)
textSize(30)
fill ("black")
text ("Click on next", windowWidth/2-170, 700)

if (mousePressedOver(Next1)){
  gameState = 1
  console.log("gameState = 1")
 
}
  }



  if(gameState === 1){
    console.log("gameState = 1 is working")
    Friends.visible = false
    Next1.visible = false
    Angry.visible = true
    Zombie.visible = false
    Next2.visible = true
    Next3.visible = false
    Punching.visible = false

textSize(50)
fill("black")
text("HEY! STOP THAT, LEAVE HIM ALONE!", windowWidth/2-370, 150)

if(mousePressedOver(Next2) ){
  gameState = 2
  console.log("gameState = 2")

  

}
  }

if (gameState ===2){
console.log("gameState = 2 is working")
  Friends.visible = false
  Next1.visible = false
  Angry.visible = false
  Zombie.visible = true
  Next2.visible = false
  Next3.visible = true
  Punching.visible = false
  textSize(50)
  fill("black")
  text("HAHAHHA, YOU'LL NEVER GET ME", windowWidth/2-370, 150)

  if (mousePressedOver(Next3)){
    gameState = 3
  }
}
if (gameState ===3){
  Friends.visible = false
  Next1.visible = false
  Angry.visible = false
  Zombie.visible = false
  Next2.visible = false
  Next3.visible = false
  Punching.visible = true
  textSize(40)
  fill("black")
  text("Punch more and score more!", windowWidth/2 - 300, 150)
}
}