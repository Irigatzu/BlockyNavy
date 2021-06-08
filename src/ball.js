   class Ball{
         constructor(player){
                this.player=player;
               this.image=ballImage;
               this.width = 0;
                this.height = 0;
                this.maxSpeed = 2;
                this.reps=0;
               this.angle=0;
               this.distance=0;
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
            this.movement=true;
            var pi = Math.PI;
            this.width=10;
            this.height=10;
            this.angle=angle;
            this.distance=distance;
            this.finalpos.x = this.startpos.x + Math.cos(angle * (pi / 180)) *distance;
            this.finalpos.y = this.startpos.y +Math.sin(angle * -(pi / 180)) *distance;
            
            this.speed.x = Math.cos(angle * (pi / 180)) * this.maxSpeed;
            this.speed.y = Math.sin(angle * -(pi / 180)) * this.maxSpeed;
           
            
            
           
                
           
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
              (this.position.x +1 > this.finalpos.x &&
              this.position.x <this.finalpos.x +1 &&
              this.position.y < this.finalpos.y +1 &&
              this.position.y + 1 > this.finalpos.y)
              ||
              (this.position.x >= 530 ||
              this.position.y >= 530||
              this.position.x <= 30 ||
              this.position.y <= 30 )
            ) {
              
              console.log("abduzcan");
              if(this.reps>1){
              this.reshoot();
              }else{
                    this.reset();
              }
              
              
              
            } else {
              this.position.x += this.speed.x;
              this.position.y += this.speed.y;
             
            }
         }
         reset(){
            this.reps=0;
            this.width = 0;
            this.height = 0;
            this.maxSpeed = 2;
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
         reshoot(){
                this.reps -=1;
               this.position = {
                 x:this.player.getPositionX()+30,
                 y:this.player.getPositionY()+30
                };
         }
         getPositionX(){
              return this.position.x;
         }
         getPositionY(){
              return this.position.y;
         }
         shoot(angle,distance){
           this.reps+=1;
           this.move(angle,distance);
         }
           
   }