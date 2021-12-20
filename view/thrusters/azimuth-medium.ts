import {customElement, property, svg} from "lit-element";
import {ObElement} from "../obElement";
import {renderThrusterElementMedium} from "./thruster-element-medium";
import {watchFaceMediumRender} from "../watchface/watchface-medium";
import SetPoint from "../../generated-without-style/SetPoint/AngleMedium.svg";
import {InnerWatchFaceType} from "../models";

@customElement('ob-azimuth-medium')
export class AzimuthMedium extends ObElement {
    @property({type: Number}) target = 0;
    @property({type: Number}) value = 0;
    @property({type: Number}) angle = 0;
    @property({type: Number}) targetAngle = 0;
    @property({type: Boolean}) showPortStarboard = false;
    @property({type: Boolean}) showSetPointValue = true;
    @property({type: Boolean}) showSetPointAngle = true;

    render() {
        return svg`<svg viewBox="-128 -128 256 256">
    <svg width="256" height="256" x="-128" y="-128">
        ${watchFaceMediumRender({
            innerCircle: this.showPortStarboard ? InnerWatchFaceType.PORT_STARBOARD : InnerWatchFaceType.REGULAR,
            primaryTickMarks: 90,
            secondaryTickMarks: 10,
            typeOfLabel: true,
            showLabels: false,
            rotate: 0,
            cross: false,
            startClipDeg: 0,
            endClipDeg: 0,
            uuid: this.uuid
        })}
    </svg>
    <g transform="rotate(${this.angle + 90})">
      <svg width="256" height="40" x="-128" y="-20">
      ${renderThrusterElementMedium({
            target: this.target,
            value: this.value,
            showArrow: true,
            showSetPoint: this.showSetPointValue
        })}
      </svg>
    </g>
    ${this.showSetPointAngle ? svg`
    <g transform="rotate(${this.targetAngle})">
        <svg x="-12" y="-128">${SetPoint}</svg>
    </g>` : undefined }
  </svg>`
    }
}
