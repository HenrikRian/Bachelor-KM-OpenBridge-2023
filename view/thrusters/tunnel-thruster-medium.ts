import {customElement, property, svg} from "lit-element";
import {ObElement} from "../obElement";
import {renderThrusterElementMedium} from "./thruster-element-medium";

@customElement('ob-tunnel-thruster-medium')
export class AzimuthMedium extends ObElement {
  @property({type: Number}) target = 0;
  @property({type: Number}) value = 0;

  render() {
    return svg`<svg viewBox="-128 -20 256 40">
    <svg x="-128" y="-20" width="256" height="40">
    ${renderThrusterElementMedium({value: this.value, target: this.target, showArrow: false})}
    </svg>
  </svg>`;
  }
}
