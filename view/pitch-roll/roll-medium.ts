import {svg, customElement, property} from 'lit-element'
import {ObElement} from "../obElement";
import Ship from "../../generated-without-style/PitchRoll/RollShipMedium.svg";
import Pointer from "../../generated-without-style/PitchRoll/RollPointerMedium.svg";
import {watchFaceMediumRender} from "../watchface/watchface-medium";
import {renderBlueArch} from "../watchface/blue-arch";

export function renderRollMedium(cfg: {
  roll: number, lowerRoll: number, upperRoll: number,
  scale: number, ship: any, uuid: string
}) {
        return svg`
<svg viewBox="-128 -128 256 256">
<svg x="-128" y="-128">
${watchFaceMediumRender({
            cross: false,
            rotate: 0,
            showLabels: false,
            startClipDeg: 210,
            endClipDeg: 150,
            primaryTickMarks: 30,
            secondaryTickMarks: 5,
            innerCircle: "regular",
            uuid: cfg.uuid
        })}
</svg>
${renderBlueArch(89, -cfg.upperRoll * cfg.scale + 180, -cfg.lowerRoll * cfg.scale + 180, 2)}
    <g transform="rotate(${-cfg.roll * cfg.scale})">
      <svg x="-16" y="-16" width="32" height="32">${cfg.ship}</svg>
      <svg x="-24" y="-128" width="48" height="256">${Pointer}</svg>
    </g>
    <text x="0" y="114" class="ob-font-ui-label-active ob-center-label">0</text>
  </svg>`;
    }

@customElement('ob-roll-medium')
export class RollMedium extends ObElement {
    @property({type: Number}) roll = 0;
    @property({type: Number}) lowerRoll = -2;
    @property({type: Number}) upperRoll = 3;
    @property({type: Number}) scale = 5;

    protected render() {
        return renderRollMedium({
          roll: this.roll,
          lowerRoll: this.lowerRoll,
          upperRoll: this.upperRoll,
          scale: this.scale,
          ship: Ship,
          uuid: this.uuid
        });
    }
}
