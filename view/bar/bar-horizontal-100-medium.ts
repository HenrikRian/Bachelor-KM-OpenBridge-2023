import {customElement, property, svg} from 'lit-element'
import {ObElement} from "../obElement";
import LabelsSvg from "../../generated-without-style/BARS/BarHorizontal100LabelsMedium.svg";
import {renderVerticalBarMedium} from "./bars";

@customElement('ob-bar-horizontal-100-medium')
export class BarHorizontal100Medium extends ObElement {
    @property({type: Number}) value = 0

    protected render(): unknown {
        return svg`
    <svg viewBox="-128 -36 256 72">
        <g transform="rotate(90)">${renderVerticalBarMedium(this.value)}</g>
        <svg y="16" x="-117">${LabelsSvg}</svg>
    </svg>`;
    }
}
