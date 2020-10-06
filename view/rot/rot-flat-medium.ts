import {customElement, property, svg} from "lit-element";
import {ObElement} from "../obElement";
import TicBarMedium from '../../generated-with-style/ROT/TicBarMedium.svg'
import FlatArrowHdgMedium from '../../generated-with-style/HDG_COG/FlatArrowHdgMedium.svg'

@customElement('ob-rot-flat-medium')
export class RotFlatMedium extends ObElement {
    @property({type: Number}) rateOfTurn = 0;

    render() {
        const scale = 224 / 2;
        const iconWidth = 24;
        const range = 40;
        const x = this.rateOfTurn / range * scale - iconWidth / 2;
        return svg`
  <svg viewBox="-128 0 256 56">
  <svg x="-128" y="0" width="256" height="32">${TicBarMedium}</svg>
  <svg x="${x}" y="24" width="24" height="32">${FlatArrowHdgMedium}</svg>
  </svg>`;
    }
}
