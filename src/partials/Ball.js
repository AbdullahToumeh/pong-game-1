import { SVG_NS, KEYS } from '../settings';

export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;

    this.reset();

    this.ping = new Audio('public/sounds/cat-meow.m4a');

    this.hiss = new Audio('public/sounds/cat-hissing-sound.mp3');
  }

  reset() {
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;
    
    //generates random number between 5 and -5 that is not 0
    this.vy = 0;
    while (this.vy === 0) {
      this.vy = Math.floor(Math.random() * 10 - 5);
    }

    this.vx = this.direction * (6 - Math.abs(this.vy));
  }

  goal(player) {
    player.score++;
    this.hiss.play();
    this.reset();
  }

  wallCollision() {
    //if the current left position minus the radius of the ball is less than or equal to 0, so if it hits the wall it will return true.
    const hitLeft = this.x-this.radius <= 0;
    const hitRight = this.x+this.radius >= this.boardWidth;
    const hitTop = this.y-this.radius <= 0;
    const hitBottom = this.y+this.radius >= this.boardHeight;

    //if it hits a wall, switch the position to be the negative of the current position
    if(hitTop || hitBottom) {
      this.vy = -this.vy;
      //can change the height of paddle on hits
    }
    else if(hitLeft || hitRight) {
      this.vx = -this.vx;
    }
  }

  paddleCollision(player1, player2) {
    if (this.vx > 0) {
      let paddle = player2.coordinates(player2.x, player2.y, player2.width, player2.height);
      let [leftX, rightX, topY, bottomY] = paddle;

      //if the ball position plus the radius (edge) is greater than or equal to the left side of the paddle, and the
      //position+radius is lessthan or equal to the right edge, and both the y values are greater than or equal to the top or
      //less than or equal to the bottom, THEN flip the direction of the ball
      if ((this.x + this.radius >= leftX) && (this.x + this.radius <= rightX) && (this.y >= topY && this.y <= bottomY))  {
        this.vx = -this.vx;
        this.ping.play();
      }
    }
    else {
      let paddle = player2.coordinates(player1.x, player1.y, player1.width, player1.height);
      let [leftX, rightX, topY, bottomY] = paddle;

      if ((this.x - this.radius <= rightX) && (this.x - this.radius >= leftX) && (this.y >= topY && this.y <= bottomY)) {
        this.vx = -this.vx;
        this.ping.play();
      }
    }
  }

  render(svg, player1, player2) {

    //adds the velocity to the current position of the ball
    this.x += this.vx;
    this.y += this.vy;
    
    this.wallCollision();

    this.paddleCollision(player1, player2);

    //draw the ball
    let circle = document.createElementNS(SVG_NS, 'circle');
    circle.setAttributeNS(null, 'fill', '#36c2f3');
    circle.setAttributeNS(null, 'cx', this.x);
    circle.setAttributeNS(null, 'cy', this.y);
    circle.setAttributeNS(null, 'r', this.radius);

    svg.appendChild(circle);

    const rightGoal = this.x + this.radius >= this.boardWidth;
    const leftGoal = this.x - this.radius <= 0;
    if(rightGoal) {
      this.goal(player1);
      this.direction = -this.direction;
    }
    else if (leftGoal) {
      this.goal(player2);
      this.direction = -this.direction;
    }
  }
}