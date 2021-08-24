import { customElement, property, svg } from "lit-element";
import { ObElement } from "../obElement";
import BarSvg from "../../generated-without-style/BARS/BarVerticalPositive100BarLarge.svg";
import { renderVerticalActiveBarLarge } from "./bars";

@customElement("ob-bar-vertical-positive-large")
export class BarVerticalPositiveLarge extends ObElement {
  @property({ type: Number }) value = 0;
  @property({ type: Number }) range = 100;

  protected render(): unknown {
    return svg`
    <svg viewBox="-72 -256 144 512">
        <svg x="-24" y="-209.5">${BarSvg}</svg>
        ${renderVerticalActiveBarLarge(0, this.value, {
          yMin: 207.5,
          yMax: -208.5,
          valueMin: 0,
          valueMax: this.range,
          showBar0: false,
          showBar1: true,
        })}
                <text x="-40" y="-208.5" class="ob-font-ui-body-active ob-right-label">${
                  this.range
                }</text>
        <text x="-40" y="208.5" class="ob-font-ui-body-active ob-right-label">0</text>
        <text x="-40" y="0" class="ob-font-ui-body ob-right-label">${
          this.range * 0.5
        }</text>
        <text x="-40" y="104.25" class="ob-font-ui-body ob-right-label">${
          this.range * 0.25
        }</text>
        <text x="-40" y="-104.25" class="ob-font-ui-body ob-right-label">${
          this.range * 0.75
        }</text>
    </svg>`;
  }
}
