class Player {
          constructor(x, y,image) {
            this.image = image
            this.width = 80;
            this.height = 80;
            this.maxSpeed = 1;
            this.fireImage=document.getElementById("fire");
            
            
            
            this.position = {
              x: x,
              y: y
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
            if(angle>225 && angle<315){
                this.image=document.getElementById("playerDown");
            }
            if (angle>45 && angle<135){
                this.image=document.getElementById("playerUp");
            }if(angle>135 && angle<225){
                this.image=document.getElementById("enemyLeft");
            }if(angle>315||angle<45){
                this.image=document.getElementById("enemyRight");
            }
            this.finalpos.x = this.startpos.x + Math.cos(angle * (pi / 180)) *distance;
            this.finalpos.y = this.startpos.y +Math.sin(angle * -(pi / 180)) *distance;
            
            this.speed.x = Math.cos(angle * (pi / 180)) * this.maxSpeed;
            this.speed.y = Math.sin(angle * -(pi / 180)) * this.maxSpeed;

            
            
            
            
                
           
          }
          restart(player,x,y){
              this.image = player.image;
                this.width = 80;
                this.height = 80;
                this.maxSpeed = 1;
            
            
                this.position = {
                  x: x,
                  y: y
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

          draw(ctx) {
            ctx.drawImage(
              this.image,
              this.position.x,
              this.position.y,
              this.height,
              this.width
            );
          }
          burn(ctx,ms){
              if(ms<=500){
              this.fireImage=document.getElementById("fire2")
              }
              if(ms>500){
                this.fireImage=document.getElementById("fire")
              }
               ctx.drawImage(this.fireImage,this.position.x+20,this.position.y+15,40,40);
              }
          update(deltaTime) {
            if (
              (this.position.x +1 > this.finalpos.x &&
              this.position.x <this.finalpos.x +1 &&
              this.position.y < this.finalpos.y +1 &&
              this.position.y + 1 > this.finalpos.y)
              ||
              (this.position.x >= 560 ||
              this.position.y >= 560||
              this.position.x <= 0 ||
              this.position.y <= 0 )
            ) {
              this.speed.x = 0;
              this.speed.y = 0;
              
            } else {
              this.position.x += this.speed.x;
              this.position.y += this.speed.y;
             
            }
            

           
           
          }
          getPositionX(){
              return this.position.x;
          }
          getPositionY(){
            return this.position.y;
          }
          
          
        }

