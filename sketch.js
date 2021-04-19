var GameState = "start";
var robber;

function setup() {
  createCanvas(displayWidth,displayHeight)
};

function draw() {
  background("lightblue");
  

  if(GameState==="start")
  {
    textSize(50);

fill("Black");

  text("Press Space to Play" ,displayWidth/2-250,displayHeight/2+100);

  if(keyDown("space"))
  {

    GameState = "play";
 }
  }
  
  if(GameState === "play")
  {
    robber = new robberCar();
    
    if(keyDown(LEFT_ARROW))
        {
          console.log("HI HI HIHIHIHIHIH");
          robber.x = robber.x-2;
        }

    drawSprites();
  }


}