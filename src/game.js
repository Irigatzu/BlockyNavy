
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
        
 const realPlayer = new Player(200, 200,playerImage );
 const enemyPlayer =new Player(300,200,enemyImage);
var playerBall=new Ball(realPlayer);
        
        
var lastTime = 0;
function colision(ball,player,healthbar){
    if(ball.getPositionX()==player.getPositionX()&&ball.getPositionY()==player.getPositionY()){
        ball.reset();
        hit(healthbar);
    }
}

function gameLoop(timestamp) {
   if(level=="1"){
    if(gameState=="PLAY"){
      var deltaTime = timestamp - lastTime;
      lastTime = timestamp;
      ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGTH);
      realPlayer.update(deltaTime);
      realPlayer.draw(ctx);
     enemyPlayer.update(deltaTime);
     enemyPlayer.draw(ctx);
     enemyPlayer.move(0,20);
     playerBall.update(deltaTime);
     playerBall.draw(ctx);
     colision(playerBall,enemyPlayer,enemyHealthBar);
      requestAnimationFrame(gameLoop);
      console.log(enemyHealthBar.health);
      
      }
      else{ 
      realPlayer.restart(realPlayer,200,200);
      enemyPlayer.restart(enemyPlayer,400,200);

      gameState="PLAY";
      return;
      }
    }
}





      gameLoop();
