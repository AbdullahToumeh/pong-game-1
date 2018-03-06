/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SVG_NS = exports.SVG_NS = 'http://www.w3.org/2000/svg';

var KEYS = exports.KEYS = {
  a: 'a', // player 1 up key
  z: 'z', // player 1 down key
  up: 'ArrowUp', // player 2 up key
  down: 'ArrowDown', // player 2 down key
  spaceBar: ' ', // pause the game
  enter: 'Enter'
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.eot";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

var _Board = __webpack_require__(6);

var _Board2 = _interopRequireDefault(_Board);

var _Paddle = __webpack_require__(7);

var _Paddle2 = _interopRequireDefault(_Paddle);

var _Ball = __webpack_require__(5);

var _Ball2 = _interopRequireDefault(_Ball);

var _Score = __webpack_require__(9);

var _Score2 = _interopRequireDefault(_Score);

var _Pause = __webpack_require__(8);

var _Pause2 = _interopRequireDefault(_Pause);

var _Win = __webpack_require__(10);

var _Win2 = _interopRequireDefault(_Win);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
	function Game(element, width, height) {
		var _this = this;

		_classCallCheck(this, Game);

		this.element = element;
		this.width = width;
		this.height = height;
		this.gameElement = document.getElementById(this.element);
		this.board = new _Board2.default(this.width, this.height);

		this.paddleWidth = 8;
		this.paddleHeight = 56;
		this.boardGap = 10;
		this.pause = true;

		this.player1 = new _Paddle2.default(this.height, this.paddleWidth, this.paddleHeight, this.boardGap, (this.height - this.paddleHeight) / 2, _settings.KEYS.a, _settings.KEYS.z, 'player1');

		this.player2 = new _Paddle2.default(this.height, this.paddleWidth, this.paddleHeight, this.width - this.paddleWidth - this.boardGap, (this.height - this.paddleHeight) / 2, _settings.KEYS.up, _settings.KEYS.down, 'player2');

		document.addEventListener('keydown', function (event) {
			switch (event.key) {
				case _settings.KEYS.spaceBar:
					_this.pause = !_this.pause;
					break;
			}
		});

		this.score1 = new _Score2.default(this.width / 2 - 50, 30, 30);
		this.score2 = new _Score2.default(this.width / 2 + 30, 30, 30);

		this.ball = new _Ball2.default(8, this.width, this.height);
		this.ball2 = new _Ball2.default(13, this.width, this.height); // adding a second ball

		this.pauseScreen = new _Pause2.default(this.width, this.height);

		this.winScreen = new _Win2.default(this.width, this.height);

		this.winAudio = new Audio('public/sounds/nyan-cat-song.m4a');
	}

	_createClass(Game, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			this.gameElement.innerHTML = '';

			var svg = document.createElementNS(_settings.SVG_NS, 'svg');
			svg.setAttributeNS(null, 'width', this.width);
			svg.setAttributeNS(null, 'height', this.height);
			svg.setAttributeNS(null, 'viewBox', '0 0 ' + this.width + ' ' + this.height);
			svg.setAttributeNS(null, 'class', 'gamespace');

			this.board.render(svg);

			this.player1.render(svg);
			this.player2.render(svg);

			// this.ball2.render(svg, this.player1, this.player2); -- adding a second ball
			this.gameElement.appendChild(svg);

			this.score1.render(svg, this.player1.score);
			this.score2.render(svg, this.player2.score);

			if (this.player1.score === 10 || this.player2.score === 10) {
				this.winAudio.play();
				this.winScreen.render(svg);
				this.ball.reset();

				document.addEventListener('keydown', function (event2) {
					switch (event2.key) {
						case _settings.KEYS.enter:
							_this2.player1.score = 0;
							_this2.player2.score = 0;
							_this2.winAudio.pause();
							_this2.winAudio.currentTime = 0;
							break;
					}
				});

				return;
			}

			if (this.pause) {
				this.pauseScreen.render(svg);
				return;
			}

			if (this.player1.score >= 5 || this.player2.score >= 5) {
				this.ball2.renderCatBall(svg, this.player1, this.player2);
				return;
			}

			this.ball.render(svg, this.player1, this.player2);
		}
	}]);

	return Game;
}();

