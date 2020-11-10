import {customElement, property, svg} from 'lit-element'
import {ObElement} from "../obElement";
import {renderVerticalPositiveSmall} from "./bar-vertical-positive-small";


@customElement('ob-bar-horizontal-positive-small')
export class BarHorizontalPositiveSmall extends ObElement {
    @property({type: Number}) value = 0

    protected render(): unknown {
        return svg`
    <svg viewBox="-32 -32 64 64">
        <g transform="rotate(90)">
            ${renderVerticalPositiveSmall(this.value)}
        </g>
    </svg>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ob-bar-horizontal-positive-small': BarHorizontalPositiveSmall
    }
}
