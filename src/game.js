import Player from "/src/player";
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 600, 600);
const GAME_WIDTH = 600;
const GAME_HEIGTH = 600;

let player = new Player(300, 200);

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGTH);
  player.update(deltaTime);
  player.draw(ctx);
  player.move(15, 0);
  requestAnimationFrame(gameLoop);
}
gameLoop();
