import {customElement, property, svg} from "lit-element";
import {ObElement} from "../obElement";
import TicBarLarge from '../../generated-without-style/ROT/TicBarLarge.svg'
import FlatArrowHdgLarge from '../../generated-without-style/HDG_COG/FlatArrowHdgLarge.svg'

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
  <svg x="-256" y="0" width="512" height="64">${TicBarLarge}</svg>
  <svg x="${x}" y="48" width="48" height="64">${FlatArrowHdgLarge}</svg>
  </svg>`;
    }
}
