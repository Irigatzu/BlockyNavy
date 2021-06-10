const canvas2=document.getElementById("healthCanvas");
    const context=canvas2.getContext("2d");
    const width=canvas2.width;
    const height= canvas2.height;
    const lvlImage=document.getElementById("lvlImage");
    var number=document.getElementById("1Image");
    

    var playerHealthBar =new HealthBar(10,10,200,30,100,"green");
    var enemyHealthBar =new HealthBar(215,10,200,30,100,"red");

    const frame=function(){
        context.clearRect(0,0,600,400);
        playerHealthBar.show(context);
        enemyHealthBar.show(context);
        context.drawImage(
              lvlImage,
              10,
              50,
              100,
              50
            )
        context.drawImage(number,120,50,50,50);
        

        requestAnimationFrame(frame);
    }
    function hit(HealthBar){
    
    HealthBar.updateHealth(10);
    }
    
    frame();

    