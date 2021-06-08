
const canvas = document.getElementById("gameScreen");
const ctx = canvas.getContext("2d");
var playerImage=document.getElementById("img_boat");

var enemyImage=document.getElementById("enemy_boat");
var ballImage=document.getElementById("ballImage");
ctx.fillStyle = "aquamarine";
ctx.fillRect(0, 0, 600, 600);
const GAME_WIDTH = 600;
const GAME_HEIGTH = 600;

var gameState ="";
var level=1;

var s;

        
const realPlayer = new Player(100, 200,playerImage );
const enemyPlayer =new Player(300,200,enemyImage);
var playerBall=new Ball(realPlayer);
var enemyBall=new Ball(enemyPlayer);
        
        
var lastTime = 0;
function colision(ball,player,healthbar){
    if(ball.getPositionX() < player.getPositionX() + 80 &&
       ball.getPositionX() + 10 > player.getPositionX() &&
       ball.getPositionY() < player.getPositionY() + 80 &&
       ball.getPositionY() + 10 > player.getPositionY()){
       if(ball.reps>1){
       ball.reshoot();
       hit(healthbar);
       }else{
           ball.reset();
           hit(healthbar);
       }
    }
}


    
if(level==1){
    enemyHealthBar.updateHealth(90);
}
 
   gameLoop();
function gameLoop(timestamp) {


   if(level==1){
   
  
    
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
        if(gameState=="PLAY"){
        
       console.log(playerBall.reps);
        
        
            
        }
     
      
      if(enemyHealthBar.health==0){
            alert("Level 1 Completed");
                level=2;
                gameState="STOP";
            }
     
      
      
          if (gameState=="STOP"){ 
              realPlayer.restart(realPlayer,100,200);
              
              playerBall.reset(realPlayer);
              }
    }
    if (level==2){
        
        var deltaTime = timestamp - lastTime;
        lastTime = timestamp;
        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGTH);
        realPlayer.update(deltaTime);
        realPlayer.draw(ctx);
        enemyPlayer.update(deltaTime);
        enemyPlayer.draw(ctx);
        playerBall.update(deltaTime);
        playerBall.draw(ctx);
        colision(playerBall,enemyPlayer,playerHealthBar);
        requestAnimationFrame(gameLoop);
              if(gameState=="PLAY"){
              enemyPlayer.move(180,300);
             var d= new Date();
              var s=d.getSeconds();

              
              if(s%2==0){
                    enemyHealthBar.updateHealth(0.5);
              }
              if(enemyHealthBar.health==0){
                    alert("Level 2 Completed")
                    level=3;
                    gameState="STOP";
              }
              
             

              

                }
            if(gameState=="STOP"){
            realPlayer.restart(realPlayer,100,200);
            enemyPlayer.restart(enemyPlayer,300,200);
            playerBall.reset(realPlayer);
            enemyHealthBar.reset();
            playerHealthBar.reset();
            }
        }
    if(level==3){
   
  
    
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
            alert("Level 3 Completed");
                level=4;
                gameState="STOP";
            }
     
      
      
          if (gameState=="STOP"){ 
              realPlayer.restart(realPlayer,100,200);
              enemyPlayer.restart(enemyPlayer,300,200);
              playerBall.reset(realPlayer);
              
              }
    }

    if(level==4){
     
      
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
      if(gameState=="PLAY"){
          enemyPlayer.move(0,100);
          }
      
      if(enemyHealthBar.health==0){
        alert("Level 4 Completed");
        level=5;
        gameState="STOP";
        }
     
      
      
      if(gameState=="STOP"){
          realPlayer.restart(realPlayer,100,200);
          enemyPlayer.restart(enemyPlayer,300,200);
          playerBall.reset(realPlayer);
          playerHealthBar.reset();
          enemyHealthBar.reset();
          }
    }
    if (level==5){
        var deltaTime = timestamp - lastTime;
         lastTime = timestamp;
         ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGTH);
         realPlayer.update(deltaTime);
         realPlayer.draw(ctx);
         enemyPlayer.update(deltaTime);
         enemyPlayer.draw(ctx);
     
     
         playerBall.update(deltaTime);
         playerBall.draw(ctx);
         enemyBall.update(deltaTime);
         enemyBall.draw(ctx);
         colision(playerBall,enemyPlayer,enemyHealthBar);
         colision(enemyBall,realPlayer,playerHealthBar);
         requestAnimationFrame(gameLoop);
        }
        if(gameState=="PLAY"){
            enemyBall.move(180,300);
            if(enemyHealthBar.health==0){
                alert("Level 5 Completed");
                gameState="STOP";
            }
            if(playerHealthBar.health==0){
                alert("Game Over");
                gameState="STOP";
                
            }
        }
        
        if(gameState=="STOP"){
          realPlayer.restart(realPlayer,100,200);
          enemyPlayer.restart(enemyPlayer,300,200);
          playerBall.reset(realPlayer);
          enemyBall.reset(enemyPlayer);
          playerHealthBar.reset();
          enemyHealthBar.reset();
          }
          

    
}

