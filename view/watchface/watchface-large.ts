import {svg, customElement, property} from 'lit-element'
import {primaryTickmarksLarge} from "./primary-tickmarks/primary-tickmarks-large";
import InnerCircleRegularLarge
    from '../../generated-with-style/WatchFace/InnerCircleRegularLarge.svg'
import InnerCirclePortStarboardLarge
    from '../../generated-with-style/WatchFace/InnerCirclePortStarboardLarge.svg'
import InnerCirclePositiveNegativeLarge
    from '../../generated-with-style/WatchFace/InnerCirclePositiveNegativeLarge.svg'
import CrossRegularLarge from '../../generated-with-style/WatchFace/CrossRegularLarge.svg'
import SecondaryTickmarks5Large
    from '../../generated-with-style/WatchFace/SecondaryTickmarks5Large.svg'
import SecondaryTickmarks9Large
    from '../../generated-with-style/WatchFace/SecondaryTickmarks9Large.svg'
import SecondaryTickmarks10Large
    from '../../generated-with-style/WatchFace/SecondaryTickmarks10Large.svg'
import TertiaryTickmarksLarge
    from '../../generated-with-style/WatchFace/TertiaryTickmarksLarge.svg'

import {ObElement} from "../obElement";

function startClipDegMap(startClipDeg: number) {
    const deg = startClipDeg % 360
    if (deg < 0)
        return deg + 360;
    else
        return deg
}

function endClipDegMap(startClipDegMapped: number, endClipDeg: number) {
    let deg = endClipDeg % 360
    while (deg < startClipDegMapped) {
        deg += 360
    }
    return deg
}

function clipPathGen(startClipDegMapped: number, endClipDegMapped: number): string {
    const radius = 512;
    const startClipRad = startClipDegMapped / 180 * Math.PI;
    const endClipRad = endClipDegMapped / 180 * Math.PI;
    const x0 = radius * Math.sin(startClipRad);
    const y0 = -radius * Math.cos(startClipRad);
    const x1 = radius * Math.sin(endClipRad);
    const y1 = -radius * Math.cos(endClipRad);
    const largeArcFlag = (endClipRad - startClipRad) <= Math.PI ? 0 : 1;
    return `M0 0 ${x0} ${y0} A${radius} ${radius} 0 ${largeArcFlag} 1 ${x1} ${y1}Z`
}

export function watchFaceLargeRender(option: {
    innerCircle: string, primaryTickMarks: number, secondaryTickMarks: number | null, rotate: number,
    startClipDeg: number, endClipDeg: number, showLabels: boolean, cross: boolean, tertiaryTickMarks?: boolean
}) {
    const startClipDegMapped = startClipDegMap(option.startClipDeg);
    const endClipDegMapped = endClipDegMap(startClipDegMapped, option.endClipDeg);
    const clipPath = clipPathGen(startClipDegMapped, endClipDegMapped);

    let innerCircleSvg = InnerCircleRegularLarge;
    if (option.innerCircle === 'portStarboard') {
        innerCircleSvg = InnerCirclePortStarboardLarge;
    } else if (option.innerCircle === 'positiveNegative') {
        innerCircleSvg = InnerCirclePositiveNegativeLarge;
    }
    let secondaryTickmarksSvg = null;
    if (option.secondaryTickMarks === 5)
        secondaryTickmarksSvg = SecondaryTickmarks5Large
    else if (option.secondaryTickMarks === 9)
        secondaryTickmarksSvg = SecondaryTickmarks9Large
    else if (option.secondaryTickMarks === 10)
        secondaryTickmarksSvg = SecondaryTickmarks10Large


    return svg`
  <svg viewBox="-256 -256 512 512">
    <g transform="rotate(${option.rotate})">
      <g mask="url(#clipPathWatchFaceLarge)">
        <svg width="512" height="512" x="-256" y="-256">
            ${innerCircleSvg}
            ${option.cross ? CrossRegularLarge : null}
            ${secondaryTickmarksSvg}
            ${option.tertiaryTickMarks !== false ? TertiaryTickmarksLarge : null}
        </svg>
      </g>
      <svg width="725" height="725" x="-362.5" y="-362.5">
      ${primaryTickmarksLarge(option.primaryTickMarks, startClipDegMapped, endClipDegMapped, option.showLabels, option.rotate)}
      </svg>
    </g>

    <mask id="clipPathWatchFaceLarge">
      <rect height="512" width="512" x="-256" y="-256" fill="white"></rect>
      <path d='${clipPath}' fill="black"/>
    </mask>
  </svg>
    `
}

@customElement('ob-watchface-large')
export class WatchfaceLarge extends ObElement {
    @property({type: String}) innerCircle = "regular";
    @property({type: String}) cross = 'false';
    @property({type: String}) showLabels = 'false';
    @property({type: Number}) rotate = 0;
    @property({type: Number}) primaryTickmarks = 45;
    @property({type: Number}) secondaryTickmarks = 10;
    @property({type: Number}) startClipDeg = 0;
    @property({type: Number}) endClipDeg = 0;


    render() {
        return watchFaceLargeRender({
            innerCircle: this.innerCircle,
            primaryTickMarks: this.primaryTickmarks,
            secondaryTickMarks: this.secondaryTickmarks,
            rotate: this.rotate,
            startClipDeg: this.startClipDeg,
            endClipDeg: this.endClipDeg,
            showLabels: this.showLabels === 'true',
            cross: this.cross === 'true'
        })
    }
}
