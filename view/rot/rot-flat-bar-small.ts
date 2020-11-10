import {customElement, property, svg} from "lit-element";
import {ObElement} from "../obElement";
import TicBarSmall from '../../generated-without-style/ROT/TicBarSmall.svg'

@customElement('ob-rot-flat-bar-small')
export class RotFlatBarSmall extends ObElement {
    @property({type: Number}) rateOfTurn = 0;

    render() {
        const scale = 28;
        const range = 40;
        const xMark = (this.rateOfTurn / range) * scale;

        return svg`<svg viewBox="-32 0 64 24">
    <svg x="-32" y="0" width="64" height="24">${TicBarSmall}</svg>
    <rect id="bar" y="20" x="${Math.min(xMark, 0)}" width="${Math.abs(xMark)}" height="4"
          class="ob-instrument-dynamic-color-fill"/>
  </svg>`
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ob-rot-flat-bar-small': RotFlatBarSmall
    }
}
