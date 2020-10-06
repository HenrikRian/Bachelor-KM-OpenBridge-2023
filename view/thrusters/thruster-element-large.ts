import {customElement, property, svg} from "lit-element";
import {ObElement} from "../obElement";
import ThrusterStaticLarge from '../../generated-with-style/Thruster/ThrusterStaticLarge.svg'
import ThrusterPowerInputLarge from '../../generated-with-style/Thruster/ThrusterPowerInputLarge.svg'
import FrontArrowLarge from '../../generated-with-style/Thruster/FrontArrowLarge.svg'
import PointerLarge from '../../generated-with-style/Thruster/PointerLarge.svg'


function value2width(value: number): number {
    const width = 319;
    return -value * width / 200;
}

export function renderThrusterElementLarge(option: { target: number, value: number, showArrow: boolean }) {
    const xTarget = value2width(option.target) - 2;
    const xValue = option.value > 0 ? value2width(option.value) : 0;
    const xBar = value2width(option.value) - 1;
    const widthValue = Math.abs(value2width(option.value));

    return svg`
<svg viewBox="-256 -40 512 80">
    <svg y="-40" x="-160">${ThrusterStaticLarge}</svg>
    ${option.showArrow ? svg`
    <svg y="-40" x="-192">${FrontArrowLarge}</svg>
    <svg y="-1" x="160">${PointerLarge}</svg>` : null}
    <rect id="Bar" x="${xValue}" y="-24" width="${widthValue}" height="48" fill="#0080FF"
          class="ob-instrument-dynamic-color-fill"/>
    <rect id="EndLine" width="2" height="64" y="-32" x="${xBar}" fill="#0080FF"
          class="ob-instrument-dynamic-color-fill"/>
    <svg x="${xTarget}" y="-40">${ThrusterPowerInputLarge}</svg>
  </svg>`;
}

@customElement('ob-thruster-element-large')
export class ThrusterElementLarge extends ObElement {
    @property({type: Number}) target = 0;
    @property({type: Number}) value = 0;
    @property({type: String}) showArrow = "true";

    render() {
        return renderThrusterElementLarge({
            target: this.target,
            value: this.value,
            showArrow: this.showArrow === "true"
        });
    }
}
