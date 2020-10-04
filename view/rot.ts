import {LitElement, svg, customElement, property, css} from 'lit-element'
import watchface from '../generated-with-style/HDG_COG/WatchFaceMedium.svg'
import arrow from '../generated-with-style/HDG_COG/HeadingMedium.svg'

@customElement('ob-rot')
export class RotView extends LitElement {
    @property({type: Number}) heading = 0;
    @property({attribute: false}) angle = 0;
    intervalHandler: number | null = null;

    static get styles() {
        return css` :host { display: block;}`;
    }

    connectedCallback() {
        super.connectedCallback();
        const dt = 1000 / 60;
        // @ts-ignore
        this.intervalHandler = setInterval(() => {
            this.angle += this.heading * dt / 1000;
        }, dt);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.intervalHandler !== null) {
            clearInterval(this.intervalHandler);
            this.intervalHandler = null;
        }
    }

    render() {
        return svg`
    <svg viewBox="-128 -128 256 256"> 
    <svg width="363" height="363" x="-181.5" y="-181.5">
      ${watchface}
      </svg>
      <g transform="rotate(${this.angle})">
      <svg width="32" height="256" x="-16" y="-128">
      ${arrow}
      </svg>
      </g>
      </svg>
    `
    }
}
