
const canvas = document.getElementById("gameScreen");
const ctx = canvas.getContext("2d");
var playerImage=document.getElementById("playerUp");

var enemyImage=document.getElementById("enemyStart");
var ballImage=document.getElementById("ballImage");
ctx.fillStyle = "aquamarine";
ctx.fillRect(0, 0, 600, 600);
const GAME_WIDTH = 600;
const GAME_HEIGTH = 600;

var gameState ="STOP";
var level=1;

var s;

        
const realPlayer = new Player(100, 200,playerImage );
const enemyPlayer =new Player(300,200,enemyImage);
var playerBall=new Ball(realPlayer);
var enemyBall=new Ball(enemyPlayer);
        
        
var lastTime = 0;

function colision(ball,player,healthbar){
    if(level==2){
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
    if(ball.getFinalX() < player.getPositionX() + 80 &&
       ball.getFinalX() + 10 > player.getPositionX() &&
       ball.getFinalY() < player.getPositionY() + 80 &&
       ball.getFinalY() + 10 > player.getPositionY()|| ball.getMaxRange()){
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
    
}
function rayCast(X,Y,angle){
    
}


    
if(level==1){
    enemyHealthBar.updateHealth(90);
    
}
 
   gameLoop();
function gameLoop(timestamp) {

    var deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGTH);
    requestAnimationFrame(gameLoop);
    



   if(level==1){
   
  
    
    number=document.getElementById("1Image");
    
    realPlayer.update(deltaTime);
    realPlayer.draw(ctx);
    enemyPlayer.update(deltaTime);
    enemyPlayer.draw(ctx);
     
     
    playerBall.update(deltaTime);
    playerBall.draw(ctx);
    colision(playerBall,enemyPlayer,enemyHealthBar);
    
    
         if(gameState=="PLAY"){
              console.log(playerBall);
         }
      
      if(enemyHealthBar.health==0){
            alert("Level 1 Completed");
                level=2;
                gameState="STOP";
            }
     
      
      
          if (gameState=="STOP"){ 
              realPlayer.restart(realPlayer,100,200);
              
              
              playerBall.reset(realPlayer);
              playerBall.maxRange=false;
              }
    }
    if (level==2){
        
        number=document.getElementById("2Image");
        
        realPlayer.update(deltaTime);
        realPlayer.draw(ctx);
        enemyPlayer.update(deltaTime);
        enemyPlayer.draw(ctx);
        playerBall.update(deltaTime);
        playerBall.draw(ctx);
        
        colision(playerBall,enemyPlayer,playerHealthBar);
        
              if(gameState=="PLAY"){
                  enemyPlayer.move(180,300);
                  
                  var d= new Date();
                  var s=d.getSeconds();
                  var ms=d.getMilliseconds();
                
                  enemyPlayer.burn(ctx,ms);

              
                  if(s%2==0){
                        enemyHealthBar.updateHealth(0.5);
                  }
                  if(enemyHealthBar.health==0){
                        alert("Level 2 Completed")
                        level=3;
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
                enemyHealthBar.reset();
                playerHealthBar.reset();
                playerBall.maxRange=false;
            }
        }
    if(level==3){
   
       number=document.getElementById("3Image");
    
       
        
        realPlayer.update(deltaTime);
        realPlayer.draw(ctx);
        enemyPlayer.update(deltaTime);
        enemyPlayer.draw(ctx);
     
     
        playerBall.update(deltaTime);
        playerBall.draw(ctx);
        colision(playerBall,enemyPlayer,enemyHealthBar);
        
     
      
        if(enemyHealthBar.health==0){
            alert("Level 3 Completed");
                level=4;
                gameState="STOP";
            }
        if(playerHealthBar.health==0){
            alert("Game Over");
            gameState="STOP";
        }
     
      
      
        if (gameState=="STOP"){ 
                realPlayer.restart(realPlayer,100,200);
                enemyPlayer.restart(enemyPlayer,300,200);
                playerBall.reset(realPlayer);
                enemyHealthBar.reset();
                playerHealthBar.reset();
                playerBall.maxRange=false;
              
                }
    }

    if(level==4){
     
      number=document.getElementById("4Image");
     
     
     realPlayer.update(deltaTime);
     realPlayer.draw(ctx);
     enemyPlayer.update(deltaTime);
     enemyPlayer.draw(ctx);
     
     
     playerBall.update(deltaTime);
     playerBall.draw(ctx);

     colision(playerBall,enemyPlayer,enemyHealthBar);
     
      if(gameState=="PLAY"){
          enemyPlayer.move(0,200);
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
          playerBall.maxRange=false;
          }
    }
    if (level==5){

        number=document.getElementById("5Image");
         
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
              playerBall.maxRange=false;
            }        
    }
        
        
          

    
}

