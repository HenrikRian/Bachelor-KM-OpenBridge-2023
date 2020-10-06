import {customElement, property, svg} from "lit-element";
import {ObElement} from "../obElement";
import ThrusterStaticMedium from '../../generated-with-style/Thruster/ThrusterStaticMedium.svg'
import ThrusterPowerInputMedium from '../../generated-with-style/Thruster/ThrusterPowerInputMedium.svg'
import FrontArrowMedium from '../../generated-with-style/Thruster/FrontArrowMedium.svg'
import PointerMedium from '../../generated-with-style/Thruster/PointerMedium.svg'



function value2width(value: number): number {
    const width = 158;
    return -value * width / 200;
}

export function renderThrusterElementMedium(option: { target: number, value: number, showArrow: boolean }) {
    const xTarget = value2width(option.target) - 2;
    const xValue = option.value > 0 ? value2width(option.value) : 0;
    const widthValue = Math.abs(value2width(option.value));

    return svg`<svg viewBox="-128 -20 256 40">
      <svg y="-20" x="-80">${ThrusterStaticMedium}</svg>
      ${option.showArrow ? svg`
      <svg y="-20" x="-96">${FrontArrowMedium}</svg>
      <svg y="-.5" x="80">${PointerMedium}</svg>` : null}
      <rect id="Bar" x="${xValue}" y="-12" width="${widthValue}" height="24" fill="#0080FF"
            class="ob-instrument-dynamic-color-fill"/>
      <svg x="${xTarget}" y="-20">${ThrusterPowerInputMedium}</svg>
  </svg>`
}

@customElement('ob-thruster-element-medium')
export class ThrusterElementMedium extends ObElement {
    @property({type: Number}) target = 0;
    @property({type: Number}) value = 0;
    @property({type: String}) showArrow = "true";

    render() {
        return renderThrusterElementMedium({
            target: this.target,
            value: this.value,
            showArrow: this.showArrow === "true"
        });
    }
}
