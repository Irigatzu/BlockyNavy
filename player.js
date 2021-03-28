export default class Player {
  constructor(x, y) {
    this.width = 150;
    this.height = 30;
    this.position = {
      x: x,
      y: y
    };
  }
  draw(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update(deltaTime) {
    if (!deltaTime) return;
    this.position.x += 5 / deltaTime;
  }
}