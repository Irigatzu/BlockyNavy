class Player {
          constructor(x, y,image) {
            this.image = image
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
          move(angle, distance) {
            var pi = Math.PI;
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

