export default class Player {
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
