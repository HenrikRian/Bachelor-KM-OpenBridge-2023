import {svg, customElement, property} from 'lit-element'
import {ObElement} from "../obElement";
import HeadingLarge from "../../generated-without-style/HDG_COG/HeadingLarge.svg";
import CogLarge from "../../generated-without-style/HDG_COG/CogLarge.svg";
import {watchFaceLargeRender} from "../watchface/watchface-large";

@customElement('ob-hdg-large')
export class HdgLarge extends ObElement {
    @property({type: Number}) heading = 0
    @property({type: Number}) courseOverGround = 0
    @property({type: String}) northUp = "false"

    protected render(): unknown {
        const northUp = this.northUp === "true"
        const watchFaceAngle = northUp ? 0 : -this.heading;
        const rotate = northUp ? this.heading : 0;
        const rotateCog = northUp ? this.courseOverGround : this.courseOverGround - this.heading;

        return svg`
<svg viewBox="-256 -256 512 512">
<svg x="-256" y="-256">
${watchFaceLargeRender({
            cross: false,
            rotate: watchFaceAngle,
            showLabels: true,
            startClipDeg: 0,
            endClipDeg: 0,
            primaryTickMarks: 45,
            secondaryTickMarks: 5,
            innerCircle: "regular"
        })}
</svg>
    <g transform="rotate(${rotateCog})">
      <svg x="-32" y="-256" width="64" height="512">
        ${CogLarge}
      </svg>
    </g>
    <g transform="rotate(${rotate})">
      <svg x="-32" y="-256" width="64" height="512">
        ${HeadingLarge}
      </svg>
    </g>
  </svg>`;
    }
}
