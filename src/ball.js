   class Ball{
         constructor(player){
                this.player=player;
               this.image=ballImage;
               this.width = 0;
                this.height = 0;
                this.maxSpeed = 1;
                this.position = {
                 x:player.position.x+30,
                  y:player.position.y+30
                };
                this.speed = {
                  x: 0,
                  y: 0
                };
                 this.startpos = {
                  x: this.position.x,
                  y: this.position.y
            
                };
                this.finalpos = {
                    x:0,
                    y: 0
                };

         }

         move(angle, distance) {
            var pi = Math.PI;
            this.width=10;
            this.height=10;
            this.finalpos.x = this.startpos.x + Math.cos(angle * (pi / 180)) *distance;
            this.finalpos.y = this.startpos.y +Math.sin(angle * -(pi / 180)) *distance;
            this.finalpos.x=Math.round(this.finalpos.x);
            this.finalpos.y=Math.round(this.finalpos.y);
           
           
            
            
            if(this.position.x!=this.finalpos.x||this.position.y!=this.finalpos.y){
            this.speed.x = Math.round(Math.cos(angle * (pi / 180)) * this.maxSpeed);
            this.speed.y = Math.round(Math.sin(angle * -(pi / 180)) * this.maxSpeed);
             }else{
             this.speed.x=0;
             this.speed.y=0;
             this.reset();
             }
                
           
          }
         draw(ctx) {
            ctx.drawImage(
              this.image,
              this.position.x,
              this.position.y,
              this.height,
              this.width
            )
            }
            
            
         update(deltaTime) {
            if (
              this.position.x >= 580 ||
              this.position.y >= 580 ||
              this.position.x <= 20 ||
              this.position.y <= 20
            ) {
              this.speed.x = 0;
              this.speed.y = 0;
              this.reset();
            } else {
              this.position.x += this.speed.x;
              this.position.y += this.speed.y;
            }
         }
         reset(){
               this.image=ballImage;
                this.width = 0;
                this.height = 0;
                this.maxSpeed = 1;
                this.position = {
                 x:this.player.getPositionX()+30,
                  y:this.player.getPositionY()+30
                };
                this.speed = {
                  x: 0,
                  y: 0
                };
                 this.startpos = {
                  x: this.position.x,
                  y: this.position.y
            
                };
                this.finalpos = {
                    x:0,
                    y: 0
                };
         }
         getPositionX(){
              return this.position.x;
         }
         getPositionY(){
              return this.position.y;
         }
           
   }