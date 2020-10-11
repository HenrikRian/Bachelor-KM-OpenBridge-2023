import {customElement, property, svg} from "lit-element";
import {ObElement} from "../obElement";
import {renderThrusterElementSmall} from "./thruster-element-small";
import {watchFaceSmallRender} from "../watchface/watchface-small";
import {InnerWatchFaceType} from "../models";

@customElement('ob-azimuth-small')
export class AzimuthSmall extends ObElement {
    @property({type: Number}) value = 0;
    @property({type: Number}) angle = 0;
    @property({type: String}) showPortStarboard = "false";

    render() {
        return svg`<svg viewBox="-32 -32 64 64">
    <svg width="64" height="64" x="-32" y="-32">
        ${watchFaceSmallRender({
                innerCircle: this.showPortStarboard === "true" ? InnerWatchFaceType.PORT_STARBOARD : InnerWatchFaceType.REGULAR,
                primaryTickMarks: 22.5,
                showArrow: false,
                rotate: 0,
                cross: false,
                startClipDeg: 0,
                endClipDeg: 0,
                uuid: this.uuid
            })}
    </svg>
    <g transform="rotate(${this.angle + 90})">
      <svg width="64" height="64" x="-32" y="-32">
      ${renderThrusterElementSmall({ value: this.value, showArrow: true})}
      </svg>
    </g>
  </svg>`
    }
}
