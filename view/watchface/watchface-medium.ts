import {svg, customElement, property} from 'lit-element'
import {primaryTickmarksMedium} from "./primary-tickmarks/primary-tickmarks-medium";
import InnerCircleRegularMedium
    from '../../generated-with-style/WatchFace/InnerCircleRegularMedium.svg'
import InnerCirclePortStarboardMedium
    from '../../generated-with-style/WatchFace/InnerCirclePortStarboardMedium.svg'
import InnerCirclePositiveNegativeMedium
    from '../../generated-with-style/WatchFace/InnerCirclePositiveNegativeMedium.svg'
import CrossRegularMedium from '../../generated-with-style/WatchFace/CrossRegularMedium.svg'
import SecondaryTickmarks5Medium
    from '../../generated-with-style/WatchFace/SecondaryTickmarks5Medium.svg'
import SecondaryTickmarks9Medium
    from '../../generated-with-style/WatchFace/SecondaryTickmarks9Medium.svg'
import SecondaryTickmarks10Medium
    from '../../generated-with-style/WatchFace/SecondaryTickmarks10Medium.svg'

import {ObElement} from "../obElement";
import {InnerWatchFaceType, InnerWatchFaceTypeString} from "../models";

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
    const radius = 128;
    const startClipRad = startClipDegMapped / 180 * Math.PI;
    const endClipRad = endClipDegMapped / 180 * Math.PI;
    const x0 = radius * Math.sin(startClipRad);
    const y0 = -radius * Math.cos(startClipRad);
    const x1 = radius * Math.sin(endClipRad);
    const y1 = -radius * Math.cos(endClipRad);
    const largeArcFlag = (endClipRad - startClipRad) <= Math.PI ? 0 : 1;
    return `M0 0 ${x0} ${y0} A${radius} ${radius} 0 ${largeArcFlag} 1 ${x1} ${y1}Z`
}

export function watchFaceMediumRender(option: {
    innerCircle: InnerWatchFaceTypeString, primaryTickMarks: number, secondaryTickMarks: number | null, rotate: number,
    startClipDeg: number, endClipDeg: number, showLabels: boolean, cross: boolean, uuid: string
}) {
    const startClipDegMapped = startClipDegMap(option.startClipDeg);
    const endClipDegMapped = endClipDegMap(startClipDegMapped, option.endClipDeg);
    const clipPath = clipPathGen(startClipDegMapped, endClipDegMapped);

    let innerCircleSvg = InnerCircleRegularMedium;
    if (option.innerCircle === InnerWatchFaceType.PORT_STARBOARD) {
        innerCircleSvg = InnerCirclePortStarboardMedium;
    } else if (option.innerCircle === InnerWatchFaceType.POSITIVE_NEGATIVE) {
        innerCircleSvg = InnerCirclePositiveNegativeMedium;
    }
    let secondaryTickmarksSvg = null;
    if (option.secondaryTickMarks === 5)
        secondaryTickmarksSvg = SecondaryTickmarks5Medium
    else if (option.secondaryTickMarks === 9)
        secondaryTickmarksSvg = SecondaryTickmarks9Medium
    else if (option.secondaryTickMarks === 10)
        secondaryTickmarksSvg = SecondaryTickmarks10Medium


    return svg`
  <svg viewBox="-128 -128 256 256">
    <g transform="rotate(${option.rotate})">
      <g mask="url(#clipPathWatchFaceMedium${option.uuid})">
        <svg width="256" height="256" x="-128" y="-128">
             ${innerCircleSvg}          
        </svg>
        <svg width="256" height="256" x="-128" y="-128">
            ${option.cross ? CrossRegularMedium : null}
        </svg>
        <svg width="256" height="256" x="-128" y="-128">
            ${secondaryTickmarksSvg}
        </svg>
        <svg width="363" height="363" x="-181.5" y="-181.5">
            ${primaryTickmarksMedium(option.primaryTickMarks, option.showLabels, option.rotate)}
        </svg>
      </g>
      <g transform="rotate(${option.startClipDeg})">
        <path id="Vector 3_4" d="M0 -104.2761L0 -88.2337" class="ob-instrument-tick-mark-primary-color-stroke"/>
      </g>
      <g transform="rotate(${option.endClipDeg})">
        <path id="Vector 3_4" d="M0 -104.2761L0 -88.2337" class="ob-instrument-tick-mark-primary-color-stroke"/>
      </g>
    </g>

    <mask id="clipPathWatchFaceMedium${option.uuid}">
      <rect height="256" width="256" x="-128" y="-128" fill="white"></rect>
      <path d='${clipPath}' fill="black"/>
    </mask>
  </svg>
    `
}

@customElement('ob-watchface-medium')
export class WatchfaceMedium extends ObElement {
    @property({type: String}) innerCircle = InnerWatchFaceType.REGULAR;
    @property({type: Boolean}) cross = false;
    @property({type: Boolean}) showLabels = false;
    @property({type: Number}) rotate = 0;
    @property({type: Number}) primaryTickmarks = 45;
    @property({type: Number}) secondaryTickmarks = 10;
    @property({type: Number}) startClipDeg = 0;
    @property({type: Number}) endClipDeg = 0;


    render() {
        return watchFaceMediumRender({
            innerCircle: this.innerCircle,
            primaryTickMarks: this.primaryTickmarks,
            secondaryTickMarks: this.secondaryTickmarks,
            rotate: this.rotate,
            startClipDeg: this.startClipDeg,
            endClipDeg: this.endClipDeg,
            showLabels: this.showLabels,
            cross: this.cross,
            uuid: this.uuid
        })
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ob-watchface-medium': WatchfaceMedium
    }
}
