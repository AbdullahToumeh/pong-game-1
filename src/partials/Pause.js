import { SVG_NS } from '../settings';

export default class Pause {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  render(svg) {
    let text = document.createElementNS(SVG_NS, 'text');
		text.setAttributeNS(null, 'x', this.width/2 -112);
		text.setAttributeNS(null, 'y', this.height/2);
		text.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
    text.setAttributeNS(null, 'font-size', 50);
		text.setAttributeNS(null, 'fill', '#69409e');
    text.textContent = 'PAWSED';
    
    let text2 = document.createElementNS(SVG_NS, 'text');
		text2.setAttributeNS(null, 'x', (this.width/2 -135));
		text2.setAttributeNS(null, 'y', (this.height/2 +20));
		text2.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
    text2.setAttributeNS(null, 'font-size', 20);
		text2.setAttributeNS(null, 'fill', '#69409e');
    text2.textContent = 'Press SPACE to start';
    
    let p1Ttext = document.createElementNS(SVG_NS, 'text');
    p1Ttext.setAttributeNS(null, 'x', 75);
		p1Ttext.setAttributeNS(null, 'y', 175);
		p1Ttext.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
    p1Ttext.setAttributeNS(null, 'font-size', 20);
		p1Ttext.setAttributeNS(null, 'fill', '#36c2f3');
    p1Ttext.textContent = 'Player 1';

    let p2Text = document.createElementNS(SVG_NS, 'text');
    p2Text.setAttributeNS(null, 'x', 325);
		p2Text.setAttributeNS(null, 'y', 175);
		p2Text.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
    p2Text.setAttributeNS(null, 'font-size', 20);
		p2Text.setAttributeNS(null, 'fill', '#36c2f3');
    p2Text.textContent = 'Player 2';

    let p1Up = document.createElementNS(SVG_NS, 'text');
    p1Up.setAttributeNS(null, 'x', 100);
		p1Up.setAttributeNS(null, 'y', 200);
		p1Up.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
    p1Up.setAttributeNS(null, 'font-size', 20);
		p1Up.setAttributeNS(null, 'fill', '#5ba56e');
    p1Up.textContent = 'a: up';

    let p2Up = document.createElementNS(SVG_NS, 'text');
    p2Up.setAttributeNS(null, 'x', 305);
		p2Up.setAttributeNS(null, 'y', 200);
		p2Up.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
    p2Up.setAttributeNS(null, 'font-size', 20);
		p2Up.setAttributeNS(null, 'fill', '#5ba56e');
    p2Up.textContent = 'ArrowUp: up';

    let p1Down = document.createElementNS(SVG_NS, 'text');
    p1Down.setAttributeNS(null, 'x', 85);
		p1Down.setAttributeNS(null, 'y', 220);
		p1Down.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
    p1Down.setAttributeNS(null, 'font-size', 20);
		p1Down.setAttributeNS(null, 'fill', '#5ba56e');
    p1Down.textContent = 'z: down';

    let p2Down = document.createElementNS(SVG_NS, 'text');
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
}