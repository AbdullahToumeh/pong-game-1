import { SVG_NS, KEYS } from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';
import Pause from './Pause';
import Win from './Win';

export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;
		this.gameElement = document.getElementById(this.element);
		this.board = new Board(this.width, this.height);

		this.paddleWidth = 8;
		this.paddleHeight = 56;
		this.boardGap = 10;
		this.pause = true;

		this.player1 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.boardGap,
			((this.height - this.paddleHeight) / 2),
			KEYS.a,
			KEYS.z,
			'player1'
		);

		this.player2 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			(this.width-this.paddleWidth-this.boardGap),
			((this.height - this.paddleHeight) / 2),
			KEYS.up,
			KEYS.down,
			'player2'
		);

		document.addEventListener('keydown', event => {
      switch(event.key) {
        case KEYS.spaceBar:
					this.pause = !this.pause;
          break;
      }
		});
		
		this.score1 = new Score(this.width / 2 -50, 30, 30);
		this.score2 = new Score(this.width / 2 + 30, 30, 30);

		this.ball = new Ball(8, this.width, this.height);
		this.ball2 = new Ball(13, this.width, this.height); // adding a second ball

		this.pauseScreen = new Pause(this.width, this.height);

		this.winScreen = new Win(this.width, this.height);

		this.winAudio = new Audio('public/sounds/nyan-cat-song.m4a');

	}

	render() {
		
		this.gameElement.innerHTML = '';

		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		svg.setAttributeNS(null, 'class', 'gamespace')


		this.board.render(svg);


		this.player1.render(svg);
		this.player2.render(svg);
		
		this.gameElement.appendChild(svg);

		this.score1.render(svg, this.player1.score);
		this.score2.render(svg, this.player2.score);

		if(this.player1.score === 10 || this.player2.score === 10) {
			this.winAudio.play();
			this.winScreen.render(svg);
			this.ball.reset();

			document.addEventListener('keydown', event2 => {
				switch(event2.key) {
					case KEYS.enter:
					this.player1.score = 0;
					this.player2.score = 0;
					this.winAudio.pause();
					this.winAudio.currentTime = 0;
					break;
				}
			})
			
			return
			
		}

		if(this.pause) {
			this.pauseScreen.render(svg);
			return
		}

		if(this.player1.score >= 5 || this.player2.score >= 5) {
			this.ball2.renderCatBall(svg, this.player1, this.player2);
			return
		}

		
		this.ball.render(svg, this.player1, this.player2);
	}

}