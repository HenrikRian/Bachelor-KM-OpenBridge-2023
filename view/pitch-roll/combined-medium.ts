import { customElement, property, svg } from 'lit-element'
import { ObElement } from '../obElement';
import { renderPitchMedium } from './pitch-medium';
import { renderRollMedium } from './roll-medium';
import Ship from '../../generated-without-style/PitchRoll/CombinedRollShipMedium.svg';

@customElement('ob-pitch-roll-medium')
export class PitchRollMedium extends ObElement {
  @property({ type: Number }) pitch = 0;
  @property({ type: Number }) lowerPitch = 0;
  @property({ type: Number }) upperPitch = 0;
  @property({ type: Number }) roll = 0;
  @property({ type: Number }) lowerRoll = 0;
  @property({ type: Number }) upperRoll = 0;
  @property({ type: Number }) scale = 5;


  protected render() {
    return svg`
<svg viewBox="0 0 256 256">
    ${ renderPitchMedium({
      pitch: this.pitch,
      lowerPitch: this.lowerPitch,
      upperPitch: this.upperPitch,
      scale: this.scale,
      uuid: this.uuid + '-1'
    })}
    ${ renderRollMedium({
      roll: this.roll,
      lowerRoll: this.lowerRoll,
      upperRoll: this.upperRoll,
      scale: this.scale,
      ship: Ship,
      uuid: this.uuid + '-2'
    })}
</svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
      'ob-pitch-roll-medium': PitchRollMedium
  }
}
