import {customElement, property, svg} from 'lit-element'
import {ObElement} from "../obElement";
import {renderVerticalBarMedium} from "./bars";

@customElement('ob-bar-horizontal-medium')
export class BarHorizontalMedium extends ObElement {
    @property({type: Number}) value = 0;
    @property({type: Number}) range = 100

    protected render(): unknown {
        return svg`
    <svg viewBox="-128 -36 256 72">
        <g transform="rotate(90)">${renderVerticalBarMedium(this.value, this.range)}</g>
        <text x="-104" y="20" class="ob-font-ui-label-active ob-center-label">${-this.range}</text>
        <text x="0" y="20" class="ob-font-ui-label-active ob-center-label">0</text>
        <text x="104" y="20" class="ob-font-ui-label-active ob-center-label">${this.range}</text>
    </svg>`;
    }
}
