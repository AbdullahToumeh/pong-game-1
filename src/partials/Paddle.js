import { SVG_NS } from '../settings';

export default class Paddle {
  constructor(boardHeight, width, height, x, y, up, down) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 14;
    this.score = 0;

    document.addEventListener('keydown', event => {
      switch (event.key) {
        case up:
          this.up();
          break;
        case down:
          this.down();
          break;
      }
    });
  }
  
  //getting the maxiumum number between 0 (top of the board) and the current position of the paddle
  up() {
    this.y = Math.max(this.y - this.speed, 0);
  }

  //getting the minimum number between the height of the board minus the height of the paddle
  //(so paddle doesn't extend past board), or the speed plus height. (move down)
  down() {
    this.y = Math.min((this.y + this.speed), (this.boardHeight-this.height));

  }

  //gets the overall coordinates of each paddle (for collision detection)
  coordinates(x, y, width, height) {
    let leftX = x;
    let rightX = x + width;
    let topY = y;
    let bottomY = y + height;
    return [leftX, rightX, topY, bottomY];
  }

  //rendering SVG images
  render(svg) {
    let rect = document.createElementNS(SVG_NS, 'rect');
    rect.setAttributeNS(null, 'fill', 'mediumpurple'); 
    rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    rect.setAttributeNS(null, 'x', this.x);
    rect.setAttributeNS(null, 'y', this.y);

    svg.appendChild(rect);
  }
}