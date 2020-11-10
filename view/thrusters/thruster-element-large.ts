import {customElement, property, svg} from "lit-element";
import {ObElement} from "../obElement";
import ThrusterStaticLarge from '../../generated-without-style/Thruster/ThrusterStaticLarge.svg'
import ThrusterPowerInputLarge from '../../generated-without-style/Thruster/ThrusterPowerInputLarge.svg'
import FrontArrowLarge from '../../generated-without-style/Thruster/FrontArrowLarge.svg'
import PointerLarge from '../../generated-without-style/Thruster/PointerLarge.svg'

import ThrusterStaticLargeMaxWidth from '../../generated-without-style/Thruster/ThrusterStaticLargeMaxWidth.svg'
import ThrusterPowerInputLargeMaxWidth from '../../generated-without-style/Thruster/ThrusterPowerInputLargeMaxWidth.svg'
import FrontArrowLargeMaxWidth from '../../generated-without-style/Thruster/FrontArrowLargeMaxWidth.svg'
import PointerLargeMaxWidth from '../../generated-without-style/Thruster/PointerLargeMaxWidth.svg'

import ThrusterStaticLargeMinWidth from '../../generated-without-style/Thruster/ThrusterStaticLargeMinWidth.svg'
import ThrusterPowerInputLargeMinWidth from '../../generated-without-style/Thruster/ThrusterPowerInputLargeMinWidth.svg'
import FrontArrowLargeMinWidth from '../../generated-without-style/Thruster/FrontArrowLargeMinWidth.svg'
import PointerLargeMinWidth from '../../generated-without-style/Thruster/PointerLargeMinWidth.svg'
import {WidthSize, WidthSizeStrings} from "../models";


function value2width(value: number): number {
    const width = 319;
    return -value * width / 200;
}

export function renderThrusterElementLarge(option: {
    target: number, value: number, showArrow: boolean,
    width: WidthSizeStrings, showSetPoint: boolean
}) {
    const xTarget = value2width(option.target) - 2;
    const xValue = option.value > 0 ? value2width(option.value) : 0;
    const xBar = value2width(option.value) - 1;
    const widthValue = Math.abs(value2width(option.value));

    switch (option.width) {
        case WidthSize.MIN:
            return svg`
                <svg viewBox="-256 -52 512 104">
                    <svg y="-28" x="-160">${ThrusterStaticLargeMinWidth}</svg>
                    ${option.showArrow ? svg`
                    <svg y="-28" x="-192">${FrontArrowLargeMinWidth}</svg>
                    <svg y="-1" x="160">${PointerLargeMinWidth}</svg>` : null}
                    <rect id="Bar" x="${xValue}" y="-12" width="${widthValue}" height="24"
                          class="ob-instrument-dynamic-color-fill"/>
                    <rect id="EndLine" width="2" height="40" y="-20" x="${xBar}"
                          class="ob-instrument-dynamic-color-fill"/>
                    ${option.showSetPoint ? svg`
                    <svg x="${xTarget}" y="-28">${ThrusterPowerInputLargeMinWidth}</svg>` : undefined}
                </svg>`;
        case WidthSize.MAX:
            return svg`
                <svg viewBox="-256 -52 512 104">
                    <svg y="-52" x="-160">${ThrusterStaticLargeMaxWidth}</svg>
                    ${option.showArrow ? svg`
                    <svg y="-52" x="-192">${FrontArrowLargeMaxWidth}</svg>
                    <svg y="-1" x="160">${PointerLargeMaxWidth}</svg>` : null}
                    <rect id="Bar" x="${xValue}" y="-36" width="${widthValue}" height="72"
                          class="ob-instrument-dynamic-color-fill"/>
                    <rect id="EndLine" width="2" height="88" y="-44" x="${xBar}"
                          class="ob-instrument-dynamic-color-fill"/>
                    ${option.showSetPoint ? svg`
                    <svg x="${xTarget}" y="-52">${ThrusterPowerInputLargeMaxWidth}</svg>` : undefined}
                </svg>`;
        case WidthSize.REGULAR:
        default:
            return svg`
                <svg viewBox="-256 -52 512 104">
                    <svg y="-40" x="-160">${ThrusterStaticLarge}</svg>
                    ${option.showArrow ? svg`
                    <svg y="-40" x="-192">${FrontArrowLarge}</svg>
                    <svg y="-1" x="160">${PointerLarge}</svg>` : null}
                    <rect id="Bar" x="${xValue}" y="-24" width="${widthValue}" height="48"
                          class="ob-instrument-dynamic-color-fill"/>
                    <rect id="EndLine" width="2" height="64" y="-32" x="${xBar}"
                          class="ob-instrument-dynamic-color-fill"/>
                    ${option.showSetPoint ? svg`
                    <svg x="${xTarget}" y="-40">${ThrusterPowerInputLarge}</svg>` : undefined}
                </svg>`;

    }
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
    @property({type: Boolean}) showArrow = true;
    @property({type: Boolean}) showSetPoint = true;
    @property({type: String}) width = WidthSize.REGULAR

    render() {
        return renderThrusterElementLarge({
            target: this.target,
            value: this.value,
            showArrow: this.showArrow,
            width: this.width,
            showSetPoint: this.showSetPoint
        });
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ob-thruster-element-large': ThrusterElementLarge
    }
}
