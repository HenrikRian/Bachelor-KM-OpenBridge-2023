import {customElement, property, svg} from "lit-element";
import {ObElement} from "../obElement";
import {renderThrusterElementLarge, WidthSize} from "./thruster-element-large";
import {watchFaceLargeRender} from "../watchface/watchface-large";
import SetPoint from "../../generated-without-style/SetPoint/AngleLarge.svg";

@customElement('ob-azimuth-large')
export class AzimuthLarge extends ObElement {
    @property({type: Number}) target = 0;
    @property({type: Number}) value = 0;
    @property({type: Number}) angle = 0;
    @property({type: Number}) targetAngle = 0;
    @property({type: String}) thrusterWidth = WidthSize.REGULAR;

    render() {
        return svg`<svg viewBox="-256 -256 512 512">
    <svg width="512" height="512" x="-256" y="-256">
        ${watchFaceLargeRender({
            innerCircle: "regular",
            primaryTickMarks: 180,
            secondaryTickMarks: 10,
            tertiaryTickMarks: true,
            showLabels: false,
            rotate: 0,
            cross: false,
            startClipDeg: 0,
            endClipDeg: 0,
            uuid: this.uuid
        })}
    </svg>
    <g transform="rotate(${this.angle + 90})">
      <svg width="512" height="104" x="-256" y="-52">
      ${renderThrusterElementLarge({
            target: this.target,
            value: this.value,
            showArrow: true,
            width: this.thrusterWidth
        })}
      </svg>
    </g>
    <g transform="rotate(${this.targetAngle})">
        <svg x="-24" y="-256">${SetPoint}</svg>
    </g>
  </svg>`
    }
}
