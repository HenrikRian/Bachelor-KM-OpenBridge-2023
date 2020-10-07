import {customElement, property, svg} from 'lit-element'
import {ObElement} from "../obElement";
import BarSvg from "../../generated-without-style/BARS/BarVertical100BarSmall.svg";
import {renderVerticalActiveBarSmall} from "./bars";

@customElement('ob-bar-vertical-100-small')
export class BarVertical100Small extends ObElement {
    @property({type: Number}) value = 0

    protected render(): unknown {
        const yrange = 28
        return svg`
    <svg viewBox="-32 -32 64 64">
        <svg x="-12" y="-28">${BarSvg}</svg>
        ${renderVerticalActiveBarSmall(0, this.value, 
            {yMin: yrange, yMax:-yrange, valueMin: -100, valueMax: 100})}
    </svg>`;
    }
}
