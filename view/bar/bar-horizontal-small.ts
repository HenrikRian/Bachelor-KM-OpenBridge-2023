import {customElement, property, svg} from 'lit-element'
import {ObElement} from "../obElement";
import {renderBarVerticalSmall} from "./bar-vertical-small";

@customElement('ob-bar-horizontal-small')
export class BarHorizontal100Medium extends ObElement {
    @property({type: Number}) value = 0
    @property({type: Number}) range = 100

    protected render(): unknown {
        return svg`
    <svg viewBox="-32 -32 64 64">
        <g transform="rotate(90)">
            ${renderBarVerticalSmall(this.value, this.range)}
        </g>
    </svg>`;
    }
}
