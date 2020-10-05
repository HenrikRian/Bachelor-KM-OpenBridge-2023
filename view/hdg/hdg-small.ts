import {svg, customElement, property} from 'lit-element'
import {ObElement} from "../obElement";
import HeadingSmall from "../../generated-without-style/HDG_COG/HeadingSmall.svg";
import {watchFaceSmallRender} from "../watchface/watchface-small";

@customElement('ob-hdg-small')
export class HdgSmall extends ObElement{
    @property({type: Number}) heading = 0
    @property({type: String}) northUp = "false"

    protected render(): unknown {
        const northUp = this.northUp==="true"
        const watchFaceAngle =  northUp ? 0 : -this.heading;
        const rotate = northUp ? this.heading : 0;

        return svg`
<svg viewBox="-32 -32 64 64">
<svg x="-32" y="-32">
${watchFaceSmallRender({
            cross: false,
            rotate: watchFaceAngle,
            showArrow: true,
            startClipDeg: 0,
            endClipDeg: 0,
            primaryTickMarks: 45,
            innerCircle: "regular"
        })}
</svg>
    <g transform="rotate(${rotate})">
      <svg x="-8" y="-32" width="16" height="64">
        ${HeadingSmall}
      </svg>
    </g>
  </svg>`;
    }
}
