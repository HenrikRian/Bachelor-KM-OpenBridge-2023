import {customElement, property, svg} from "lit-element";
import {ObElement} from "../obElement";
import MainEngineArrowMedium from '../../generated-with-style/Thruster/MainEngineArrowMedium.svg'
import {renderThrusterElementMedium} from "./thruster-element-medium";

@customElement('ob-main-engine-medium')
export class MainEngineMedium extends ObElement {
    @property({type: Number}) target = 0;
    @property({type: Number}) value = 0;

    render() {
        return svg`<svg viewBox="-20 -128 40 256">
    <svg y="-89" x="-20" width="40" height="9">${MainEngineArrowMedium}</svg>
    <g transform="rotate(90)">
      <svg x="-128" y="-20" width="256" height="40">
      ${renderThrusterElementMedium({showArrow: false, value: this.value, target: this.target})}
      </svg>
    </g>
  </svg>`
    }
}

