import {customElement, property, svg} from 'lit-element'
import {ObElement} from "../obElement";
import Rudder from "../../generated-without-style/Rudder/RudderLarge.svg";
import SetPoint from "../../generated-without-style/SetPoint/AngleLarge.svg";
import {watchFaceLargeRender} from "../watchface/watchface-large";
import {InnerWatchFaceType} from "../models";

@customElement('ob-rudder-large')
export class RudderLarge extends ObElement {
    @property({type: Number}) rudderAngle = 0
    @property({type: Number}) rudderSetPointAngle = 0
    @property({type: Number}) clipAngle = 90
    @property({type: Boolean}) showPortStarboard = true
    @property({type: Boolean}) showSetPoint = true

    protected render(): unknown {

        return svg`
<svg viewBox="-256 -256 512 512">
<svg x="-256" y="-256">
${watchFaceLargeRender({
            cross: false,
            labels: {
                show: false
            },
            clip: {
                startDeg: 180 + this.clipAngle,
                endDeg: 180 - this.clipAngle,
            },
            tickmarks: {
                primary: 90,
                secondary: 5
            },
            innerCircle: this.showPortStarboard ? InnerWatchFaceType.PORT_STARBOARD : InnerWatchFaceType.REGULAR,
            uuid: this.uuid
        })}
</svg>
${this.showSetPoint ? svg`
    <g transform="rotate(${180 - this.rudderSetPointAngle})">
      <svg x="-32" y="-256" width="64" height="512">
        ${SetPoint}
      </svg>
    </g>` : null}
    <g transform="rotate(${-this.rudderAngle})">
      <svg x="-48" y="-256" width="96" height="512">
        ${Rudder}
      </svg>
    </g>
  </svg>`;
    }
}
