const canvas2=document.getElementById("healthCanvas");
    const context=canvas2.getContext("2d");
    const width=canvas2.width;
    const height= canvas2.height;

    var playerHealthBar =new HealthBar(10,10,200,30,100,"green");
    var enemyHealthBar =new HealthBar(215,10,200,30,100,"red");

    const frame=function(){
        context.clearRect(0,0,600,400);
        playerHealthBar.show(context);
        enemyHealthBar.show(context);
        requestAnimationFrame(frame);
    }
    function hit(HealthBar){
    
    HealthBar.updateHealth(10);
    }
    
    frame();

    