import {customElement, property, svg} from "lit-element";
import {ObElement} from "../obElement";
import {renderThrusterElementLarge, WidthSize} from "./thruster-element-large";

@customElement('ob-tunnel-thruster-large')
export class AzimuthLarge extends ObElement {
  @property({type: Number}) target = 0;
  @property({type: Number}) value = 0;
  @property({type: String}) width = WidthSize.REGULAR;

  render() {
    return svg`<svg viewBox="-256 -40 512 80">
    <svg x="-256" y="-40" width="512" height="80">
    ${renderThrusterElementLarge({value: this.value, target: this.target, showArrow: false, width: this.width})}
    </svg>
  </svg>`;
  }
}
