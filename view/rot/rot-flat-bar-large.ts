import {customElement, property, svg} from "lit-element";
import {ObElement} from "../obElement";
import TicBarLarge from '../../generated-without-style/ROT/TicBarLarge.svg'

@customElement('ob-rot-flat-bar-large')
export class RotFlatBarLarge extends ObElement {
    @property({type: Number}) rateOfTurn = 0;

    render() {
        const scale = 240;
        const range = 40;
        const xMark = (this.rateOfTurn / range) * scale;

        return svg`<svg viewBox="-256 0 512 112">
    <svg x="-256" y="0" width="512" height="64">${TicBarLarge}</svg>
    <rect id="bar" y="56" x="${Math.min(xMark, 0)}" width="${Math.abs(xMark)}" height="8" fill="#160FF"
          class="ob-instrument-dynamic-color-fill"/>
    <rect id="mark" y="48" x="${xMark-1}" width="2" height="16" fill="#160FF" class="ob-instrument-dynamic-color-fill"/>
  </svg>`
    }
}
