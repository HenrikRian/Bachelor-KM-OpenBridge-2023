import { customElement, property, svg } from 'lit-element'
import { primaryTickmarksSmall } from './primary-tickmarks/primary-tickmarks-small';
import InnerCircleRegularSmall
  from '../../generated-with-style/WatchFace/InnerCircleRegularSmall.svg'
import InnerCirclePortStarboardSmall
  from '../../generated-with-style/WatchFace/InnerCirclePortStarboardSmall.svg'
import InnerCirclePositiveNegativeSmall
  from '../../generated-with-style/WatchFace/InnerCirclePositiveNegativeSmall.svg'
import CrossRegularSmall from '../../generated-with-style/WatchFace/CrossRegularSmall.svg'

import { ObElement } from '../obElement';
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
  const radius = 40;
  const startClipRad = startClipDegMapped / 180 * Math.PI;
  const endClipRad = endClipDegMapped / 180 * Math.PI;
  const x0 = radius * Math.sin(startClipRad);
  const y0 = -radius * Math.cos(startClipRad);
  const x1 = radius * Math.sin(endClipRad);
  const y1 = -radius * Math.cos(endClipRad);
  const largeArcFlag = (endClipRad - startClipRad) <= Math.PI ? 0 : 1;
  return `M0 0 ${ x0 } ${ y0 } A${ radius } ${ radius } 0 ${ largeArcFlag } 1 ${ x1 } ${ y1 }Z`
}

export function watchFaceSmallRender(option: {
  innerCircle: InnerWatchFaceTypeString, primaryTickMarks: number, rotate: number,
  startClipDeg: number, endClipDeg: number, showArrow: boolean, cross: boolean,
  uuid: string
}) {
  const startClipDegMapped = startClipDegMap(option.startClipDeg);
  const endClipDegMapped = endClipDegMap(startClipDegMapped, option.endClipDeg);
  const clipPath = clipPathGen(startClipDegMapped, endClipDegMapped);


  let innerCircleSvg = InnerCircleRegularSmall;
  if (option.innerCircle === InnerWatchFaceType.PORT_STARBOARD) {
    innerCircleSvg = InnerCirclePortStarboardSmall;
  } else if (option.innerCircle === InnerWatchFaceType.POSITIVE_NEGATIVE) {
    innerCircleSvg = InnerCirclePositiveNegativeSmall;
  }

  return svg`
  <svg viewBox="-32 -32 64 64">
    <g transform="rotate(${ option.rotate })">
      <g mask="url(#clipPathWatchFaceSmall${ option.uuid })">
        <svg width="64" height="64" x="-32" y="-32">
             ${ innerCircleSvg }          
        </svg>
        <svg width="44" height="44" x="-22" y="-22">
            ${ option.cross ? CrossRegularSmall : null }
        </svg>
        <svg width="91" height="91" x="-45.5" y="-45.5">
            ${ primaryTickmarksSmall(option.primaryTickMarks, option.showArrow) }
        </svg>
      </g>
      
      <g transform="rotate(${ option.startClipDeg })">
        <path d="M0 -32.1734L0 -24.13" class="ob-instrument-tick-mark-secondary-color-stroke"/>
      </g>
      <g transform="rotate(${ option.endClipDeg })">
        <path d="M0 -32.1734L0 -24.13" class="ob-instrument-tick-mark-secondary-color-stroke"/>
      </g>
    </g>

    <mask id="clipPathWatchFaceSmall${ option.uuid }">
      <rect height="128" width="128" x="-64" y="-64" fill="white"></rect>
      <path d="${ clipPath }" fill="black"/>
    </mask>
  </svg>
    `
}

@customElement('ob-watchface-small')
export class HeadingMedium extends ObElement {
  @property({ type: String }) innerCircle = InnerWatchFaceType.REGULAR;
  @property({ type: Boolean }) cross = false;
  @property({ type: Boolean }) showArrow = false;
  @property({ type: Number }) rotate = 0;
  @property({ type: Number }) primaryTickmarks = 45;
  @property({ type: Number }) startClipDeg = 0;
  @property({ type: Number }) endClipDeg = 0;


  render() {
    return watchFaceSmallRender({
      innerCircle: this.innerCircle,
      primaryTickMarks: this.primaryTickmarks,
      rotate: this.rotate,
      startClipDeg: this.startClipDeg,
      endClipDeg: this.endClipDeg,
      showArrow: this.showArrow,
      cross: this.cross,
      uuid: this.uuid
    })
  }
}
