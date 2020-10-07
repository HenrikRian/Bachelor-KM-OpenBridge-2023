import {customElement, property, svg} from 'lit-element'
import {ObElement} from "../obElement";
import BarSvg from "../../generated-without-style/BARS/BarVerticalPositive100BarLarge.svg";
import LabelsSvg from "../../generated-without-style/BARS/BarVerticalPositive100LabelsLarge.svg";
import {renderVerticalActiveBarLarge} from "./bars";

@customElement('ob-bar-vertical-positive-100-large')
export class BarVerticalPositive100Large extends ObElement {
    @property({type: Number}) value = 0

    protected render(): unknown {
        return svg`
    <svg viewBox="-72 -256 144 512">
        <svg x="-24" y="-209.5">${BarSvg}</svg>
        <svg x="-72" y="-213">${LabelsSvg}</svg>
        ${renderVerticalActiveBarLarge(0, this.value, 
            {yMin: 207.5, yMax:-208.5, valueMin: 0, valueMax: 100, showBar0: false, showBar1: true})}
    </svg>`;
    }
}
