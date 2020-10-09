import {svg, customElement, property} from 'lit-element'
import {ObElement} from "../obElement";
import Rudder from "../../generated-without-style/Rudder/RudderSmall.svg";
import {watchFaceSmallRender} from "../watchface/watchface-small";

@customElement('ob-rudder-small')
export class RudderSmall extends ObElement {
    @property({type: Number}) rudderAngle = 0
    @property({type: Number}) clipAngle = 90
    @property({type: String}) showPortStarboard = "true"

    protected render(): unknown {

        return svg`
<svg viewBox="-32 -32 64 64">
<svg x="-32" y="-32">
${watchFaceSmallRender({
            cross: false,
            rotate: 0,
            showArrow: false,
            startClipDeg: 180 + this.clipAngle,
            endClipDeg: 180 - this.clipAngle,
            primaryTickMarks: 90,
            innerCircle: this.showPortStarboard === "true" ? "portStarboard" : "regular",
            uuid: this.uuid
        })}
</svg>
    <g transform="rotate(${-this.rudderAngle})">
      <svg x="-8" y="-32" width="16" height="64">
        ${Rudder}
      </svg>
    </g>
  </svg>`;
    }
}
