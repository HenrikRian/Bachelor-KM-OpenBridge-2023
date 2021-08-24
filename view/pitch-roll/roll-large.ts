import {svg, customElement, property} from 'lit-element'
import {ObElement} from "../obElement";
import Ship from "../../generated-without-style/PitchRoll/RollShipLarge.svg";
import Pointer from "../../generated-without-style/PitchRoll/RollPointerLarge.svg";
import {watchFaceLargeRender} from "../watchface/watchface-large";
import {renderBlueArch} from "../watchface/blue-arch";
import {InnerWatchFaceType} from "../models";

export function renderRollLarge(cfg: {
  roll: number, lowerRoll: number, upperRoll: number,
  scale: number, ship: any, uuid: string
}) {
        const yLabel6 = 232 * Math.cos(30 * Math.PI / 180);
        const xLabel6 = 232 * Math.sin(30 * Math.PI / 180);
        return svg`
<svg viewBox="-256 -256 512 512">
<svg x="-256" y="-256">
${watchFaceLargeRender({
            cross: false,
            labels: {
                rotate: 0,
                show: false,
            },
            clip: {
                startDeg: 210,
                endDeg: 150,
            },
            tickmarks: {
                primary: 30,
                secondary: 5,
                tertiary: false
            },
            innerCircle: InnerWatchFaceType.REGULAR,
            uuid: cfg.uuid
        })}
</svg>
${renderBlueArch(178, -cfg.upperRoll * cfg.scale + 180, -cfg.lowerRoll * cfg.scale + 180, 4)}
    <g transform="rotate(${-cfg.roll * cfg.scale})">
      <svg x="-32" y="-32" width="64" height="64">${cfg.ship}</svg>
      <svg x="-24" y="-256" width="48" height="512">${Pointer}</svg>
    </g>
    <text x="0" y="232" class="ob-font-ui-body-active ob-center-label">0°</text>
    <text x="${-xLabel6}" y="${yLabel6}" class="ob-font-ui-body ob-center-label">-${30/cfg.scale}°</text>
    <text x="${xLabel6}" y="${yLabel6}" class="ob-font-ui-body ob-center-label">${30/cfg.scale}°</text>
  </svg>`;
}


@customElement('ob-roll-large')
export class RollLarge extends ObElement {
    @property({type: Number}) roll = 0;
    @property({type: Number}) lowerRoll = -2;
    @property({type: Number}) upperRoll = 3;
    @property({type: Number}) scale = 5;

    protected render() {
        return renderRollLarge({
          roll: this.roll,
          lowerRoll: this.lowerRoll,
          upperRoll: this.upperRoll,
          scale: this.scale,
          ship: Ship,
          uuid: this.uuid
        });
    }
}