exports.default = Game;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(16)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./game.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./game.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

var _Game = __webpack_require__(2);

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create a game instance
var game = new _Game2.default('game', 512, 256);

(function gameLoop() {
    game.render();
    requestAnimationFrame(gameLoop);
})();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ball = function () {
  function Ball(radius, boardWidth, boardHeight) {
    _classCallCheck(this, Ball);

    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;

    this.reset();

    this.ping = new Audio('public/sounds/cat-meow.m4a');

    this.hiss = new Audio('public/sounds/cat-hissing-sound.mp3');
  }

  _createClass(Ball, [{
    key: 'reset',
    value: function reset() {
      this.x = this.boardWidth / 2;
      this.y = this.boardHeight / 2;

      //generates random number between 5 and -5 that is not 0
      this.vy = 0;
      while (this.vy === 0) {
        this.vy = Math.floor(Math.random() * 10 - 5);
      }

      this.vx = this.direction * (6 - Math.abs(this.vy));
    }
  }, {
    key: 'goal',
    value: function goal(player) {
      player.score++;
      this.hiss.play();
      this.reset();
    }
  }, {
    key: 'wallCollision',
    value: function wallCollision() {
      //if the current left position minus the radius of the ball is less than or equal to 0, so if it hits the wall it will return true.
      var hitLeft = this.x - this.radius <= 0;
      var hitRight = this.x + this.radius >= this.boardWidth;
      var hitTop = this.y - this.radius <= 0;
      var hitBottom = this.y + this.radius >= this.boardHeight;

      //if it hits a wall, switch the position to be the negative of the current position
      if (hitTop || hitBottom) {
        this.vy = -this.vy;
        //can change the height of paddle on hits
      } else if (hitLeft || hitRight) {
        this.vx = -this.vx;
      }
    }
  }, {
    key: 'paddleCollision',
    value: function paddleCollision(player1, player2) {
      if (this.vx > 0) {
        var paddle = player2.coordinates(player2.x, player2.y, player2.width, player2.height);

        var _paddle = _slicedToArray(paddle, 4),
            leftX = _paddle[0],
            rightX = _paddle[1],
            topY = _paddle[2],
            bottomY = _paddle[3];

        //if the ball position plus the radius (edge) is greater than or equal to the left side of the paddle, and the
        //position+radius is lessthan or equal to the right edge, and both the y values are greater than or equal to the top or
        //less than or equal to the bottom, THEN flip the direction of the ball


        if (this.x + this.radius >= leftX && this.x + this.radius <= rightX && this.y >= topY && this.y <= bottomY) {
          this.vx = -this.vx;
          this.ping.play();
        }
      } else {
        var _paddle2 = player2.coordinates(player1.x, player1.y, player1.width, player1.height);

        var _paddle3 = _slicedToArray(_paddle2, 4),
            _leftX = _paddle3[0],
            _rightX = _paddle3[1],
            _topY = _paddle3[2],
            _bottomY = _paddle3[3];

        if (this.x - this.radius <= _rightX && this.x - this.radius >= _leftX && this.y >= _topY && this.y <= _bottomY) {
          this.vx = -this.vx;
          this.ping.play();
        }
      }
    }
  }, {
    key: 'render',
    value: function render(svg, player1, player2) {

      //adds the velocity to the current position of the ball
      this.x += this.vx;
      this.y += this.vy;

      this.wallCollision();

      this.paddleCollision(player1, player2);

      //draw the ball
      var circle = document.createElementNS(_settings.SVG_NS, 'circle');
      circle.setAttributeNS(null, 'fill', '#36c2f3');
      circle.setAttributeNS(null, 'cx', this.x);
      circle.setAttributeNS(null, 'cy', this.y);
      circle.setAttributeNS(null, 'r', this.radius);

      svg.appendChild(circle);

      var rightGoal = this.x + this.radius >= this.boardWidth;
      var leftGoal = this.x - this.radius <= 0;
      if (rightGoal) {
        this.goal(player1);
        this.direction = -this.direction;
      } else if (leftGoal) {
        this.goal(player2);
        this.direction = -this.direction;
      }
    }
  }, {
    key: 'renderCatBall',
    value: function renderCatBall(svg, player1, player2) {

      //adds the velocity to the current position of the ball
      this.x += this.vx;
      this.y += this.vy;

      this.wallCollision();

      this.paddleCollision(player1, player2);

      //draw the ball
      var circle = document.createElementNS(_settings.SVG_NS, 'circle');
      circle.setAttributeNS(null, 'fill', 'white');
      circle.setAttributeNS(null, 'cx', this.x);
      circle.setAttributeNS(null, 'cy', this.y);
      circle.setAttributeNS(null, 'r', this.radius);

      var line1 = document.createElementNS(_settings.SVG_NS, 'line');
      line1.setAttributeNS(null, 'x1', this.x - 14);
      line1.setAttributeNS(null, 'y1', this.y - 2);
      line1.setAttributeNS(null, 'x2', this.x - 20);
      line1.setAttributeNS(null, 'y2', this.y - 20);
      line1.setAttributeNS(null, 'stroke', 'white');
      line1.setAttributeNS(null, 'stroke-width', '2');
      line1.setAttributeNS(null, 'stroke-linecap', 'round');

      var line2 = document.createElementNS(_settings.SVG_NS, 'line');
      line2.setAttributeNS(null, 'x1', this.x - 20);
      line2.setAttributeNS(null, 'y1', this.y - 20);
      line2.setAttributeNS(null, 'x2', this.x - 2);
      line2.setAttributeNS(null, 'y2', this.y - 12);
      line2.setAttributeNS(null, 'stroke', 'white');
      line2.setAttributeNS(null, 'stroke-width', '2');
      line2.setAttributeNS(null, 'stroke-linecap', 'round');

      var line3 = document.createElementNS(_settings.SVG_NS, 'line');
      line3.setAttributeNS(null, 'x1', this.x + 5);
      line3.setAttributeNS(null, 'y1', this.y - 12);
      line3.setAttributeNS(null, 'x2', this.x + 25);
      line3.setAttributeNS(null, 'y2', this.y - 20);
      line3.setAttributeNS(null, 'stroke', 'white');
      line3.setAttributeNS(null, 'stroke-width', '2');
      line3.setAttributeNS(null, 'stroke-linecap', 'round');

      var line4 = document.createElementNS(_settings.SVG_NS, 'line');
      line4.setAttributeNS(null, 'x1', this.x + 25);
      line4.setAttributeNS(null, 'y1', this.y - 20);
      line4.setAttributeNS(null, 'x2', this.x + 15);
      line4.setAttributeNS(null, 'y2', this.y - 2);
      line4.setAttributeNS(null, 'stroke', 'white');
      line4.setAttributeNS(null, 'stroke-width', '2');
      line4.setAttributeNS(null, 'stroke-linecap', 'round');

      var eye1 = document.createElementNS(_settings.SVG_NS, 'circle');
      eye1.setAttributeNS(null, 'fill', 'black');
      eye1.setAttributeNS(null, 'cx', this.x - 4);
      eye1.setAttributeNS(null, 'cy', this.y - 3);
      eye1.setAttributeNS(null, 'r', 2);

      var eye2 = document.createElementNS(_settings.SVG_NS, 'circle');
      eye2.setAttributeNS(null, 'fill', 'black');
      eye2.setAttributeNS(null, 'cx', this.x + 4);
      eye2.setAttributeNS(null, 'cy', this.y - 3);
      eye2.setAttributeNS(null, 'r', 2);

      var nose = document.createElementNS(_settings.SVG_NS, 'circle');
      nose.setAttributeNS(null, 'fill', 'black');
      nose.setAttributeNS(null, 'cx', this.x);
      nose.setAttributeNS(null, 'cy', this.y + 3);
      nose.setAttributeNS(null, 'r', 2);

      var leftWhisker1 = document.createElementNS(_settings.SVG_NS, 'line');
      leftWhisker1.setAttributeNS(null, 'x1', this.x - 2);
      leftWhisker1.setAttributeNS(null, 'y1', this.y + 3);
      leftWhisker1.setAttributeNS(null, 'x2', this.x - 12);
      leftWhisker1.setAttributeNS(null, 'y2', this.y + 3);
      leftWhisker1.setAttributeNS(null, 'stroke', 'black');
      leftWhisker1.setAttributeNS(null, 'stroke-width', '2');
      leftWhisker1.setAttributeNS(null, 'stroke-linecap', 'round');

      var leftWhisker2 = document.createElementNS(_settings.SVG_NS, 'line');
      leftWhisker2.setAttributeNS(null, 'x1', this.x - 2);
      leftWhisker2.setAttributeNS(null, 'y1', this.y + 3);
      leftWhisker2.setAttributeNS(null, 'x2', this.x - 12);
      leftWhisker2.setAttributeNS(null, 'y2', this.y - 2);
      leftWhisker2.setAttributeNS(null, 'stroke', 'black');
      leftWhisker2.setAttributeNS(null, 'stroke-width', '2');
      leftWhisker2.setAttributeNS(null, 'stroke-linecap', 'round');

      var leftWhisker3 = document.createElementNS(_settings.SVG_NS, 'line');
      leftWhisker3.setAttributeNS(null, 'x1', this.x - 2);
      leftWhisker3.setAttributeNS(null, 'y1', this.y + 3);
      leftWhisker3.setAttributeNS(null, 'x2', this.x - 12);
      leftWhisker3.setAttributeNS(null, 'y2', this.y + 9);
      leftWhisker3.setAttributeNS(null, 'stroke', 'black');
      leftWhisker3.setAttributeNS(null, 'stroke-width', '2');
      leftWhisker3.setAttributeNS(null, 'stroke-linecap', 'round');

      var rightWhisker1 = document.createElementNS(_settings.SVG_NS, 'line');
      rightWhisker1.setAttributeNS(null, 'x1', this.x + 2);
      rightWhisker1.setAttributeNS(null, 'y1', this.y + 3);
      rightWhisker1.setAttributeNS(null, 'x2', this.x + 12);
      rightWhisker1.setAttributeNS(null, 'y2', this.y + 3);
      rightWhisker1.setAttributeNS(null, 'stroke', 'black');
      rightWhisker1.setAttributeNS(null, 'stroke-width', '2');
      rightWhisker1.setAttributeNS(null, 'stroke-linecap', 'round');

      var rightWhisker2 = document.createElementNS(_settings.SVG_NS, 'line');
      rightWhisker2.setAttributeNS(null, 'x1', this.x + 2);
      rightWhisker2.setAttributeNS(null, 'y1', this.y + 3);
      rightWhisker2.setAttributeNS(null, 'x2', this.x + 12);
      rightWhisker2.setAttributeNS(null, 'y2', this.y - 2);
      rightWhisker2.setAttributeNS(null, 'stroke', 'black');
      rightWhisker2.setAttributeNS(null, 'stroke-width', '2');
      rightWhisker2.setAttributeNS(null, 'stroke-linecap', 'round');

      var rightWhisker3 = document.createElementNS(_settings.SVG_NS, 'line');
      rightWhisker3.setAttributeNS(null, 'x1', this.x + 2);
      rightWhisker3.setAttributeNS(null, 'y1', this.y + 3);
      rightWhisker3.setAttributeNS(null, 'x2', this.x + 12);
      rightWhisker3.setAttributeNS(null, 'y2', this.y + 9);
      rightWhisker3.setAttributeNS(null, 'stroke', 'black');
      rightWhisker3.setAttributeNS(null, 'stroke-width', '2');
      rightWhisker3.setAttributeNS(null, 'stroke-linecap', 'round');

      var mouth = document.createElementNS(_settings.SVG_NS, 'line');
      mouth.setAttributeNS(null, 'x1', this.x - 3);
      mouth.setAttributeNS(null, 'y1', this.y + 8);
      mouth.setAttributeNS(null, 'x2', this.x + 3);
      mouth.setAttributeNS(null, 'y2', this.y + 8);
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

      var rightGoal = this.x + this.radius >= this.boardWidth;
      var leftGoal = this.x - this.radius <= 0;
      if (rightGoal) {
        this.goal(player1);
        this.direction = -this.direction;
      } else if (leftGoal) {
        this.goal(player2);
        this.direction = -this.direction;
      }
    }
  }]);

  return Ball;
}();

