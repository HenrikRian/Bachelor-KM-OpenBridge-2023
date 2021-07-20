import {customElement, property, svg} from "lit-element";
import {ObElement} from "../obElement";
import LabelMedium from '../../generated-without-style/ROT/FlatLabelMedium.svg'
import TicBarMedium from '../../generated-without-style/ROT/TicBarMedium.svg'
import FlatArrowHdgMedium from '../../generated-without-style/ROT/ArrowMedium.svg'

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
  <svg x="-120" y="0" width="240" height="16">${LabelMedium}</svg>
  <rect x="-112.5" y="16" width="225" height="16" class="ob-instrument-frame-color-fill"/>
  <svg x="-112.5" y="16" width="225" height="16">${TicBarMedium}</svg>
  <svg x="${x}" y="24" width="24" height="32">${FlatArrowHdgMedium}</svg>
  </svg>`;
    }
}
