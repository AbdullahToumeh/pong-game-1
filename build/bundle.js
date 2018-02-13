!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.SVG_NS="http://www.w3.org/2000/svg",e.KEYS={a:"a",z:"z",up:"ArrowUp",down:"ArrowDown",spaceBar:" ",enter:"Enter"}},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.eot"},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),u=i(6),o=n(u),a=i(7),h=n(a),c=i(5),d=n(c),f=i(9),b=n(f),p=i(8),S=n(p),y=i(10),N=n(y),A=function(){function t(e,i,n){var l=this;r(this,t),this.element=e,this.width=i,this.height=n,this.gameElement=document.getElementById(this.element),this.board=new o.default(this.width,this.height),this.paddleWidth=8,this.paddleHeight=56,this.boardGap=10,this.pause=!0,this.player1=new h.default(this.height,this.paddleWidth,this.paddleHeight,this.boardGap,(this.height-this.paddleHeight)/2,s.KEYS.a,s.KEYS.z,"player1"),this.player2=new h.default(this.height,this.paddleWidth,this.paddleHeight,this.width-this.paddleWidth-this.boardGap,(this.height-this.paddleHeight)/2,s.KEYS.up,s.KEYS.down,"player2"),document.addEventListener("keydown",function(t){switch(t.key){case s.KEYS.spaceBar:l.pause=!l.pause}}),this.score1=new b.default(this.width/2-50,30,30),this.score2=new b.default(this.width/2+30,30,30),this.ball=new d.default(8,this.width,this.height),this.ball2=new d.default(13,this.width,this.height),this.pauseScreen=new S.default(this.width,this.height),this.winScreen=new N.default(this.width,this.height),this.winAudio=new Audio("public/sounds/nyan-cat-song.m4a")}return l(t,[{key:"render",value:function(){var t=this;this.gameElement.innerHTML="";var e=document.createElementNS(s.SVG_NS,"svg");return e.setAttributeNS(null,"width",this.width),e.setAttributeNS(null,"height",this.height),e.setAttributeNS(null,"viewBox","0 0 "+this.width+" "+this.height),e.setAttributeNS(null,"class","gamespace"),this.board.render(e),this.player1.render(e),this.player2.render(e),this.gameElement.appendChild(e),this.score1.render(e,this.player1.score),this.score2.render(e,this.player2.score),10===this.player1.score||10===this.player2.score?(this.winAudio.play(),this.winScreen.render(e),this.ball.reset(),void document.addEventListener("keydown",function(e){switch(e.key){case s.KEYS.enter:t.player1.score=0,t.player2.score=0,t.winAudio.pause(),t.winAudio.currentTime=0}})):this.pause?void this.pauseScreen.render(e):this.player1.score>=5||this.player2.score>=5?void this.ball2.renderCatBall(e,this.player1,this.player2):void this.ball.render(e,this.player1,this.player2)}}]),t}();e.default=A},function(t,e,i){var n=i(11);"string"==typeof n&&(n=[[t.i,n,""]]);i(16)(n,{});n.locals&&(t.exports=n.locals)},function(t,e,i){"use strict";i(3);var n=i(2),r=function(t){return t&&t.__esModule?t:{default:t}}(n),l=new r.default("game",512,256);!function t(){l.render(),requestAnimationFrame(t)}()},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){var i=[],n=!0,r=!1,l=void 0;try{for(var s,u=t[Symbol.iterator]();!(n=(s=u.next()).done)&&(i.push(s.value),!e||i.length!==e);n=!0);}catch(t){r=!0,l=t}finally{try{!n&&u.return&&u.return()}finally{if(r)throw l}}return i}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),u=function(){function t(e,i,r){n(this,t),this.radius=e,this.boardWidth=i,this.boardHeight=r,this.direction=1,this.reset(),this.ping=new Audio("public/sounds/cat-meow.m4a"),this.hiss=new Audio("public/sounds/cat-hissing-sound.mp3")}return l(t,[{key:"reset",value:function(){for(this.x=this.boardWidth/2,this.y=this.boardHeight/2,this.vy=0;0===this.vy;)this.vy=Math.floor(10*Math.random()-5);this.vx=this.direction*(6-Math.abs(this.vy))}},{key:"goal",value:function(t){t.score++,this.hiss.play(),this.reset()}},{key:"wallCollision",value:function(){var t=this.x-this.radius<=0,e=this.x+this.radius>=this.boardWidth,i=this.y-this.radius<=0,n=this.y+this.radius>=this.boardHeight;i||n?this.vy=-this.vy:(t||e)&&(this.vx=-this.vx)}},{key:"paddleCollision",value:function(t,e){if(this.vx>0){var i=e.coordinates(e.x,e.y,e.width,e.height),n=r(i,4),l=n[0],s=n[1],u=n[2],o=n[3];this.x+this.radius>=l&&this.x+this.radius<=s&&this.y>=u&&this.y<=o&&(this.vx=-this.vx,this.ping.play())}else{var a=e.coordinates(t.x,t.y,t.width,t.height),h=r(a,4),c=h[0],d=h[1],f=h[2],b=h[3];this.x-this.radius<=d&&this.x-this.radius>=c&&this.y>=f&&this.y<=b&&(this.vx=-this.vx,this.ping.play())}}},{key:"render",value:function(t,e,i){this.x+=this.vx,this.y+=this.vy,this.wallCollision(),this.paddleCollision(e,i);var n=document.createElementNS(s.SVG_NS,"circle");n.setAttributeNS(null,"fill","#36c2f3"),n.setAttributeNS(null,"cx",this.x),n.setAttributeNS(null,"cy",this.y),n.setAttributeNS(null,"r",this.radius),t.appendChild(n);var r=this.x+this.radius>=this.boardWidth,l=this.x-this.radius<=0;r?(this.goal(e),this.direction=-this.direction):l&&(this.goal(i),this.direction=-this.direction)}},{key:"renderCatBall",value:function(t,e,i){this.x+=this.vx,this.y+=this.vy,this.wallCollision(),this.paddleCollision(e,i);var n=document.createElementNS(s.SVG_NS,"circle");n.setAttributeNS(null,"fill","white"),n.setAttributeNS(null,"cx",this.x),n.setAttributeNS(null,"cy",this.y),n.setAttributeNS(null,"r",this.radius);var r=document.createElementNS(s.SVG_NS,"line");r.setAttributeNS(null,"x1",this.x-14),r.setAttributeNS(null,"y1",this.y-2),r.setAttributeNS(null,"x2",this.x-20),r.setAttributeNS(null,"y2",this.y-20),r.setAttributeNS(null,"stroke","white"),r.setAttributeNS(null,"stroke-width","2"),r.setAttributeNS(null,"stroke-linecap","round");var l=document.createElementNS(s.SVG_NS,"line");l.setAttributeNS(null,"x1",this.x-20),l.setAttributeNS(null,"y1",this.y-20),l.setAttributeNS(null,"x2",this.x-2),l.setAttributeNS(null,"y2",this.y-12),l.setAttributeNS(null,"stroke","white"),l.setAttributeNS(null,"stroke-width","2"),l.setAttributeNS(null,"stroke-linecap","round");var u=document.createElementNS(s.SVG_NS,"line");u.setAttributeNS(null,"x1",this.x+5),u.setAttributeNS(null,"y1",this.y-12),u.setAttributeNS(null,"x2",this.x+25),u.setAttributeNS(null,"y2",this.y-20),u.setAttributeNS(null,"stroke","white"),u.setAttributeNS(null,"stroke-width","2"),u.setAttributeNS(null,"stroke-linecap","round");var o=document.createElementNS(s.SVG_NS,"line");o.setAttributeNS(null,"x1",this.x+25),o.setAttributeNS(null,"y1",this.y-20),o.setAttributeNS(null,"x2",this.x+15),o.setAttributeNS(null,"y2",this.y-2),o.setAttributeNS(null,"stroke","white"),o.setAttributeNS(null,"stroke-width","2"),o.setAttributeNS(null,"stroke-linecap","round");var a=document.createElementNS(s.SVG_NS,"circle");a.setAttributeNS(null,"fill","black"),a.setAttributeNS(null,"cx",this.x-4),a.setAttributeNS(null,"cy",this.y-3),a.setAttributeNS(null,"r",2);var h=document.createElementNS(s.SVG_NS,"circle");h.setAttributeNS(null,"fill","black"),h.setAttributeNS(null,"cx",this.x+4),h.setAttributeNS(null,"cy",this.y-3),h.setAttributeNS(null,"r",2);var c=document.createElementNS(s.SVG_NS,"circle");c.setAttributeNS(null,"fill","black"),c.setAttributeNS(null,"cx",this.x),c.setAttributeNS(null,"cy",this.y+3),c.setAttributeNS(null,"r",2);var d=document.createElementNS(s.SVG_NS,"line");d.setAttributeNS(null,"x1",this.x-2),d.setAttributeNS(null,"y1",this.y+3),d.setAttributeNS(null,"x2",this.x-12),d.setAttributeNS(null,"y2",this.y+3),d.setAttributeNS(null,"stroke","black"),d.setAttributeNS(null,"stroke-width","2"),d.setAttributeNS(null,"stroke-linecap","round");var f=document.createElementNS(s.SVG_NS,"line");f.setAttributeNS(null,"x1",this.x-2),f.setAttributeNS(null,"y1",this.y+3),f.setAttributeNS(null,"x2",this.x-12),f.setAttributeNS(null,"y2",this.y-2),f.setAttributeNS(null,"stroke","black"),f.setAttributeNS(null,"stroke-width","2"),f.setAttributeNS(null,"stroke-linecap","round");var b=document.createElementNS(s.SVG_NS,"line");b.setAttributeNS(null,"x1",this.x-2),b.setAttributeNS(null,"y1",this.y+3),b.setAttributeNS(null,"x2",this.x-12),b.setAttributeNS(null,"y2",this.y+9),b.setAttributeNS(null,"stroke","black"),b.setAttributeNS(null,"stroke-width","2"),b.setAttributeNS(null,"stroke-linecap","round");var p=document.createElementNS(s.SVG_NS,"line");p.setAttributeNS(null,"x1",this.x+2),p.setAttributeNS(null,"y1",this.y+3),p.setAttributeNS(null,"x2",this.x+12),p.setAttributeNS(null,"y2",this.y+3),p.setAttributeNS(null,"stroke","black"),p.setAttributeNS(null,"stroke-width","2"),p.setAttributeNS(null,"stroke-linecap","round");var S=document.createElementNS(s.SVG_NS,"line");S.setAttributeNS(null,"x1",this.x+2),S.setAttributeNS(null,"y1",this.y+3),S.setAttributeNS(null,"x2",this.x+12),S.setAttributeNS(null,"y2",this.y-2),S.setAttributeNS(null,"stroke","black"),S.setAttributeNS(null,"stroke-width","2"),S.setAttributeNS(null,"stroke-linecap","round");var y=document.createElementNS(s.SVG_NS,"line");y.setAttributeNS(null,"x1",this.x+2),y.setAttributeNS(null,"y1",this.y+3),y.setAttributeNS(null,"x2",this.x+12),y.setAttributeNS(null,"y2",this.y+9),y.setAttributeNS(null,"stroke","black"),y.setAttributeNS(null,"stroke-width","2"),y.setAttributeNS(null,"stroke-linecap","round");var N=document.createElementNS(s.SVG_NS,"line");N.setAttributeNS(null,"x1",this.x-3),N.setAttributeNS(null,"y1",this.y+8),N.setAttributeNS(null,"x2",this.x+3),N.setAttributeNS(null,"y2",this.y+8),N.setAttributeNS(null,"stroke","black"),N.setAttributeNS(null,"stroke-width","2"),N.setAttributeNS(null,"stroke-linecap","round"),t.appendChild(n),t.appendChild(r),t.appendChild(l),t.appendChild(u),t.appendChild(o),t.appendChild(a),t.appendChild(h),t.appendChild(c),t.appendChild(d),t.appendChild(f),t.appendChild(b),t.appendChild(p),t.appendChild(S),t.appendChild(y),t.appendChild(N);var A=this.x+this.radius>=this.boardWidth,m=this.x-this.radius<=0;A?(this.goal(e),this.direction=-this.direction):m&&(this.goal(i),this.direction=-this.direction)}}]),t}();e.default=u},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),l=i(0),s=function(){function t(e,i){n(this,t),this.width=e,this.height=i}return r(t,[{key:"render",value:function(t){var e=document.createElementNS(l.SVG_NS,"rect");e.setAttributeNS(null,"fill","#241822"),e.setAttributeNS(null,"width",this.width),e.setAttributeNS(null,"height",this.height);var i=document.createElementNS(l.SVG_NS,"line");i.setAttributeNS(null,"x1",this.width/2),i.setAttributeNS(null,"y1",0),i.setAttributeNS(null,"x2",this.width/2),i.setAttributeNS(null,"y2",this.height),i.setAttributeNS(null,"stroke","#646464"),i.setAttributeNS(null,"stroke-width","5"),i.setAttributeNS(null,"stroke-dasharray","10,10"),t.appendChild(e),t.appendChild(i)}}]),t}();e.default=s},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),l=i(0),s=function(){function t(e,i,r,l,s,u,o,a){var h=this;n(this,t),this.boardHeight=e,this.width=i,this.height=r,this.x=l,this.y=s,this.speed=8,this.score=0,this.player=a,this.keyState={},document.addEventListener("keydown",function(t){h.keyState[t.key||t.which]=!0},!0),document.addEventListener("keyup",function(t){h.keyState[t.key||t.which]=!1},!0)}return r(t,[{key:"up",value:function(){this.y=Math.max(this.y-this.speed,0)}},{key:"down",value:function(){this.y=Math.min(this.y+this.speed,this.boardHeight-this.height)}},{key:"coordinates",value:function(t,e,i,n){return[t,t+i,e,e+n]}},{key:"render",value:function(t){this.keyState.a&&"player1"===this.player&&this.up(),this.keyState.z&&"player1"===this.player&&this.down(),this.keyState.ArrowUp&&"player2"===this.player&&this.up(),this.keyState.ArrowDown&&"player2"===this.player&&this.down();var e=document.createElementNS(l.SVG_NS,"rect");e.setAttributeNS(null,"fill","mediumpurple"),e.setAttributeNS(null,"width",this.width),e.setAttributeNS(null,"height",this.height),e.setAttributeNS(null,"x",this.x),e.setAttributeNS(null,"y",this.y),t.appendChild(e)}}]),t}();e.default=s},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),l=i(0),s=function(){function t(e,i){n(this,t),this.width=e,this.height=i}return r(t,[{key:"render",value:function(t){var e=document.createElementNS(l.SVG_NS,"text");e.setAttributeNS(null,"x",this.width/2-112),e.setAttributeNS(null,"y",this.height/2),e.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),e.setAttributeNS(null,"font-size",50),e.setAttributeNS(null,"fill","#69409e"),e.textContent="PAWSED";var i=document.createElementNS(l.SVG_NS,"text");i.setAttributeNS(null,"x",this.width/2-135),i.setAttributeNS(null,"y",this.height/2+20),i.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),i.setAttributeNS(null,"font-size",20),i.setAttributeNS(null,"fill","#69409e"),i.textContent="Press SPACE to start";var n=document.createElementNS(l.SVG_NS,"text");n.setAttributeNS(null,"x",75),n.setAttributeNS(null,"y",175),n.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),n.setAttributeNS(null,"font-size",20),n.setAttributeNS(null,"fill","#36c2f3"),n.textContent="Player 1";var r=document.createElementNS(l.SVG_NS,"text");r.setAttributeNS(null,"x",325),r.setAttributeNS(null,"y",175),r.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),r.setAttributeNS(null,"font-size",20),r.setAttributeNS(null,"fill","#36c2f3"),r.textContent="Player 2";var s=document.createElementNS(l.SVG_NS,"text");s.setAttributeNS(null,"x",100),s.setAttributeNS(null,"y",200),s.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),s.setAttributeNS(null,"font-size",20),s.setAttributeNS(null,"fill","#5ba56e"),s.textContent="a: up";var u=document.createElementNS(l.SVG_NS,"text");u.setAttributeNS(null,"x",305),u.setAttributeNS(null,"y",200),u.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),u.setAttributeNS(null,"font-size",20),u.setAttributeNS(null,"fill","#5ba56e"),u.textContent="ArrowUp: up";var o=document.createElementNS(l.SVG_NS,"text");o.setAttributeNS(null,"x",85),o.setAttributeNS(null,"y",220),o.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),o.setAttributeNS(null,"font-size",20),o.setAttributeNS(null,"fill","#5ba56e"),o.textContent="z: down";var a=document.createElementNS(l.SVG_NS,"text");a.setAttributeNS(null,"x",270),a.setAttributeNS(null,"y",220),a.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),a.setAttributeNS(null,"font-size",20),a.setAttributeNS(null,"fill","#5ba56e"),a.textContent="ArrowDown: Down",t.appendChild(e),t.appendChild(i),t.appendChild(n),t.appendChild(r),t.appendChild(s),t.appendChild(u),t.appendChild(o),t.appendChild(a)}}]),t}();e.default=s},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),l=i(0),s=function(){function t(e,i,r){n(this,t),this.x=e,this.y=i,this.size=r}return r(t,[{key:"render",value:function(t,e){var i=document.createElementNS(l.SVG_NS,"text");i.setAttributeNS(null,"x",this.x),i.setAttributeNS(null,"y",this.y),i.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),i.setAttributeNS(null,"font-size",this.size),i.setAttributeNS(null,"fill","#36c2f3"),i.textContent=e,t.appendChild(i)}}]),t}();e.default=s},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),l=i(0),s=function(){function t(e,i){n(this,t),this.boardWidth=e,this.boardHeight=i}return r(t,[{key:"render",value:function(t){var e=document.createElementNS(l.SVG_NS,"text");e.setAttributeNS(null,"x",this.boardWidth/2-125),e.setAttributeNS(null,"y",this.boardHeight/2),e.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),e.setAttributeNS(null,"font-size",50),e.setAttributeNS(null,"fill","#69409e"),e.textContent="YOU WIN!";var i=document.createElementNS(l.SVG_NS,"text");i.setAttributeNS(null,"x",this.boardWidth/2-150),i.setAttributeNS(null,"y",this.boardHeight/2+25),i.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),i.setAttributeNS(null,"font-size",20),i.setAttributeNS(null,"fill","#2c806f"),i.textContent="Press ENTER to play again",t.appendChild(e),t.appendChild(i)}}]),t}();e.default=s},function(t,e,i){e=t.exports=i(12)(),e.push([t.i,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}@font-face{font-family:Silkscreen Web;src:url('+i(1)+");src:url("+i(1)+'?#iefix) format("embedded-opentype"),url('+i(15)+') format("woff"),url('+i(14)+') format("truetype"),url('+i(13)+'#silkscreennormal) format("svg");font-weight:400;font-style:normal}html{font-size:16px}body{align-items:center;display:flex;font-family:Silkscreen Web,monotype;height:100vh;justify-content:center;width:100%}h1{font-size:2.5rem;margin-bottom:1rem;text-align:center}',""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var l=this[r][0];"number"==typeof l&&(n[l]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&n[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),t.push(s))}},t}},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.svg"},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.ttf"},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.woff"},function(t,e){function i(t,e){for(var i=0;i<t.length;i++){var n=t[i],r=d[n.id];if(r){r.refs++;for(var l=0;l<r.parts.length;l++)r.parts[l](n.parts[l]);for(;l<n.parts.length;l++)r.parts.push(o(n.parts[l],e))}else{for(var s=[],l=0;l<n.parts.length;l++)s.push(o(n.parts[l],e));d[n.id]={id:n.id,refs:1,parts:s}}}}function n(t){for(var e=[],i={},n=0;n<t.length;n++){var r=t[n],l=r[0],s=r[1],u=r[2],o=r[3],a={css:s,media:u,sourceMap:o};i[l]?i[l].parts.push(a):e.push(i[l]={id:l,parts:[a]})}return e}function r(t,e){var i=p(),n=N[N.length-1];if("top"===t.insertAt)n?n.nextSibling?i.insertBefore(e,n.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),N.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function l(t){t.parentNode.removeChild(t);var e=N.indexOf(t);e>=0&&N.splice(e,1)}function s(t){var e=document.createElement("style");return e.type="text/css",r(t,e),e}function u(t){var e=document.createElement("link");return e.rel="stylesheet",r(t,e),e}function o(t,e){var i,n,r;if(e.singleton){var o=y++;i=S||(S=s(e)),n=a.bind(null,i,o,!1),r=a.bind(null,i,o,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=u(e),n=c.bind(null,i),r=function(){l(i),i.href&&URL.revokeObjectURL(i.href)}):(i=s(e),n=h.bind(null,i),r=function(){l(i)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}function a(t,e,i,n){var r=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=A(e,r);else{var l=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(l,s[e]):t.appendChild(l)}}function h(t,e){var i=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}function c(t,e){var i=e.css,n=e.sourceMap;n&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var r=new Blob([i],{type:"text/css"}),l=t.href;t.href=URL.createObjectURL(r),l&&URL.revokeObjectURL(l)}var d={},f=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},b=f(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),p=f(function(){return document.head||document.getElementsByTagName("head")[0]}),S=null,y=0,N=[];t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},void 0===e.singleton&&(e.singleton=b()),void 0===e.insertAt&&(e.insertAt="bottom");var r=n(t);return i(r,e),function(t){for(var l=[],s=0;s<r.length;s++){var u=r[s],o=d[u.id];o.refs--,l.push(o)}if(t){i(n(t),e)}for(var s=0;s<l.length;s++){var o=l[s];if(0===o.refs){for(var a=0;a<o.parts.length;a++)o.parts[a]();delete d[o.id]}}}};var A=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()}]);