exports.default = Ball;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = function () {
  function Board(width, height) {
    _classCallCheck(this, Board);

    this.width = width;
    this.height = height;
  }

  _createClass(Board, [{
    key: 'render',
    value: function render(svg) {
      var rect = document.createElementNS(_settings.SVG_NS, 'rect');
      rect.setAttributeNS(null, 'fill', '#241822');
      rect.setAttributeNS(null, 'width', this.width);
      rect.setAttributeNS(null, 'height', this.height);

      var line = document.createElementNS(_settings.SVG_NS, 'line');
      line.setAttributeNS(null, 'x1', this.width / 2);
      line.setAttributeNS(null, 'y1', 0);
      line.setAttributeNS(null, 'x2', this.width / 2);
      line.setAttributeNS(null, 'y2', this.height);
      line.setAttributeNS(null, 'stroke', '#646464');
      line.setAttributeNS(null, 'stroke-width', '5');
      line.setAttributeNS(null, 'stroke-dasharray', '10,10');

      svg.appendChild(rect);
      svg.appendChild(line);
    }
  }]);

  return Board;
}();

exports.default = Board;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Paddle = function () {
  function Paddle(boardHeight, width, height, x, y, up, down, player) {
    var _this = this;

    _classCallCheck(this, Paddle);

    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 8;
    this.score = 0;

    this.player = player;
    this.keyState = {};

    document.addEventListener('keydown', function (event) {
      _this.keyState[event.key || event.which] = true;
    }, true);

    document.addEventListener('keyup', function (event) {
      _this.keyState[event.key || event.which] = false;
    }, true);

    // document.addEventListener('keydown', event => {
    //   switch (event.key) {
    //     case up:
    //       this.up();
    //       break;
    //     case down:
    //       this.down();
    //       break;
    //   }
    // });
  }

  //getting the maxiumum number between 0 (top of the board) and the current position of the paddle


  _createClass(Paddle, [{
    key: 'up',
    value: function up() {
      this.y = Math.max(this.y - this.speed, 0);
    }

    //getting the minimum number between the height of the board minus the height of the paddle
    //(so paddle doesn't extend past board), or the speed plus height. (move down)

  }, {
    key: 'down',
    value: function down() {
      this.y = Math.min(this.y + this.speed, this.boardHeight - this.height);
    }

    //gets the overall coordinates of each paddle (for collision detection)

  }, {
    key: 'coordinates',
    value: function coordinates(x, y, width, height) {
      var leftX = x;
      var rightX = x + width;
      var topY = y;
      var bottomY = y + height;
      return [leftX, rightX, topY, bottomY];
    }

    //rendering SVG images

  }, {
    key: 'render',
    value: function render(svg) {
      // Player movement
      if (this.keyState['a'] && this.player === 'player1') {
        this.up();
      }
      if (this.keyState['z'] && this.player === 'player1') {
        this.down();
      }
      if (this.keyState['ArrowUp'] && this.player === 'player2') {
        this.up();
      }
      if (this.keyState['ArrowDown'] && this.player === 'player2') {
        this.down();
      }

      var rect = document.createElementNS(_settings.SVG_NS, 'rect');
      rect.setAttributeNS(null, 'fill', 'mediumpurple');
      rect.setAttributeNS(null, 'width', this.width);
      rect.setAttributeNS(null, 'height', this.height);
      rect.setAttributeNS(null, 'x', this.x);
      rect.setAttributeNS(null, 'y', this.y);

      svg.appendChild(rect);
    }
  }]);

  return Paddle;
}();

