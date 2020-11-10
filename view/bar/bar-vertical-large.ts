import {customElement, property, svg} from 'lit-element'
import {ObElement} from "../obElement";
import {renderVerticalBarLarge} from "./bars";


@customElement('ob-bar-vertical-large')
export class BarVerticalLarge extends ObElement {
    @property({type: Number}) value = 0
    @property({type: Number}) range = 100

    protected render(): unknown {
        return svg`
    <svg viewBox="-72 -256 144 512">
        ${renderVerticalBarLarge(this.value, this.range)}
        <text x="-40" y="-221" class="ob-font-ui-body-active ob-right-label">${this.range}</text>
        <text x="-40" y="221" class="ob-font-ui-body-active ob-right-label">${-this.range}</text>
        <text x="-40" y="0" class="ob-font-ui-body-active ob-right-label">0</text>
        <text x="-40" y="110" class="ob-font-ui-body ob-right-label">${-this.range / 2}</text>
        <text x="-40" y="-110" class="ob-font-ui-body ob-right-label">${this.range / 2}</text>
    </svg>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ob-bar-vertical-large': BarVerticalLarge
    }
}
