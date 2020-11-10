import {customElement, property, svg} from 'lit-element'
import {ObElement} from "../obElement";
import LabelsSvg from "../../generated-without-style/BARS/BarVertical100LabelsMedium.svg";
import {renderVerticalBarMedium} from "./bars";

@customElement('ob-bar-vertical-100-medium')
export class BarVerticalMedium extends ObElement {
    @property({type: Number}) value = 0
    @property({type: Number}) range = 100

    protected render(): unknown {
        return svg`
    <svg viewBox="-36 -128 72 256">
        ${renderVerticalBarMedium(this.value, this.range)}
        <text x="-13" y="104" class="ob-font-ui-label-active ob-right-label">${-this.range}</text>
        <text x="-13" y="0" class="ob-font-ui-label-active ob-right-label">0</text>
        <text x="-13" y="-104" class="ob-font-ui-label-active ob-right-label">${this.range}</text>  
    </svg>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ob-bar-vertical-100-medium': BarVerticalMedium
    }
}
