
const canvas = document.getElementById("gameScreen");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 600, 600);
const GAME_WIDTH = 600;
const GAME_HEIGTH = 600;


         class Player {
          constructor(x, y) {
            this.image = document.getElementById("img_boat");
            this.width = 80;
            this.height = 80;
            this.maxSpeed = 2;
            this.position = {
              x: x,
              y: y
            };

            this.speed = {
              x: 0,
              y: 0
            };
          }
          move(angle, distance) {
            var pi = Math.PI;
            var oldpos = {
              x: this.position.x,
              y: this.position.y
            };

            this.speed.x = Math.cos(angle * (pi / 180)) * distance;
            this.speed.y = Math.sin(angle * -(pi / 180)) * distance;
            /*if (
              this.speed.x + oldpos.x === this.position.x ||
              this.speed.y + oldpos.y === this.position.y
            ) {
              this.speed.x = 0;
              this.speed.y = 0;
            }
            */
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
              this.position.x >= 530 ||
              this.position.y >= 530 ||
              this.position.x <= 30 ||
              this.position.y <= 30
            ) {
              this.speed.x = 0;
              this.speed.y = 0;
            } else {
              this.position.x += this.speed.x;
              this.position.y += this.speed.y;
            }
          }
        }

const player = new Player(200, 200);

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGTH);
  player.update(deltaTime);
  player.draw(ctx);
  player.move(90, 2);
  requestAnimationFrame(gameLoop);
}
gameLoop();
console.log(player);
