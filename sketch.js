var gameState = 0;
var timer = 10;
var timer1 = 3;
var score = 0;
function preload(){
  FriendsImage = loadImage("Friends.png")
  AngryImage = loadImage("Angry.png")
  ZombieImage = loadImage("Zombie.png")
  Next1Image = loadImage("Next1.png")
  Next2Image = loadImage("Next2.png")
  Next3Image = loadImage("Next3.png")
  PunchingImage = loadImage("Punching.png")
  CheetahImage = loadImage("Cheetah.png")
  GiraffeImage = loadImage("Giraffe.png")
  TurtleImage = loadImage ("Turtle.png")
  SuperHumanImage = loadImage ("SuperHuman.png")
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
Cheetah = createSprite(150, 150)
Cheetah.addImage(CheetahImage)
Cheetah.scale = 0.5
Giraffe = createSprite(150, 150)
Giraffe.addImage(GiraffeImage)
Giraffe.scale = 0.5
Turtle = createSprite(150, 150)
Turtle.addImage(TurtleImage)
Turtle.scale = 0.5
SuperHuman = createSprite(150, 150)
SuperHuman.addImage(SuperHumanImage)
SuperHuman.scale = 0.7
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
  Cheetah.visible = false
  Turtle.visible = false
  Giraffe.visible = false
  SuperHuman.visible = false

textSize(50)
fill("black")
text("HELP ME, THEY'RE GONNA GET ME!", windowWidth/2-370, 150)
textSize(30)
fill ("black")
text ("Click on next", windowWidth/2-170, 700)

if (touches.length>0||mousePressedOver(Next1)){
  gameState = 1
  console.log("gameState = 1")
  touches = []
 
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
    Cheetah.visible = false
  Turtle.visible = false
  Giraffe.visible = false
  SuperHuman.visible = false

textSize(50)
fill("black")
text("HEY! STOP THAT, LEAVE HIM ALONE!", windowWidth/2-370, 150)

if(touches.length>0||mousePressedOver(Next2) ){
  gameState = 2
  console.log("gameState = 2")
touches = []
  

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
  Cheetah.visible = false
  Turtle.visible = false
  Giraffe.visible = false
  SuperHuman.visible = false
  textSize(50)
  fill("black")
  text("HAHAHHA, YOU'LL NEVER GET ME", windowWidth/2-370, 150)

  if (touches.length>0||mousePressedOver(Next3)){
    gameState = 3
    touches = []
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
  Cheetah.visible = false
  Turtle.visible = false
  Giraffe.visible = false
  SuperHuman.visible = false
  textSize(40)
  fill("black")
  text("Punch more and score more!", windowWidth/2 - 300, 150)
  text (timer1, windowWidth-100, 100)
  if (frameCount%30 === 0 && timer1>0){
    timer1--
    }
  if (timer1 === 0){
    gameState = 4
  }

}
if (gameState === 4){
  textSize(40)
  fill("black")
  text (timer, windowWidth-100, 100)
  if (frameCount%30 === 0 && timer>0){
    timer--
    }
  
    if (timer===0){
      textSize(80)
      textFont("Bold")
    text ("GAME OVER", windowWidth/2-200, 500)
   text (Math.round(score/3), windowWidth/2, windowHeight/2+300)
   
   gameState = 5
    }
  if (timer>0){
  if (touches.length>0||mousePressedOver (Punching)){
  score = score+1
  console.log(score)
  touches = []
  }
  }
}
if (gameState === 5){
  Friends.visible = false
  Next1.visible = false
  Angry.visible = false
  Zombie.visible = false
  Next2.visible = false
  Next3.visible = false
  Punching.visible = false
  Cheetah.visible = false
  Turtle.visible = false
  Giraffe.visible = false
  SuperHuman.visible = false

  //text (Math.round(score/3), windowWidth/2, windowHeight/2+300)
  textSize(40)
  textFont("Bold")
  fill("black")
  finalScore = Math.round(score/3)
  text (finalScore, windowWidth/2, windowHeight/2+300)
  text ("0-20 = You are a Turtle, don't feel bad about yourself and click more", windowWidth/2-700, windowHeight/2)
  text ("21-40, Ah! It's average just like a Giraffe, Kind of expected a little more from you.Get up and click more", windowWidth/2-700, windowHeight/2+50)
  text ("41-60, Woah! You're so fast! Just like a Cheetah", windowWidth/2-700, windowHeight/2+100)
  text("60-100, AHH, YOU'RE AS FAST AS A SUPERHUMAN, YOURE SO FAST, WE COULD BARELY KEEP UP", windowWidth/2-700, windowHeight/2+150)

  fill("Blue")
  if (finalScore>0 && finalScore<21){
    text ("You are a Turtle, don't feel bad about yourself and click more", windowWidth/2-200, windowHeight/2+250)
    Turtle.visible = true
  }
  
  if (finalScore>20 && finalScore<41){
 text ("Ah! It's average just like a Giraffe, Kind of expected a little more from you.Get up and click more", windowWidth/2-200, windowHeight/2+250)
 Giraffe.visible = true
  }

  if (finalScore>40 && finalScore<61){
    text ("Woah! You're so fast! Just like a Cheetah", windowWidth/2-200, windowHeight/2+250)
    Cheetah.visible = true
  }

  if (finalScore>60){
    text("AHH, YOU'RE AS FAST AS A SUPERHUMAN, YOURE SO FAST, WE COULD BARELY KEEP UP", windowWidth/2-200, windowHeight/2+250)
    SuperHuman.visible = true 
  }
  textSize(50)
  textFont("Bold")
  fill("green")
  text ("Thank you for playing! You have saved the boy and killed the ZOMBIE", 400, 200)
}
}