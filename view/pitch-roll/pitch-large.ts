import { customElement, property, svg } from 'lit-element'
import { ObElement } from '../obElement';
import Ship from '../../generated-without-style/PitchRoll/PitchShipLarge.svg';
import Pointer from '../../generated-without-style/PitchRoll/PitchPointerLarge.svg';
import { watchFaceLargeRender } from '../watchface/watchface-large';
import { renderBlueArch } from '../watchface/blue-arch';
import {InnerWatchFaceType} from "../models";


export function renderPitchLarge(cfg: {
  pitch: number, lowerPitch: number, upperPitch: number,
  scale: number, uuid: string
}) {
  const yLabel6 = 232 * Math.cos(300 * Math.PI / 180);
  const xLabel6 = 232 * Math.sin(300 * Math.PI / 180);
  return svg`
<svg viewBox="-256 -256 512 512">
<svg x="-256" y="-256">
${ watchFaceLargeRender({
    cross: false,
    rotate: 0,
    typeOfLabel: true,
    showLabels: false,
    startClipDeg: 300,
    endClipDeg: 240,
    primaryTickMarks: 30,
    secondaryTickMarks: 5,
    innerCircle: InnerWatchFaceType.REGULAR,
    tertiaryTickMarks: false,
    uuid: cfg.uuid
  }) }
</svg>
${ renderBlueArch(178, cfg.lowerPitch * cfg.scale + 270, cfg.upperPitch * cfg.scale + 270, 4) }
    <g transform="rotate(${ cfg.pitch * cfg.scale })">
      <svg x="-96" y="-32" width="192" height="64">${ Ship }</svg>
      <svg x="-256" y="-24" width="512" height="48">${ Pointer }</svg>
    </g>
    <text x="-232" y="0" class="ob-font-ui-body-active ob-center-label">0°</text>
    <text x="${ xLabel6 }" y="${ yLabel6 }" class="ob-font-ui-body ob-center-label">-${ 30 / cfg.scale }°</text>
    <text x="${ xLabel6 }" y="${ -yLabel6 }" class="ob-font-ui-body ob-center-label">${ 30 / cfg.scale }°</text>
  </svg>`;
}

@customElement('ob-pitch-large')
export class PitchLarge extends ObElement {
  @property({ type: Number }) pitch = 0;
  @property({ type: Number }) lowerPitch = -2;
  @property({ type: Number }) upperPitch = 3;
  @property({ type: Number }) scale = 5;

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
