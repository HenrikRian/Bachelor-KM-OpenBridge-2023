import {customElement, property, svg} from 'lit-element'
import {ObElement} from "../obElement";
import BarSvg from "../../generated-without-style/BARS/BarVerticalPositive100BarSmall.svg";
import {renderVerticalActiveBarSmall} from "./bars";

export function renderVerticalPositiveSmall(value: number) {
    const yrange = 28
    return svg`<svg x="-12" y="-28">${BarSvg}</svg>
        ${renderVerticalActiveBarSmall(0, value, 
            {yMin: yrange, yMax:-yrange, valueMin: 0, valueMax: 100})}`
}

@customElement('ob-bar-vertical-positive-small')
export class BarVerticalPositiveSmall extends ObElement {
    @property({type: Number}) value = 0

    protected render(): unknown {

        return svg`
    <svg viewBox="-32 -32 64 64">
        ${renderVerticalPositiveSmall(this.value)}
    </svg>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ob-bar-vertical-positive-small': BarVerticalPositiveSmall
    }
}
