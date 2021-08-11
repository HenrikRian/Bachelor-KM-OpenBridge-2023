import {customElement, property, svg} from "lit-element";
import {ObElement} from "../obElement";
import ThrusterElementCenterLineLarge from '../../generated-without-style/Thruster/ThrusterElementCenterLineLarge.svg'
import ThrusterElementTrackLarge from '../../generated-without-style/Thruster/ThrusterElementTrackLarge.svg'
import ThrusterElementTickmarksLarge from '../../generated-without-style/Thruster/ThrusterElementTickmarksLarge.svg'
import ThrusterPowerInputLarge from '../../generated-without-style/Thruster/ThrusterPowerInputLarge.svg'
import FrontArrowLarge from '../../generated-without-style/Thruster/ThrusterFrontArrowLarge.svg'
import PointerLarge from '../../generated-without-style/Thruster/ThrusterEndPointerLarge.svg'
import ThrusterSuggestedSetPointLarge from '../../generated-without-style/Thruster/ThrusterSuggestedSetPointLarge.svg'


function value2width(value: number): number {
    const width = 319;
    return -value * width / 200;
}

export function renderThrusterElementLarge(option: {
    target: number, value: number, suggestedSetpoint: number, showArrow: boolean,
    showSetPoint: boolean, showTickmarks: boolean,
    showSuggestedSetPoint: boolean
}) {
    const xTarget = value2width(option.target) - 12;
    const xSuggested = value2width(option.suggestedSetpoint) - 12;
    const xValue = option.value > 0 ? value2width(option.value) : 0;
    const xBar = value2width(option.value) - 1;
    const widthValue = Math.abs(value2width(option.value));


    return svg`


        <svg viewBox="-256 -52 512 104">
            <svg width="320" height="80" y="-40" x="-160" viewBox="0 0 320 80">
                <path d="M0.5 0.5H316C317.933 0.5 319.5 2.067 319.5 4V76C319.5 77.933 317.933 79.5 316 79.5H0.5V0.5Z" class="ob-instrument-frame-color-fill"/>
                <path d="M0.5 0.5H316C317.933 0.5 319.5 2.067 319.5 4V76C319.5 77.933 317.933 79.5 316 79.5H0.5V0.5Z" class="ob-border-outline-color-stroke" fill="none"/>
            </svg>
            ${option.showTickmarks ? svg`
            <svg x="-159" y="-39" width="318" height="78">${ThrusterElementTickmarksLarge}</svg>` : null}
            <svg x="-159" y="-24" width="318" height="48">${ThrusterElementTrackLarge}</svg>
            <svg x="-2" y="-40" width="4" height="80">${ThrusterElementCenterLineLarge}</svg>
            
            ${option.showArrow ? svg`
            <svg y="-40" x="-176">${FrontArrowLarge}</svg>
            <svg y="-1" x="160">${PointerLarge}</svg>` : null}
            <rect id="Bar" x="${xValue}" y="-24" width="${widthValue}" height="48"
                  class="ob-instrument-dynamic-color-fill"/>
            <rect id="EndLine" width="2" height="64" y="-32" x="${xBar}"
                  class="ob-instrument-dynamic-color-fill"/>
            ${option.showSuggestedSetPoint ? svg`
            <svg x="${xSuggested}" y="-40">${ThrusterSuggestedSetPointLarge}</svg>` : null}
            ${option.showSetPoint ? svg`
            <svg x="${xTarget}" y="-40">${ThrusterPowerInputLarge}</svg>` : undefined}
        </svg>`;
}

@customElement('ob-thruster-element-large')
export class ThrusterElementLarge extends ObElement {
    @property({type: Number}) target = 0;
    @property({type: Number}) value = 0;
    @property({type: Number}) suggestedSetpoint = 0;
    @property({type: Boolean}) showTickmarks = true;
    @property({type: Boolean}) showArrow = true;
    @property({type: Boolean}) showSetPoint = true;
    @property({type: Boolean}) showSuggestedSetPoint = true;


    render() {
        return renderThrusterElementLarge({
            target: this.target,
            value: this.value,
            showArrow: this.showArrow,
            showSetPoint: this.showSetPoint,
            suggestedSetpoint: this.suggestedSetpoint,
            showSuggestedSetPoint: this.showSuggestedSetPoint,
            showTickmarks: this.showTickmarks
        });
    }
}
