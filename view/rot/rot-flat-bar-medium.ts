import {customElement, property, svg} from "lit-element";
import {ObElement} from "../obElement";
import TicBarMedium from '../../generated-without-style/ROT/TicBarMedium.svg'

@customElement('ob-rot-flat-bar-medium')
export class RotFlatBarMedium extends ObElement {
    @property({type: Number}) rateOfTurn = 0;

    render() {
        const scale = 112;
        const range = 40;
        const xMark = (this.rateOfTurn / range) * scale ;

        return svg`<svg viewBox="-128 0 256 56">
    <svg x="-128" y="0" width="256" height="32">${TicBarMedium}</svg>
    <rect id="bar" y="28" x="${Math.min(xMark, 0)}" width="${Math.abs(xMark)}" height="4" fill="#0080FF"
          class="ob-instrument-dynamic-color-fill"/>
    <rect id="mark" y="24" x="${xMark - 0.5}" width="1" height="8" fill="#0080FF" class="ob-instrument-dynamic-color-fill"/>
  </svg>`
    }
}
