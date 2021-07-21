import {svg, customElement, property} from 'lit-element'
import {ObElement} from "../obElement";
import HeadingMedium from "../../generated-without-style/HDG_COG/HdgCircularMedium.svg";
import CogMedium from "../../generated-without-style/HDG_COG/CogCircularMedium.svg";
import SetPoint from "../../generated-without-style/HDG_COG/SetPointCircularMedium.svg";
import {watchFaceMediumRender} from "../watchface/watchface-medium";
import {InnerWatchFaceType} from "../models";

@customElement('ob-hdg-medium')
export class HdgMedium extends ObElement {
    @property({type: Number}) heading = 0
    @property({type: Number}) courseOverGround = 0
    @property({type: Number}) setPoint = 0
    @property({type: Boolean}) northUp = false
    @property({type: Boolean}) showCourseOverGround = true
    @property({type: Boolean}) showSetPoint = true

    protected render(): unknown {
        const northUp = this.northUp;
        const watchFaceAngle = northUp ? 0 : -this.heading;
        const rotate = northUp ? this.heading : 0;
        const rotateCog = northUp ? this.courseOverGround : this.setPoint - this.courseOverGround;
        const rotateSetPoint = northUp ? this.setPoint : this.setPoint - this.heading;

        return svg`
<svg viewBox="-128 -128 256 256">
<svg x="-128" y="-128">
${watchFaceMediumRender({
            cross: false,
            rotate: watchFaceAngle,
            showLabels: true,
            startClipDeg: 0,
            endClipDeg: 0,
            primaryTickMarks: 45,
            secondaryTickMarks: 5,
            innerCircle: InnerWatchFaceType.REGULAR,
            uuid: this.uuid
        })}
</svg>
${this.showCourseOverGround ? svg`
        <g transform="rotate(${rotateCog})">
          <svg x="-16" y="-128" width="32" height="256">
            ${CogMedium}
          </svg>
        </g>` : null
    }
    <g transform="rotate(${rotate})">
      <svg x="-16" y="-128" width="32" height="256">
        ${HeadingMedium}
      </svg>
    </g>
        ${this.showSetPoint ? 
            svg`
        <g transform = "rotate(${rotateSetPoint})" >
            <svg x = "-16" y="-128" width="32" height="256">
            ${SetPoint}
            </svg>
        </g>`: null
    }
  </svg>`;
    }
}
