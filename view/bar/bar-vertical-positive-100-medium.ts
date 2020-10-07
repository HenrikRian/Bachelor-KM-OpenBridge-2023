import {customElement, property, svg} from 'lit-element'
import {ObElement} from "../obElement";
import BarSvg from "../../generated-without-style/BARS/BarVerticalPositive100BarMedium.svg";
import LabelsSvg from "../../generated-without-style/BARS/BarVerticalPositive100LabelsMedium.svg";
import {renderVerticalActiveBarMedium} from "./bars";

@customElement('ob-bar-vertical-positive-100-medium')
export class BarVerticalPositive100Medium extends ObElement {
    @property({type: Number}) value = 0

    protected render(): unknown {
        const yrange = 104
        return svg`
    <svg viewBox="-36 -128 72 256">
        <svg x="-16" y="-104.5">${BarSvg}</svg>
        <svg x="-36" y="-107.5">${LabelsSvg}</svg>
        ${renderVerticalActiveBarMedium(0, this.value, 
            {yMin: yrange, yMax:-yrange, valueMin: 0, valueMax: 100, showBar0: false, showBar1: true})}
    </svg>`;
    }
}
