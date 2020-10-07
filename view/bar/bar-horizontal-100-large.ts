import {customElement, property, svg} from 'lit-element'
import {ObElement} from "../obElement";
import LabelsSvg from "../../generated-without-style/BARS/BarHorizontal100LabelsLarge.svg";
import {renderVerticalBarLarge} from "./bars";

@customElement('ob-bar-horizontal-100-large')
export class BarHorizontal100Large extends ObElement {
    @property({type: Number}) value = 0

    protected render(): unknown {
        return svg`
    <svg viewBox="-256 -72 512 144">
        <g transform="rotate(90)">${renderVerticalBarLarge(this.value)}</g>
        <svg y="44" x="${30.4766-   256}">${LabelsSvg}</svg>
    </svg>`;
    }
}
