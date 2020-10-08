import {svg, customElement, property, css} from 'lit-element'
import {ObElement} from "../obElement";
import Ship from "../../generated-without-style/PitchRoll/PitchShipLarge.svg";
import Pointer from "../../generated-without-style/PitchRoll/PitchPointerLarge.svg";
import {watchFaceLargeRender} from "../watchface/watchface-large";
import {renderBlueArch} from "../watchface/blue-arch";

@customElement('ob-pitch-large')
export class PitchLarge extends ObElement {
    @property({type: Number}) pitch = 0;
    @property({type: Number}) lowerPitch = -2;
    @property({type: Number}) upperPitch = 3;
    @property({type: Number}) scale = 5;

    static get styles() {
        return [
            super.styles,
            css`    
        .ob-font-ui-body-active {
          font-size: var(--font-ui-body-active-size);
          font-family: "Open Sans", sans-serif;
          font-weight: var(--font-ui-body-active-weight);
          line-height: var(--font-ui-body-active-line-height);
        }
        
        .ob-font-ui-body {
          font-size: var(--font-ui-body-size);
          font-family: "Open Sans", sans-serif;
          font-weight: var(--font-ui-body-weight);
          line-height: var(--font-ui-body-line-height);
        }
        }`]
    }


    protected render() {
        const yLabel6 = 232 * Math.cos(300 * Math.PI / 180);
        const xLabel6 = 232 * Math.sin(300 * Math.PI / 180);
        return svg`
<svg viewBox="-256 -256 512 512">
<svg x="-256" y="-256">
${watchFaceLargeRender({
            cross: false,
            rotate: 0,
            showLabels: false,
            startClipDeg: 300,
            endClipDeg: 240,
            primaryTickMarks: 30,
            secondaryTickMarks: 5,
            innerCircle: "regular",
            tertiaryTickMarks: false
        })}
</svg>
${renderBlueArch(178, this.lowerPitch * this.scale + 270, this.upperPitch * this.scale + 270, 4)}
    <g transform="rotate(${this.pitch * this.scale})">
      <svg x="-96" y="-32" width="192" height="64">${Ship}</svg>
      <svg x="-264" y="-24" width="512" height="48">${Pointer}</svg>
    </g>
    <text x="-232" y="0" class="ob-font-ui-body-active ob-center-label">0°</text>
    <text x="${xLabel6}" y="${yLabel6}" class="ob-font-ui-body ob-center-label">-6°</text>
    <text x="${xLabel6}" y="${-yLabel6}" class="ob-font-ui-body ob-center-label">6°</text>
  </svg>`;
    }
}
