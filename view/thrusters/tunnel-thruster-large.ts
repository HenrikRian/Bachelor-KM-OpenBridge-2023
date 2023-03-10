import {customElement, property, svg} from "lit-element";
import {ObElement} from "../obElement";
import {renderThrusterElementLarge} from "./thruster-element-large";
import {WidthSize} from "../models";

@customElement('ob-tunnel-thruster-large')
export class AzimuthLarge extends ObElement {
    @property({type: Number}) target = 0;
    @property({type: Number}) value = 0;
    @property({type: String}) width = WidthSize.REGULAR;
    @property({type: Boolean}) showSetPoint = true;

    render() {
        return svg`<svg viewBox="-256 -40 512 80">
    <svg x="-256" y="-40" width="512" height="80">
    ${renderThrusterElementLarge({
            value: this.value, target: this.target, showArrow: false, width: this.width,
            showSetPoint: this.showSetPoint
        })}
    </svg>
  </svg>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ob-tunnel-thruster-large': AzimuthLarge
    }
}
