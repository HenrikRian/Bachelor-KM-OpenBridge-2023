import {customElement, property, svg} from "lit-element";
import {ObElement} from "../obElement";
import LabelSmall from '../../generated-without-style/ROT/FlatLabelSmall.svg'
import TicBarSmall from '../../generated-without-style/ROT/TicBarSmall.svg'
import FlatArrowHdgSmall from '../../generated-without-style/ROT/ArrowSmall.svg'

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
  <svg x="-28" y="0" width="56" height="16">${LabelSmall}</svg>
  <rect x="-28.5" y="16" width="57" height="8" class="ob-instrument-frame-color-fill"/>
  <svg x="-28.5" y="16" width="57" height="8">${TicBarSmall}</svg>
  
  <svg x="${x}" y="20" width="24" height="20">${FlatArrowHdgSmall}</svg>
  </svg>`;
    }
}
