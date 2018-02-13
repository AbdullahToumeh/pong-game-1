import { SVG_NS } from '../settings';

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

  renderCatBall(svg, player1, player2) {

    //adds the velocity to the current position of the ball
    this.x += this.vx;
    this.y += this.vy;
    
    this.wallCollision();

    this.paddleCollision(player1, player2);

    //draw the ball
    let circle = document.createElementNS(SVG_NS, 'circle');
    circle.setAttributeNS(null, 'fill', 'white');
    circle.setAttributeNS(null, 'cx', this.x);
    circle.setAttributeNS(null, 'cy', this.y);
    circle.setAttributeNS(null, 'r', this.radius);

    let line1 = document.createElementNS(SVG_NS, 'line');
    line1.setAttributeNS(null, 'x1', this.x-14);
    line1.setAttributeNS(null, 'y1', this.y-2);
    line1.setAttributeNS(null, 'x2', this.x-20);
    line1.setAttributeNS(null, 'y2', this.y-20);
    line1.setAttributeNS(null, 'stroke', 'white');
    line1.setAttributeNS(null, 'stroke-width', '2');
    line1.setAttributeNS(null, 'stroke-linecap', 'round');

    let line2 = document.createElementNS(SVG_NS, 'line');
    line2.setAttributeNS(null, 'x1', this.x-20);
    line2.setAttributeNS(null, 'y1', this.y-20);
    line2.setAttributeNS(null, 'x2', this.x-2);
    line2.setAttributeNS(null, 'y2', this.y-12);
    line2.setAttributeNS(null, 'stroke', 'white');
    line2.setAttributeNS(null, 'stroke-width', '2');
    line2.setAttributeNS(null, 'stroke-linecap', 'round');

    let line3 = document.createElementNS(SVG_NS, 'line');
    line3.setAttributeNS(null, 'x1', this.x+5);
    line3.setAttributeNS(null, 'y1', this.y-12);
    line3.setAttributeNS(null, 'x2', this.x+25);
    line3.setAttributeNS(null, 'y2', this.y-20);
    line3.setAttributeNS(null, 'stroke', 'white');
    line3.setAttributeNS(null, 'stroke-width', '2');
    line3.setAttributeNS(null, 'stroke-linecap', 'round');

    let line4 = document.createElementNS(SVG_NS, 'line');
    line4.setAttributeNS(null, 'x1', this.x+25);
    line4.setAttributeNS(null, 'y1', this.y-20);
    line4.setAttributeNS(null, 'x2', this.x+15);
    line4.setAttributeNS(null, 'y2', this.y-2);
    line4.setAttributeNS(null, 'stroke', 'white');
    line4.setAttributeNS(null, 'stroke-width', '2');
    line4.setAttributeNS(null, 'stroke-linecap', 'round');

    let eye1 = document.createElementNS(SVG_NS, 'circle');
    eye1.setAttributeNS(null, 'fill', 'black');
    eye1.setAttributeNS(null, 'cx', this.x-4);
    eye1.setAttributeNS(null, 'cy', this.y-3);
    eye1.setAttributeNS(null, 'r', 2);

    let eye2 = document.createElementNS(SVG_NS, 'circle');
    eye2.setAttributeNS(null, 'fill', 'black');
    eye2.setAttributeNS(null, 'cx', this.x+4);
    eye2.setAttributeNS(null, 'cy', this.y-3);
    eye2.setAttributeNS(null, 'r', 2);

    let nose = document.createElementNS(SVG_NS, 'circle');
    nose.setAttributeNS(null, 'fill', 'black');
    nose.setAttributeNS(null, 'cx', this.x);
    nose.setAttributeNS(null, 'cy', this.y+3);
    nose.setAttributeNS(null, 'r', 2);

    let leftWhisker1 = document.createElementNS(SVG_NS, 'line');
    leftWhisker1.setAttributeNS(null, 'x1', this.x-2);
    leftWhisker1.setAttributeNS(null, 'y1', this.y+3);
    leftWhisker1.setAttributeNS(null, 'x2', this.x-12);
    leftWhisker1.setAttributeNS(null, 'y2', this.y+3);
    leftWhisker1.setAttributeNS(null, 'stroke', 'black');
    leftWhisker1.setAttributeNS(null, 'stroke-width', '2');
    leftWhisker1.setAttributeNS(null, 'stroke-linecap', 'round');

    let leftWhisker2 = document.createElementNS(SVG_NS, 'line');
    leftWhisker2.setAttributeNS(null, 'x1', this.x-2);
    leftWhisker2.setAttributeNS(null, 'y1', this.y+3);
    leftWhisker2.setAttributeNS(null, 'x2', this.x-12);
    leftWhisker2.setAttributeNS(null, 'y2', this.y-2);
    leftWhisker2.setAttributeNS(null, 'stroke', 'black');
    leftWhisker2.setAttributeNS(null, 'stroke-width', '2');
    leftWhisker2.setAttributeNS(null, 'stroke-linecap', 'round');

    let leftWhisker3 = document.createElementNS(SVG_NS, 'line');
    leftWhisker3.setAttributeNS(null, 'x1', this.x-2);
    leftWhisker3.setAttributeNS(null, 'y1', this.y+3);
    leftWhisker3.setAttributeNS(null, 'x2', this.x-12);
    leftWhisker3.setAttributeNS(null, 'y2', this.y+9);
    leftWhisker3.setAttributeNS(null, 'stroke', 'black');
    leftWhisker3.setAttributeNS(null, 'stroke-width', '2');
    leftWhisker3.setAttributeNS(null, 'stroke-linecap', 'round');

    let rightWhisker1 = document.createElementNS(SVG_NS, 'line');
    rightWhisker1.setAttributeNS(null, 'x1', this.x+2);
    rightWhisker1.setAttributeNS(null, 'y1', this.y+3);
    rightWhisker1.setAttributeNS(null, 'x2', this.x+12);
    rightWhisker1.setAttributeNS(null, 'y2', this.y+3);
    rightWhisker1.setAttributeNS(null, 'stroke', 'black');
    rightWhisker1.setAttributeNS(null, 'stroke-width', '2');
    rightWhisker1.setAttributeNS(null, 'stroke-linecap', 'round');

    let rightWhisker2 = document.createElementNS(SVG_NS, 'line');
    rightWhisker2.setAttributeNS(null, 'x1', this.x+2);
    rightWhisker2.setAttributeNS(null, 'y1', this.y+3);
    rightWhisker2.setAttributeNS(null, 'x2', this.x+12);
    rightWhisker2.setAttributeNS(null, 'y2', this.y-2);
    rightWhisker2.setAttributeNS(null, 'stroke', 'black');
    rightWhisker2.setAttributeNS(null, 'stroke-width', '2');
    rightWhisker2.setAttributeNS(null, 'stroke-linecap', 'round');

    let rightWhisker3 = document.createElementNS(SVG_NS, 'line');
    rightWhisker3.setAttributeNS(null, 'x1', this.x+2);
    rightWhisker3.setAttributeNS(null, 'y1', this.y+3);
    rightWhisker3.setAttributeNS(null, 'x2', this.x+12);
    rightWhisker3.setAttributeNS(null, 'y2', this.y+9);
    rightWhisker3.setAttributeNS(null, 'stroke', 'black');
    rightWhisker3.setAttributeNS(null, 'stroke-width', '2');
    rightWhisker3.setAttributeNS(null, 'stroke-linecap', 'round');

    let mouth = document.createElementNS(SVG_NS, 'line');
    mouth.setAttributeNS(null, 'x1', this.x-3);
    mouth.setAttributeNS(null, 'y1', this.y+8);
    mouth.setAttributeNS(null, 'x2', this.x+3);
    mouth.setAttributeNS(null, 'y2', this.y+8);
    mouth.setAttributeNS(null, 'stroke', 'black');
    mouth.setAttributeNS(null, 'stroke-width', '2');
    mouth.setAttributeNS(null, 'stroke-linecap', 'round');

    svg.appendChild(circle);
    svg.appendChild(line1);
    svg.appendChild(line2);
    svg.appendChild(line3);
    svg.appendChild(line4);
    svg.appendChild(eye1);
    svg.appendChild(eye2);
    svg.appendChild(nose);
    svg.appendChild(leftWhisker1);
    svg.appendChild(leftWhisker2);
    svg.appendChild(leftWhisker3);
    svg.appendChild(rightWhisker1);
    svg.appendChild(rightWhisker2);
    svg.appendChild(rightWhisker3);
    svg.appendChild(mouth);

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