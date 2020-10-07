import {customElement, property, svg} from 'lit-element'
import {ObElement} from "../obElement";
import LabelsSvg from "../../generated-without-style/BARS/BarVertical100LabelsMedium.svg";
import {renderVerticalBarMedium} from "./bars";

@customElement('ob-bar-vertical-100-medium')
export class BarVertical100Medium extends ObElement {
    @property({type: Number}) value = 0

    protected render(): unknown {
        return svg`
    <svg viewBox="-36 -128 72 256">
        ${renderVerticalBarMedium(this.value)}
        <svg x="-36" y="-107.5">${LabelsSvg}</svg>    
    </svg>`;
    }
}
