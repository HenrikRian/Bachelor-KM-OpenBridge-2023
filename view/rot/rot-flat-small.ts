import {customElement, property, svg} from "lit-element";
import {ObElement} from "../obElement";
import TicBarSmall from '../../generated-without-style/ROT/TicBarSmall.svg'
import FlatArrowHdgSmall from '../../generated-without-style/HDG_COG/FlatArrowHdgSmall.svg'

@customElement('ob-rot-flat-small')
export class RotFlatSmall extends ObElement {
    @property({type: Number}) rateOfTurn = 0;

    render() {
        const scale = 56 / 2;
        const iconWidth = 24;
        const range = 40;
        const x = this.rateOfTurn / range * scale - iconWidth / 2;
        return svg`
  <svg viewBox="-32 0 64 40">
  <svg x="-32" y="0" width="64" height="24">${TicBarSmall}</svg>
  <svg x="${x}" y="20" width="24" height="20">${FlatArrowHdgSmall}</svg>
  </svg>`;
    }
}
