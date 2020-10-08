import {svg, customElement, property, css} from 'lit-element'
import {ObElement} from "../obElement";
import Ship from "../../generated-without-style/PitchRoll/RollShipLarge.svg";
import Pointer from "../../generated-without-style/PitchRoll/RollPointerLarge.svg";
import {watchFaceLargeRender} from "../watchface/watchface-large";
import {renderBlueArch} from "../watchface/blue-arch";

@customElement('ob-roll-large')
export class RollLarge extends ObElement {
    @property({type: Number}) roll = 0;
    @property({type: Number}) lowerRoll = -2;
    @property({type: Number}) upperRoll = 3;
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
        const yLabel6 = 232 * Math.cos(30 * Math.PI / 180);
        const xLabel6 = 232 * Math.sin(30 * Math.PI / 180);
        return svg`
<svg viewBox="-256 -256 512 512">
<svg x="-256" y="-256">
${watchFaceLargeRender({
            cross: false,
            rotate: 0,
            showLabels: false,
            startClipDeg: 210,
            endClipDeg: 150,
            primaryTickMarks: 30,
            secondaryTickMarks: 5,
            innerCircle: "regular",
            tertiaryTickMarks: false
        })}
</svg>
${renderBlueArch(178, -this.upperRoll * this.scale + 180, -this.lowerRoll * this.scale + 180, 4)}
    <g transform="rotate(${-this.roll * this.scale})">
      <svg x="-32" y="-32" width="64" height="64">${Ship}</svg>
      <svg x="-24" y="-256" width="48" height="512">${Pointer}</svg>
    </g>
    <text x="0" y="232" class="ob-font-ui-body-active ob-center-label">0°</text>
    <text x="${-xLabel6}" y="${yLabel6}" class="ob-font-ui-body ob-center-label">-${30/this.scale}°</text>
    <text x="${xLabel6}" y="${yLabel6}" class="ob-font-ui-body ob-center-label">${30/this.scale}°</text>
  </svg>`;
    }
}
