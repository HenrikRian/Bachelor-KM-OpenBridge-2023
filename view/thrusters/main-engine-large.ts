import {customElement, property, svg} from "lit-element";
import {ObElement} from "../obElement";
import MainEngineArrowLarge from '../../generated-without-style/Thruster/MainEngineArrowLarge.svg'
import {renderThrusterElementLarge, WidthSize} from "./thruster-element-large";

@customElement('ob-main-engine-large')
export class MainEngineLarge extends ObElement {
    @property({type: Number}) target = 0;
    @property({type: Number}) value = 0;


    render() {
        const width = WidthSize.REGULAR;
        return svg`<svg viewBox="-40 -256 80 512">
    <svg y="-178" x="-40" width="80" height="18">${MainEngineArrowLarge}</svg>
    <g transform="rotate(90)">
      <svg x="-256" y="-52" width="512" height="104">
      ${renderThrusterElementLarge({showArrow: false, value: this.value, target: this.target, width: width})}
      </svg>
    </g>
  </svg>`
    }
}

