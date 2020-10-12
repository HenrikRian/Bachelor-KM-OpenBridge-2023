import {customElement, property, svg} from "lit-element";
import {ObElement} from "../obElement";
import PointerLineTrue from "../../generated-with-style/SOG_STW/PointerLineTrueLarge.svg";
import PointerLineRelative from "../../generated-with-style/SOG_STW/PointerLineRelativeLarge.svg";
import Ship from "../../generated-with-style/Ship/TopShipLarge.svg";
import ArrowRelative from "./ArrowRelativeLarge.svg";
import {watchFaceLargeRender} from "../watchface/watchface-large";
import {InnerWatchFaceType} from "../models";

@customElement('ob-speedlog-large')
export class SpeedlogLarge extends ObElement {
    @property({type: Number}) speedTrue = 0;
    @property({type: Number}) courseTrue = 0;
    @property({type: Number}) speedRelative = 0;
    @property({type: Number}) courseRelative = 0;
    @property({type: Number}) heading = 0;

    render() {
        const lengthTrue = -this.speedTrue * 1.2 - 8
        const lengthRelate = -this.speedRelative * 1.2 - 8
        return svg`
  <svg viewBox="-256 -256 512 512">
    <svg x="-256" y="-256" width="512" height="512">${watchFaceLargeRender({
            cross: true,
            startClipDeg: 0,
            endClipDeg: 0,
            showLabels: true,
            primaryTickMarks: 45,
            rotate: 0,
            secondaryTickMarks: 5,
            tertiaryTickMarks: true,
            innerCircle: InnerWatchFaceType.REGULAR,
            uuid: this.uuid
        })}</svg>
    <g transform="rotate(${this.heading})">
    <svg x="-32" y="-96">${Ship}</svg>
</g>
    <g transform="rotate(${this.courseRelative})">
      <svg x="-4" y="-192" width="8" height="192">${PointerLineRelative}</svg>
      <svg x="-24" y="${lengthRelate - 48}">${ArrowRelative}</svg>
      <line x1="0" y1="0" y2="${lengthRelate}" x2="0" stroke-width="4" class="ob-instrument-dynamic-color-stroke"/>
    </g>
    <g transform="rotate(${this.courseTrue})">
      <svg x="-4" y="-192" width="8" height="192">${PointerLineTrue}</svg>
      <path d="M-20 ${lengthTrue} l19 -48h2 l19 48Z" class="ob-instrument-dynamic-color-fill"/>
      <line x1="0" y1="0" y2="${lengthTrue}" x2="0" stroke-width="8" class="ob-instrument-dynamic-color-stroke"/>
    </g>
    <circle r="8" class="ob-instrument-dynamic-color-fill"/>
    
  </svg>`
    }
}
