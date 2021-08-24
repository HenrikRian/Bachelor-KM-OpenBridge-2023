import {svg, customElement, property} from 'lit-element'
import {ObElement} from "../obElement";
import HeadingLarge from "../../generated-without-style/HDG_COG/HdgCircularLarge.svg";
import CogLarge from "../../generated-without-style/HDG_COG/CogCircularLarge.svg";
import SetPoint from "../../generated-without-style/HDG_COG/SetPointCircularLarge.svg";
import {watchFaceLargeRender} from "../watchface/watchface-large";
import {InnerWatchFaceType} from "../models";

@customElement('ob-hdg-large')
export class HdgLarge extends ObElement {
    @property({type: Number}) heading = 0
    @property({type: Number}) courseOverGround = 0
    @property({type: Number}) setPoint= 0
    @property({type: Boolean}) northUp = false
    @property({type: Boolean}) showCourseOverGround = true
    @property({type: Boolean}) showSetPoint = true

    protected render(): unknown {
        const northUp = this.northUp
        const watchFaceAngle = northUp ? 0 : -this.heading;
        const rotate = northUp ? this.heading : 0;
        const rotateCog = northUp ? this.courseOverGround : this.courseOverGround - this.heading;
        const rotateSetPoint = northUp ? this.setPoint : this.setPoint - this.heading;

        return svg`
<svg viewBox="-256 -256 512 512">
<svg x="-256" y="-256">
${watchFaceLargeRender({
            cross: false,
            labels: {
                show: true,
                rotate: watchFaceAngle,
                nsew: true,
                bold: true
            },
            clip: {startDeg: 0, endDeg: 0},
            tickmarks: {
                primary: 45,
                secondary: 5
            },
            innerCircle: InnerWatchFaceType.REGULAR,
            uuid: this.uuid
        })}
</svg>
    <g transform="rotate(${rotate})">
      <svg x="-32" y="-256" width="64" height="512">
        ${HeadingLarge}
      </svg>
    </g>
    ${this.showCourseOverGround ? svg`
        <g transform="rotate(${rotateCog})">
          <svg x="-32" y="-256" width="64" height="512">
            ${CogLarge}
          </svg>
        </g>` : null
    }
    
    ${this.showSetPoint ? 
            svg`
        <g transform = "rotate(${rotateSetPoint})" >
            <svg x = "-32" y="-256" width="64" height="512">
            ${SetPoint}
            </svg>
        </g>`: null
    }
        
  </svg>`;
    }
}
