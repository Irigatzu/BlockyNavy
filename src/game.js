
const canvas = document.getElementById("gameScreen");
const ctx = canvas.getContext("2d");
var playerImage=document.getElementById("img_boat");

var enemyImage=document.getElementById("enemy_boat");
var ballImage=document.getElementById("ballImage");
ctx.fillStyle = "aquamarine";
ctx.fillRect(0, 0, 600, 600);
const GAME_WIDTH = 600;
const GAME_HEIGTH = 600;

var gameState ="PLAY";
var level="1";
        
 const realPlayer = new Player(100, 200,playerImage );
 const enemyPlayer =new Player(300,200,enemyImage);
var playerBall=new Ball(realPlayer);
        
        
var lastTime = 0;
function colision(ball,player,healthbar){
    if(ball.getPositionX() < player.getPositionX() + 80 &&
   ball.getPositionX() + 10 > player.getPositionX() &&
   ball.getPositionY() < player.getPositionY() + 80 &&
   ball.getPositionY() + 10 > player.getPositionY()){
        ball.reset();
        hit(healthbar);
    }
}
    

 if(level=="1"){
          enemyHealthBar.updateHealth(90);
          
   }
function gameLoop(timestamp) {
console.log(level);
   if(level=="1"){
  
    if(gameState=="PLAY"){
      var deltaTime = timestamp - lastTime;
      lastTime = timestamp;
      ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGTH);
      realPlayer.update(deltaTime);
      realPlayer.draw(ctx);
     enemyPlayer.update(deltaTime);
     enemyPlayer.draw(ctx);
     
     
     playerBall.update(deltaTime);
     playerBall.draw(ctx);
     colision(playerBall,enemyPlayer,enemyHealthBar);
      requestAnimationFrame(gameLoop);
      
      if(enemyHealthBar.health==0){
        alert("Level Completed");
            level="2";
      }else if (playerHealthBar.health==0){
      
      }
     
      
      }
      else{ 
      realPlayer.restart(realPlayer,100,200);
      enemyPlayer.restart(enemyPlayer,300,200);
      playerBall.reset(realPlayer);
 

      gameState="PLAY";
      return;
      }
    }
    if(level=="2"){
  
    if(gameState=="PLAY"){
     realPlayer.restart(realPlayer,100,200);
      enemyPlayer.restart(enemyPlayer,300,200);
      playerBall.reset(realPlayer);
      playerHealthBar.reset();
      enemyHealthBar.reset();
      var deltaTime = timestamp - lastTime;
      lastTime = timestamp;
      ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGTH);
      realPlayer.update(deltaTime);
      realPlayer.draw(ctx);
     enemyPlayer.update(deltaTime);
     enemyPlayer.draw(ctx);
     
     
     playerBall.update(deltaTime);
     playerBall.draw(ctx);
     colision(playerBall,enemyPlayer,enemyHealthBar);
      requestAnimationFrame(gameLoop);
      
      if(enemyHealthBar.health==0){
        alert("Level Completed");
            level="3";
      }else if (playerHealthBar.health==0){
      
      }
     
      
      }
      else{ 
      realPlayer.restart(realPlayer,100,200);
      enemyPlayer.restart(enemyPlayer,300,200);
      playerBall.reset(realPlayer);
      playerHealthBar.reset();
      enemyHealthBar.reset();

      gameState="PLAY";
      return;
      }
      
    }

    
}
console.log(enemyPlayer);





      gameLoop();