exports.default = Paddle;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pause = function () {
  function Pause(width, height) {
    _classCallCheck(this, Pause);

    this.width = width;
    this.height = height;
  }

  _createClass(Pause, [{
    key: 'render',
    value: function render(svg) {
      var text = document.createElementNS(_settings.SVG_NS, 'text');
      text.setAttributeNS(null, 'x', this.width / 2 - 112);
      text.setAttributeNS(null, 'y', this.height / 2);
      text.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
      text.setAttributeNS(null, 'font-size', 50);
      text.setAttributeNS(null, 'fill', '#69409e');
      text.textContent = 'PAWSED';

      var text2 = document.createElementNS(_settings.SVG_NS, 'text');
      text2.setAttributeNS(null, 'x', this.width / 2 - 135);
      text2.setAttributeNS(null, 'y', this.height / 2 + 20);
      text2.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
      text2.setAttributeNS(null, 'font-size', 20);
      text2.setAttributeNS(null, 'fill', '#69409e');
      text2.textContent = 'Press SPACE to start';

      var p1Ttext = document.createElementNS(_settings.SVG_NS, 'text');
      p1Ttext.setAttributeNS(null, 'x', 75);
      p1Ttext.setAttributeNS(null, 'y', 175);
      p1Ttext.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
      p1Ttext.setAttributeNS(null, 'font-size', 20);
      p1Ttext.setAttributeNS(null, 'fill', '#36c2f3');
      p1Ttext.textContent = 'Player 1';

      var p2Text = document.createElementNS(_settings.SVG_NS, 'text');
      p2Text.setAttributeNS(null, 'x', 325);
      p2Text.setAttributeNS(null, 'y', 175);
      p2Text.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
      p2Text.setAttributeNS(null, 'font-size', 20);
      p2Text.setAttributeNS(null, 'fill', '#36c2f3');
      p2Text.textContent = 'Player 2';

      var p1Up = document.createElementNS(_settings.SVG_NS, 'text');
      p1Up.setAttributeNS(null, 'x', 100);
      p1Up.setAttributeNS(null, 'y', 200);
      p1Up.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
      p1Up.setAttributeNS(null, 'font-size', 20);
      p1Up.setAttributeNS(null, 'fill', '#5ba56e');
      p1Up.textContent = 'a: up';

      var p2Up = document.createElementNS(_settings.SVG_NS, 'text');
      p2Up.setAttributeNS(null, 'x', 305);
      p2Up.setAttributeNS(null, 'y', 200);
      p2Up.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
      p2Up.setAttributeNS(null, 'font-size', 20);
      p2Up.setAttributeNS(null, 'fill', '#5ba56e');
      p2Up.textContent = 'ArrowUp: up';

      var p1Down = document.createElementNS(_settings.SVG_NS, 'text');
      p1Down.setAttributeNS(null, 'x', 85);
      p1Down.setAttributeNS(null, 'y', 220);
      p1Down.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
      p1Down.setAttributeNS(null, 'font-size', 20);
      p1Down.setAttributeNS(null, 'fill', '#5ba56e');
      p1Down.textContent = 'z: down';

      var p2Down = document.createElementNS(_settings.SVG_NS, 'text');
      p2Down.setAttributeNS(null, 'x', 270);
      p2Down.setAttributeNS(null, 'y', 220);
      p2Down.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
      p2Down.setAttributeNS(null, 'font-size', 20);
      p2Down.setAttributeNS(null, 'fill', '#5ba56e');
      p2Down.textContent = 'ArrowDown: Down';

      svg.appendChild(text);
      svg.appendChild(text2);
      svg.appendChild(p1Ttext);
      svg.appendChild(p2Text);
      svg.appendChild(p1Up);
      svg.appendChild(p2Up);
      svg.appendChild(p1Down);
      svg.appendChild(p2Down);
    }
  }]);

  return Pause;
}();

