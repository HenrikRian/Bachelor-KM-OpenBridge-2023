import {customElement, property, svg} from "lit-element";
import {ObElement} from "../obElement";
import MainEngineArrowLarge from '../../generated-without-style/Thruster/ThrusterMainEngineFrontArrowLarge.svg'
import {renderThrusterElementLarge} from "./thruster-element-large";

@customElement('ob-main-engine-large')
export class MainEngineLarge extends ObElement {
    @property({type: Number}) target = 0;
    @property({type: Number}) value = 0;
    @property({type: Number}) suggestedSetpoint = 0;
    @property({type: Boolean}) showTickmarks = true;
    @property({type: Boolean}) showSetPoint = true;
    @property({type: Boolean}) showSuggestedSetPoint = true;

    render() {
        return svg`<svg viewBox="-64 -256 128 512">
    
    <g transform="rotate(90)">
        <svg x="-178" y="-40" height="80" width="17">${MainEngineArrowLarge}</svg>
      <svg x="-256" y="-64" width="512" height="128">
      ${renderThrusterElementLarge({
            showArrow: false,
            value: this.value,
            target: this.target,
            showSetPoint: this.showSetPoint,
            suggestedSetpoint: this.suggestedSetpoint, 
            showSuggestedSetPoint: this.showSuggestedSetPoint, 
            showTickmarks: this.showTickmarks
        })}
      </svg>
    </g>
  </svg>`
    }
}

