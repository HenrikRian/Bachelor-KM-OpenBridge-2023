import {customElement, property, svg} from 'lit-element'
import {ObElement} from "../obElement";
import BarSvg from "../../generated-without-style/BARS/BarVertical100BarSmall.svg";
import {renderVerticalActiveBarSmall} from "./bars";

export function renderBarVerticalSmall(value: number, range: number) {
    const yrange = 28
    return svg`
           <svg x="-12" y="-28">${BarSvg}</svg>
        ${renderVerticalActiveBarSmall(0, value, 
            {yMin: yrange, yMax:-yrange, valueMin: -range, valueMax: range})}`
}

@customElement('ob-bar-vertical-small')
export class BarVerticalSmall extends ObElement {
    @property({type: Number}) value = 0
    @property({type: Number}) range = 100

    protected render(): unknown {

        return svg`
    <svg viewBox="-32 -32 64 64">
        ${renderBarVerticalSmall(this.value, this.range)}
    </svg>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ob-bar-vertical-small': BarVerticalSmall
    }
}
