import {customElement, property, svg} from 'lit-element'
import {ObElement} from "../obElement";
import BarSvg from "../../generated-without-style/BARS/BarVerticalPositive100BarLarge.svg";
import {renderHorizontalActiveBarLarge} from "./bars";

@customElement('ob-bar-horizontal-positive-large')
export class BarHorizontalLarge extends ObElement {
    @property({type: Number}) value = 0
    @property({type: Number}) range = 100

    protected render(): unknown {
        return svg`
    <svg viewBox="-256 -72 512 144">
        <g transform="rotate(90)" > <svg y="-209" x="-24" style="overflow:visible;">${BarSvg}</svg></g>
        ${renderHorizontalActiveBarLarge(0, this.value, {
            showBar0: false,
            showBar1: true,
            valueMin: 0,
            valueMax: this.range,
            xMin: -208,
            xMax: 208
        })}
        <text x="-208" y="44" class="ob-font-ui-body-active ob-center-label">0</text>
        <text x="208" y="44" class="ob-font-ui-body-active ob-center-label">${this.range}</text>
        <text x="0" y="44" class="ob-font-ui-body ob-center-label">${this.range / 2}</text>
        <text x="-104" y="44" class="ob-font-ui-body ob-center-label">${this.range * .25}</text>
        <text x="104" y="44" class="ob-font-ui-body ob-center-label">${this.range * .75}</text>
    </svg>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ob-bar-horizontal-positive-large': BarHorizontalLarge
    }
}
