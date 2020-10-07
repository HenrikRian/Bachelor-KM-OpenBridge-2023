import {customElement, property, svg} from 'lit-element'
import {ObElement} from "../obElement";
import LabelsSvg from "../../generated-without-style/BARS/BarVertical100LabelsLarge.svg";
import {renderVerticalBarLarge} from "./bars";


@customElement('ob-bar-vertical-100-large')
export class BarVertical100Large extends ObElement {
    @property({type: Number}) value = 0

    protected render(): unknown {
        return svg`
    <svg viewBox="-72 -256 144 512">
        ${renderVerticalBarLarge(this.value)}
        <svg x="-72" y="-226">${LabelsSvg}</svg>
    </svg>`;
    }
}
