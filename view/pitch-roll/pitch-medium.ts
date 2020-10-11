import {svg, customElement, property, css} from 'lit-element'
import {ObElement} from "../obElement";
import Ship from "../../generated-without-style/PitchRoll/PitchShipMedium.svg";
import Pointer from "../../generated-without-style/PitchRoll/PitchPointerMedium.svg";
import {watchFaceMediumRender} from "../watchface/watchface-medium";
import {renderBlueArch} from "../watchface/blue-arch";
import { renderPitchLarge } from './pitch-large';
import {InnerWatchFaceType} from "../models";

@customElement('ob-pitch-medium')
export class PitchMedium extends ObElement {
    @property({type: Number}) pitch = 0;
    @property({type: Number}) lowerPitch = -2;
    @property({type: Number}) upperPitch = 3;
    @property({type: Number}) scale = 5;

    protected render() {
        return renderPitchLarge({
      pitch: this.pitch,
      lowerPitch: this.lowerPitch,
      upperPitch: this.upperPitch,
      scale: this.scale,
      uuid: this.uuid
    });
    }
}

export function renderPitchMedium(cfg: {
  pitch: number, lowerPitch: number, upperPitch: number,
  scale: number, uuid: string
}) {
        return svg`
<svg viewBox="-128 -128 256 256">
<svg x="-128" y="-128">
${watchFaceMediumRender({
            cross: false,
            rotate: 0,
            showLabels: false,
            startClipDeg: 300,
            endClipDeg: 240,
            primaryTickMarks: 30,
            secondaryTickMarks: 5,
            innerCircle: InnerWatchFaceType.REGULAR,
            uuid: cfg.uuid
        })}
</svg>
${renderBlueArch(89, cfg.lowerPitch * cfg.scale + 270, cfg.upperPitch * cfg.scale + 270, 2)}
    <g transform="rotate(${cfg.pitch * cfg.scale})">
      <svg x="-48" y="-16" width="96" height="32">${Ship}</svg>
      <svg x="-128" y="-24" width="256" height="48">${Pointer}</svg>
    </g>
    <text x="-114" y="0" class="ob-font-ui-label-active ob-center-label">0</text>
  </svg>`;
    }
