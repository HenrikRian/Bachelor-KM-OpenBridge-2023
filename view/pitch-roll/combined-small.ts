import { customElement, property, svg } from 'lit-element'
import { ObElement } from '../obElement';
import { renderPitchSmall } from './pitch-small';
import { renderRollSmall } from './roll-small';
import Ship from '../../generated-without-style/PitchRoll/CombinedRollShipSmall.svg';

@customElement('ob-pitch-roll-small')
export class PitchSmall extends ObElement {
  @property({ type: Number }) pitch = 0;
  @property({ type: Number }) lowerPitch = 0;
  @property({ type: Number }) upperPitch = 0;
  @property({ type: Number }) roll = 0;
  @property({ type: Number }) lowerRoll = 0;
  @property({ type: Number }) upperRoll = 0;
  @property({ type: Number }) scale = 5;


  protected render() {
    return svg`
<svg viewBox="0 0 64 64">
    ${ renderPitchSmall({
      pitch: this.pitch,
      lowerPitch: this.lowerPitch,
      upperPitch: this.upperPitch,
      scale: this.scale,
      uuid: this.uuid + '-1'
    })}
    ${ renderRollSmall({
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
      'ob-pitch-roll-small': PitchSmall
  }
}
