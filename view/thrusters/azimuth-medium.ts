import {customElement, property, svg} from "lit-element";
import {ObElement} from "../obElement";
import {renderThrusterElementMedium} from "./thruster-element-medium";
import {watchFaceMediumRender} from "../watchface/watchface-medium";

@customElement('ob-azimuth-medium')
export class AzimuthMedium extends ObElement {
    @property({type: Number}) target = 0;
    @property({type: Number}) value = 0;
    @property({type: Number}) angle = 0;

    render() {
        return svg`<svg viewBox="-128 -128 256 256">
    <svg width="256" height="256" x="-128" y="-128">
        ${watchFaceMediumRender({
                innerCircle: "regular",
                primaryTickMarks: 90,
                secondaryTickMarks: 10,
                showLabels: false,
                rotate: 0,
                cross: false,
                startClipDeg: 0,
                endClipDeg: 0,
                uuid: this.uuid
            })}
    </svg>
    <g transform="rotate(${this.angle + 90})">
      <svg :target="target" :value="value" width="256" height="40" x="-128" y="-20">
      ${renderThrusterElementMedium({target: this.target, value: this.value, showArrow: true})}
      </svg>
    </g>
  </svg>`
    }
}
