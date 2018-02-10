import { SVG_NS } from '../settings';

export default class Pause {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  render(svg) {
    let text = document.createElementNS(SVG_NS, 'text');
			text.setAttributeNS(null, 'x', this.width/2 -100);
			text.setAttributeNS(null, 'y', this.height/2);
			text.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
    	text.setAttributeNS(null, 'font-size', 50);
			text.setAttributeNS(null, 'fill', 'mediumpurple');
			text.textContent = 'PAWSED';
			svg.appendChild(text);
			console.log(text);
  }
}