exports.default = Pause;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Score = function () {
  function Score(x, y, size) {
    _classCallCheck(this, Score);

    this.x = x;
    this.y = y;
    this.size = size;
  }

  _createClass(Score, [{
    key: 'render',
    value: function render(svg, score) {
      var text = document.createElementNS(_settings.SVG_NS, 'text');
      text.setAttributeNS(null, 'x', this.x);
      text.setAttributeNS(null, 'y', this.y);
      text.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
      text.setAttributeNS(null, 'font-size', this.size);
      text.setAttributeNS(null, 'fill', '#36c2f3');
      text.textContent = score;
      svg.appendChild(text);
    }
  }]);

  return Score;
}();

exports.default = Score;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Win = function () {
  function Win(width, height) {
    _classCallCheck(this, Win);

    this.boardWidth = width;
    this.boardHeight = height;
  }

  _createClass(Win, [{
    key: 'render',
    value: function render(svg) {
      var text = document.createElementNS(_settings.SVG_NS, 'text');
      text.setAttributeNS(null, 'x', this.boardWidth / 2 - 125);
      text.setAttributeNS(null, 'y', this.boardHeight / 2);
      text.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
      text.setAttributeNS(null, 'font-size', 50);
      text.setAttributeNS(null, 'fill', '#69409e');
      text.textContent = 'YOU WIN!';

      var text2 = document.createElementNS(_settings.SVG_NS, 'text');
      text2.setAttributeNS(null, 'x', this.boardWidth / 2 - 150);
      text2.setAttributeNS(null, 'y', this.boardHeight / 2 + 25);
      text2.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
      text2.setAttributeNS(null, 'font-size', 20);
      text2.setAttributeNS(null, 'fill', '#2c806f');
      text2.textContent = 'Press ENTER to play again';

      svg.appendChild(text);
      svg.appendChild(text2);
    }
  }]);

  return Win;
}();

exports.default = Win;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/**\n * FONTS\n */\n\n@font-face {\n  font-family: 'Silkscreen Web';\n  src: url(" + __webpack_require__(1) + ");\n  src: url(" + __webpack_require__(1) + "?#iefix) format('embedded-opentype'),\n    url(" + __webpack_require__(15) + ") format('woff'),\n    url(" + __webpack_require__(14) + ") format('truetype'),\n    url(" + __webpack_require__(13) + "#silkscreennormal) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/**\n * GAME\n */\n\nhtml {\n  font-size: 16px;\n}\n\nbody {\n  align-items: center;\n  display: flex;\n  font-family: 'Silkscreen Web', monotype;\n  height: 100vh;\n  justify-content: center;\n  width: 100%;\n}\n\nh1 {\n  font-size: 2.5rem;\n  margin-bottom: 1rem; \n  text-align: center;\n}\n\n/* svg {\n  background: #353535;\n} */", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.svg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.ttf";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.woff";

/***/ }),
/* 16 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ })
/******/ ]);