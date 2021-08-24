import { customElement, property, svg } from "lit-element";
import { ObElement } from "../obElement";
import { renderThrusterElementSmall } from "./thruster-element-small";

@customElement("ob-tunnel-thruster-small")
export class AzimuthSmall extends ObElement {
  @property({ type: Number }) target = 0;
  @property({ type: Number }) value = 0;

  render() {
    return svg`<svg viewBox="-32 -5 64 10">
    <svg x="-32" y="-5" width="64" height="10">
    ${renderThrusterElementSmall({ value: this.value, showArrow: false })}
    </svg>
  </svg>`;
  }
}
