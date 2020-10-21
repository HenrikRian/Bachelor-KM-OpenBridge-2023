import {svg, customElement, property} from 'lit-element'
import {ObElement} from "../obElement";
import Rudder from "../../generated-without-style/Rudder/RudderMedium.svg";
import SetPoint from "../../generated-without-style/SetPoint/AngleMedium.svg";
import {watchFaceMediumRender} from "../watchface/watchface-medium";
import {InnerWatchFaceType} from "../models";

@customElement('ob-rudder-medium')
export class RudderMedium extends ObElement {
    @property({type: Number}) rudderAngle = 0
    @property({type: Number}) rudderSetPointAngle = 0
    @property({type: Number}) clipAngle = 90
    @property({type: String}) showPortStarboard = "true"
    @property({type: String}) showSetPoint = "true"

    protected render(): unknown {

        return svg`
<svg viewBox="-128 -128 256 256">
<svg x="-128" y="-128">
${watchFaceMediumRender({
            cross: false,
            rotate: 0,
            showLabels: false,
            startClipDeg: 180 + this.clipAngle,
            endClipDeg: 180 - this.clipAngle,
            primaryTickMarks: 90,
            secondaryTickMarks: 5,
            innerCircle: this.showPortStarboard === "true" ? InnerWatchFaceType.PORT_STARBOARD : InnerWatchFaceType.REGULAR,
            uuid: this.uuid
        })}
</svg>
${this.showSetPoint === "true" ? svg`
    <g transform="rotate(${180-this.rudderSetPointAngle})">
      <svg x="-12" y="-128" width="24" height="256">
        ${SetPoint}
      </svg>
    </g>`: undefined}
    <g transform="rotate(${-this.rudderAngle})">
      <svg x="-24" y="-128" width="48" height="256">
        ${Rudder}
      </svg>
    </g>
  </svg>`;
    }
}
