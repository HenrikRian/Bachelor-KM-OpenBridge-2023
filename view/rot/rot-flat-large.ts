import {customElement, property, svg} from "lit-element";
import {ObElement} from "../obElement";
import LabelLarge from '../../generated-without-style/ROT/FlatLabelLarge.svg'
import TicBarLarge from '../../generated-without-style/ROT/TicBarLarge.svg'
import FlatArrowHdgLarge from '../../generated-without-style/ROT/ArrowLarge.svg'

@customElement('ob-rot-flat-large')
export class RotFlatLarge extends ObElement {
    @property({type: Number}) rateOfTurn = 0;

    render() {
        const scale = 240;
        const iconWidth = 48;
        const range = 40;
        const x = this.rateOfTurn / range * scale - iconWidth / 2;
        return svg`
  <svg viewBox="-256 0 512 112">
  <svg x="-252" y="0" width="504" height="24">${LabelLarge}</svg>
  <rect x="-241" y="32" width="480" height="32" class="ob-instrument-frame-color-fill"/>
  <svg x="-241" y="32" width="482" height="32">${TicBarLarge}</svg>
  <svg x="${x}" y="48" width="48" height="64">${FlatArrowHdgLarge}</svg>
  </svg>`;
    }
}
