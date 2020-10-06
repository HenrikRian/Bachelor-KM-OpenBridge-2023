import {svg, customElement, property} from 'lit-element'
import {ObElement} from "../obElement";
import HeadingMedium from "../../generated-without-style/HDG_COG/HeadingMedium.svg";
import {watchFaceMediumRender} from "../watchface/watchface-medium";

@customElement('ob-hdg-medium')
export class HdgMedium extends ObElement{
    @property({type: Number}) heading = 0
    @property({type: String}) northUp = "false"

    protected render(): unknown {
        const northUp = this.northUp==="true"
        const watchFaceAngle =  northUp ? 0 : -this.heading;
        const rotate = northUp ? this.heading : 0;

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
            innerCircle: "regular"
        })}
</svg>
    <g transform="rotate(${rotate})">
      <svg x="-16" y="-128" width="32" height="256">
        ${HeadingMedium}
      </svg>
    </g>
  </svg>`;
    }
}
