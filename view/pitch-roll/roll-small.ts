import {svg, customElement, property} from 'lit-element'
import {ObElement} from "../obElement";
import Ship from "../../generated-without-style/PitchRoll/RollShipSmall.svg";
import Pointer from "../../generated-without-style/PitchRoll/RollPointerSmall.svg";
import {watchFaceSmallRender} from "../watchface/watchface-small";
import {renderBlueArch} from "../watchface/blue-arch";
import {InnerWatchFaceType} from "../models";

export function renderRollSmall(cfg: {
  roll: number, lowerRoll: number, upperRoll: number,
  scale: number, ship: any, uuid: string
}) {
        return svg`
<svg viewBox="-32 -32 64 64">
<svg x="-32" y="-32">
${watchFaceSmallRender({
            cross: false,
            rotate: 0,
            showArrow: false,
            startClipDeg: 210,
            endClipDeg: 150,
            primaryTickMarks: 30,
            innerCircle: InnerWatchFaceType.REGULAR,
            uuid: cfg.uuid
        })}
</svg>
${renderBlueArch(31, -cfg.upperRoll * cfg.scale + 180, -cfg.lowerRoll * cfg.scale + 180, 2)}
    <g transform="rotate(${-cfg.roll * cfg.scale})">
      <svg x="-8" y="-8" width="16" height="16">${cfg.ship}</svg>
      <svg x="-6" y="-32" width="12" height="64">${Pointer}</svg>
    </g>
  </svg>`;
    }

@customElement('ob-roll-small')
export class RollSmall extends ObElement {
    @property({type: Number}) roll = 0;
    @property({type: Number}) lowerRoll = -2;
    @property({type: Number}) upperRoll = 3;
    @property({type: Number}) scale = 5;

    protected render() {
        return renderRollSmall({
          roll: this.roll,
          lowerRoll: this.lowerRoll,
          upperRoll: this.upperRoll,
          scale: this.scale,
          ship: Ship,
          uuid: this.uuid
        });
    }
}

declare global {
  interface HTMLElementTagNameMap {
      'ob-roll-small': RollSmall
  }
}
