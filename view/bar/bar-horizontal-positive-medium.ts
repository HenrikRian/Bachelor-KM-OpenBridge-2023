import {customElement, property, svg} from 'lit-element'
import {ObElement} from "../obElement";
import BarSvg from "../../generated-without-style/BARS/BarVerticalPositive100BarMedium.svg";
import {renderVerticalActiveBarMedium} from "./bars";

@customElement('ob-bar-horizontal-positive-medium')
export class BarHorizontalPositiveMedium extends ObElement {
    @property({type: Number}) value = 0
    @property({type: Number}) range = 100

    protected render(): unknown {
        const yrange = 104
        return svg`
    <svg viewBox="-128 -36 256 72">
        <g transform="rotate(90)"><svg x="-16" y="-104.5" style="overflow: visible">${BarSvg}</svg>
        ${renderVerticalActiveBarMedium(0, this.value, 
            {yMin: yrange, yMax:-yrange, valueMin: 0, valueMax: this.range, showBar0: false, showBar1: true})}
        </g>
        <text y="20" x="-104" class="ob-font-ui-label-active ob-center-label">0</text>
        <text y="20" x="104" class="ob-font-ui-label-active ob-center-label">${this.range}</text>  
    </svg>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ob-bar-horizontal-positive-medium': BarHorizontalPositiveMedium
    }
}
