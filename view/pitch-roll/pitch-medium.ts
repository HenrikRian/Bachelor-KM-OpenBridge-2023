import {svg, customElement, property, css} from 'lit-element'
import {ObElement} from "../obElement";
import Ship from "../../generated-without-style/PitchRoll/PitchShipMedium.svg";
import Pointer from "../../generated-without-style/PitchRoll/PitchPointerMedium.svg";
import {watchFaceMediumRender} from "../watchface/watchface-medium";
import {renderBlueArch} from "../watchface/blue-arch";

@customElement('ob-pitch-medium')
export class PitchMedium extends ObElement {
    @property({type: Number}) pitch = 0;
    @property({type: Number}) lowerPitch = -2;
    @property({type: Number}) upperPitch = 3;
    @property({type: Number}) scale = 5;

    static get styles() {
        return [
            super.styles,
            css`
        .label {
            text-anchor: middle;
            dominant-baseline: middle;
            font-size: var(--font-ui-label-active-size);
            font-family: "Open Sans", sans-serif;
            font-weight: var(--font-ui-label-active-weight);
            line-height: var(--font-ui-label-active-line-height);
        }`]
    }

    protected render() {
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
            innerCircle: "regular"
        })}
</svg>
${renderBlueArch(89, this.lowerPitch * this.scale + 270, this.upperPitch * this.scale + 270, 2)}
    <g transform="rotate(${this.pitch * this.scale})">
      <svg x="-48" y="-16" width="96" height="32">${Ship}</svg>
      <svg x="-128" y="-24" width="256" height="48">${Pointer}</svg>
    </g>
    <text x="-114" y="0" class="label">0</text>
  </svg>`;
    }
}
