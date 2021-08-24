import { customElement, property, svg } from "lit-element";
import { ObElement } from "../obElement";
import Ship from "../../generated-without-style/PitchRoll/PitchShipSmall.svg";
import Pointer from "../../generated-without-style/PitchRoll/PitchPointerSmall.svg";
import { watchFaceSmallRender } from "../watchface/watchface-small";
import { renderBlueArch } from "../watchface/blue-arch";
import { InnerWatchFaceType } from "../models";

@customElement("ob-pitch-small")
export class PitchSmall extends ObElement {
  @property({ type: Number }) pitch = 0;
  @property({ type: Number }) lowerPitch = -2;
  @property({ type: Number }) upperPitch = 3;
  @property({ type: Number }) scale = 5;

  protected render() {
    return renderPitchSmall({
      pitch: this.pitch,
      lowerPitch: this.lowerPitch,
      upperPitch: this.upperPitch,
      scale: this.scale,
      uuid: this.uuid,
    });
  }
}

export function renderPitchSmall(cfg: {
  pitch: number;
  lowerPitch: number;
  upperPitch: number;
  scale: number;
  uuid: string;
}) {
  return svg`
<svg viewBox="-32 -32 64 64">
<svg x="-32" y="-32">
${watchFaceSmallRender({
  cross: false,
  rotate: 0,
  startClipDeg: 300,
  endClipDeg: 240,
  primaryTickMarks: 30,
  showArrow: false,
  innerCircle: InnerWatchFaceType.REGULAR,
  uuid: cfg.uuid,
})}
</svg>
${renderBlueArch(
  31,
  cfg.lowerPitch * cfg.scale + 270,
  cfg.upperPitch * cfg.scale + 270,
  2
)}
    <g transform="rotate(${cfg.pitch * cfg.scale})">
      <svg x="-16" y="-8" width="32" height="16">${Ship}</svg>
      <svg x="-32" y="-6" width="64" height="12">${Pointer}</svg>
    </g>
  </svg>`;
}
