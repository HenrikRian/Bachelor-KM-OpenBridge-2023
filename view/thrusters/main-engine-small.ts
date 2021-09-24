import { customElement, property, svg } from "lit-element";
import { ObElement } from "../obElement";
import { renderThrusterElementSmall } from "./thruster-element-small";

@customElement("ob-main-engine-small")
export class MainEngineSmall extends ObElement {
  @property({ type: Number }) value = 0;

  render() {
    return svg`<svg viewBox="-8 -32 16 64">
    <g transform="rotate(90)">
      <svg x="-32" y="-5" width="64" height="10">
      ${renderThrusterElementSmall({ showArrow: true, value: this.value })}
      </svg>
    </g>
  </svg>`;
  }
}
