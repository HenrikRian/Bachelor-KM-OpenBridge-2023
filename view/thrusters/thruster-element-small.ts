import { customElement, property, svg } from "lit-element";
import { ObElement } from "../obElement";
import ThrusterStaticSmall from "../../generated-without-style/Thruster/ThrusterStaticSmall.svg";
import FrontArrowSmall from "../../generated-without-style/Thruster/FrontArrowSmall.svg";

function value2width(value: number): number {
  const width = 24;
  return (-value * width) / 100;
}

export function renderThrusterElementSmall(option: {
  value: number;
  showArrow: boolean;
}) {
  const xValue = option.value > 0 ? value2width(option.value) : 0;
  const widthValue = Math.abs(value2width(option.value));

  return svg`<svg viewBox="-32 -8 64 16">
      <svg y="-8" x="-28">${ThrusterStaticSmall}</svg>
      ${
        option.showArrow
          ? svg`
      <svg y="-4" x="-28">${FrontArrowSmall}</svg>`
          : null
      }
      <rect id="Bar" x="${xValue}" y="-4" width="${widthValue}" height="8"
            class="ob-instrument-dynamic-color-fill"/>
  </svg>`;
}

@customElement("ob-thruster-element-small")
export class ThrusterElementSmall extends ObElement {
  @property({ type: Number }) value = 0;
  @property({ type: Boolean }) showArrow = true;

  render() {
    return renderThrusterElementSmall({
      value: this.value,
      showArrow: this.showArrow,
    });
  }
}
