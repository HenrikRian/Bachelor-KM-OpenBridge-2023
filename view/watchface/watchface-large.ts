import { svg, customElement, property } from "lit-element";
import { primaryTickmarksLarge } from "./primary-tickmarks/primary-tickmarks-large";
import InnerCircleRegularLarge from "../../generated-without-style/WatchFace/InnerCircleRegularLarge.svg";
import InnerCirclePortStarboardLarge from "../../generated-without-style/WatchFace/InnerCirclePortStarboardLarge.svg";
import InnerCirclePositiveNegativeLarge from "../../generated-without-style/WatchFace/InnerCirclePositiveNegativeLarge.svg";
import CrossRegularLarge from "../../generated-without-style/WatchFace/CrossRegularLarge.svg";
import SecondaryTickmarks5 from "../../generated-without-style/WatchFace/SecondaryTickmarks5.svg";
import SecondaryTickmarks9 from "../../generated-without-style/WatchFace/SecondaryTickmarks9.svg";
import SecondaryTickmarks10 from "../../generated-without-style/WatchFace/SecondaryTickmarks10.svg";
import TertiaryTickmarks from "../../generated-without-style/WatchFace/TertiaryTickmarks.svg";

import { ObElement } from "../obElement";
import { InnerWatchFaceType, InnerWatchFaceTypeString } from "../models";
import {
  CircularLabelOptions,
  circularLabels,
} from "./primary-tickmarks/circular-labels";

function startClipDegMap(startClipDeg: number) {
  const deg = startClipDeg % 360;
  if (deg < 0) return deg + 360;
  else return deg;
}

function endClipDegMap(startClipDegMapped: number, endClipDeg: number) {
  let deg = endClipDeg % 360;
  while (deg < startClipDegMapped) {
    deg += 360;
  }
  return deg;
}

function clipPathGen(
  startClipDegMapped: number,
  endClipDegMapped: number
): string {
  const radius = 512;
  const startClipRad = (startClipDegMapped / 180) * Math.PI;
  const endClipRad = (endClipDegMapped / 180) * Math.PI;
  const x0 = radius * Math.sin(startClipRad);
  const y0 = -radius * Math.cos(startClipRad);
  const x1 = radius * Math.sin(endClipRad);
  const y1 = -radius * Math.cos(endClipRad);
  const largeArcFlag = endClipRad - startClipRad <= Math.PI ? 0 : 1;
  return `M0 0 ${x0} ${y0} A${radius} ${radius} 0 ${largeArcFlag} 1 ${x1} ${y1}Z`;
}

interface WatchFaceLargeOptions {
  innerCircle: InnerWatchFaceTypeString;
  tickmarks: {
    primary: number;
    secondary: number | null;
    tertiary?: boolean;
  };
  uuid: string;
  cross: boolean;
  clip?: { startDeg: number; endDeg: number };
  labels: CircularLabelOptions;
  scaleRatio?: number;
}

export function watchFaceLargeRender(option: WatchFaceLargeOptions) {
  let startClipDegMapped = 0;
  let endClipDegMapped = 0;
  if (option.clip) {
    startClipDegMapped = startClipDegMap(option.clip.startDeg);
    endClipDegMapped = endClipDegMap(startClipDegMapped, option.clip.endDeg);
  }
  const clipPath = clipPathGen(startClipDegMapped, endClipDegMapped);

  let innerCircleSvg = InnerCircleRegularLarge;
  if (option.innerCircle === InnerWatchFaceType.PORT_STARBOARD) {
    innerCircleSvg = InnerCirclePortStarboardLarge;
  } else if (option.innerCircle === InnerWatchFaceType.POSITIVE_NEGATIVE) {
    innerCircleSvg = InnerCirclePositiveNegativeLarge;
  }
  let secondaryTickmarksSvg = null;
  if (option.tickmarks.secondary === 5)
    secondaryTickmarksSvg = SecondaryTickmarks5;
  else if (option.tickmarks.secondary === 9)
    secondaryTickmarksSvg = SecondaryTickmarks9;
  else if (option.tickmarks.secondary === 10)
    secondaryTickmarksSvg = SecondaryTickmarks10;

  let startDeg = 0;
  let endDeg = 0;
  if (option.clip) {
    startDeg = option.clip.startDeg;
    endDeg = option.clip.endDeg;
  }

  if (option.labels.intervalDeg === undefined) {
    option.labels.intervalDeg = option.tickmarks.primary;
  }

  return svg`
  <svg viewBox="-256 -256 512 512">
    <g transform="rotate(${option.labels.rotate ?? 0})">
      <svg width="725" height="725" x="-362.5" y="-362.5">
            ${circularLabels(option.labels, {
              x0: 362.5,
              y0: 362.5,
              labelRadius: 228,
              startDeg: endDeg,
              endDeg: startDeg,
              scaleRatio: option.scaleRatio,
            })}
        </svg>
      <g mask="url(#clip${option.uuid})">
        <svg width="512" height="512" x="-256" y="-256">
            ${innerCircleSvg}
        </svg>
        <svg width="352" height="352" x="-176" y="-176">
            ${option.cross ? CrossRegularLarge : null}
        </svg>
        <svg width="416" height="416" x="-208" y="-208">
            ${secondaryTickmarksSvg}
            ${option.tickmarks.tertiary !== false ? TertiaryTickmarks : null}
        </svg>
        <svg width="725" height="725" x="-362.5" y="-362.5">
            ${primaryTickmarksLarge({
              showDeg: option.tickmarks.primary,
              labels: option.labels,
              scaleRatio: option.scaleRatio,
              startDeg: startDeg,
              endDeg: endDeg,
            })}
        </svg>
      </g>
      
      <g transform="rotate(${startDeg})">
          <path id="Vector 3_4" d="M0 -208.265L0 -176.225" stroke-width="2" 
          class="ob-instrument-tick-mark-primary-color-stroke"/>
      </g>
      <g transform="rotate(${endDeg})">
          <path id="Vector 3_4" d="M0 -208.265L0 -176.225" stroke-width="2" 
          class="ob-instrument-tick-mark-primary-color-stroke"/>
      </g>
    </g>

    <mask id="clip${option.uuid}">
      <rect height="512" width="512" x="-256" y="-256" fill="white"></rect>
      <path d="${clipPath}" fill="black"/>
    </mask>
  </svg>
    `;
}

@customElement("ob-watchface-large")
export class WatchfaceLarge extends ObElement {
  @property({ type: String }) innerCircle = InnerWatchFaceType.REGULAR;
  @property({ type: Boolean }) cross = false;
  @property({ type: Boolean }) showLabels = false;
  @property({ type: Boolean }) bold = false;
  @property({ type: Boolean }) nsew = false;
  @property({ type: Number }) rotate = 0;
  @property({ type: Number }) primaryTickmarks = 45;
  @property({ type: Number }) secondaryTickmarks = 10;
  @property({ type: Number }) startClipDeg = 0;
  @property({ type: Number }) endClipDeg = 0;

  render() {
    return watchFaceLargeRender({
      innerCircle: this.innerCircle,
      tickmarks: {
        primary: this.primaryTickmarks,
        secondary: this.secondaryTickmarks,
      },
      clip: { startDeg: this.startClipDeg, endDeg: this.endClipDeg },
      labels: {
        show: this.showLabels,
        rotate: this.rotate,
        nsew: this.nsew,
        bold: this.bold,
      },
      cross: this.cross,
      uuid: this.uuid,
    });
  }
}
