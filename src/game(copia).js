import Player from "/src/player";
const canvas = document.getElementById("gameScreen");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 600, 600);
const GAME_WIDTH = 600;
const GAME_HEIGTH = 600;

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
