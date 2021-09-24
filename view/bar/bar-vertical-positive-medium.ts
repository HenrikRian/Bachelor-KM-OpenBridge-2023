import { customElement, property, svg } from "lit-element";
import { ObElement } from "../obElement";
import BarSvg from "../../generated-without-style/BARS/BarVerticalPositive100BarMedium.svg";
import { renderVerticalActiveBarMedium } from "./bars";

@customElement("ob-bar-vertical-positive-medium")
export class BarVerticalPositiveMedium extends ObElement {
  @property({ type: Number }) value = 0;
  @property({ type: Number }) range = 100;

  protected render(): unknown {
    const yrange = 104;
    return svg`
    <svg viewBox="-36 -128 72 256">
        <svg x="-16" y="-104.5">${BarSvg}</svg>
        ${renderVerticalActiveBarMedium(0, this.value, {
          yMin: yrange,
          yMax: -yrange,
          valueMin: 0,
          valueMax: this.range,
          showBar0: false,
          showBar1: true,
        })}
        <text x="-13" y="104" class="ob-font-ui-label-active ob-right-label">0</text>
        <text x="-13" y="-104" class="ob-font-ui-label-active ob-right-label">${
          this.range
        }</text>  
    </svg>`;
  }
}
