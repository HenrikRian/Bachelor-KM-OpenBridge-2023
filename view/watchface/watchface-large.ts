import { svg, customElement, property, SVGTemplateResult } from "lit-element";
import { primaryTickmarksLarge } from "./primary-tickmarks/primary-tickmarks-large";
import InnerCircleRegularLarge from "../../generated-without-style/WatchFace/InnerCircleRegularLarge.svg";
import InnerCircleCondensedLarge from "../../generated-without-style/WatchFace/InnerCircleCondensedLarge.svg";
import InnerCircleCondensedPortStarboardLarge
  from "../../generated-without-style/WatchFace/InnerCircleCondensedPortStarboardLarge.svg";
import InnerCirclePortStarboardLarge from "../../generated-without-style/WatchFace/InnerCirclePortStarboardLarge.svg";
import InnerCirclePositiveNegativeLarge
  from "../../generated-without-style/WatchFace/InnerCirclePositiveNegativeLarge.svg";
import CrossRegularLarge from "../../generated-without-style/WatchFace/CrossRegularLarge.svg";
import TertiaryTickmarks from "../../generated-without-style/WatchFace/TertiaryTickmarks.svg";

import { ObElement } from "../obElement";
import { InnerWatchFaceType, InnerWatchFaceTypeString } from "../models";
import {
  CircularLabelOptions,
  circularLabels
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
    primarySize?: number;
    secondary: number | null;
    tertiary?: boolean;
  };
  uuid: string;
  cross: boolean;
  clip?: { startDeg: number; endDeg: number };
  labels: CircularLabelOptions;
  scaleRatio?: number;
}

export function watchFaceLargeRender(option: WatchFaceLargeOptions): SVGTemplateResult {
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
  } else if (option.innerCircle === InnerWatchFaceType.CONDENSED) {
    innerCircleSvg = InnerCircleCondensedLarge;
  } else if (option.innerCircle === InnerWatchFaceType.CONDENSED_PORT_STARBOARD) {
    innerCircleSvg = InnerCircleCondensedPortStarboardLarge;
  }

  let startDeg = 0;
  let endDeg = 0;
  if (option.clip) {
    startDeg = option.clip.startDeg;
    endDeg = option.clip.endDeg;
  }

  const firstLabel = endDeg;
  let lastLabel = startDeg ?? 360;
  if (lastLabel < firstLabel) {
    lastLabel += 360;
  } else if (lastLabel == firstLabel) {
    lastLabel = 359.99;
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
    startDeg: firstLabel,
    endDeg: lastLabel,
    scaleRatio: option.scaleRatio
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
            ${option.tickmarks.tertiary !== false ? TertiaryTickmarks : null}
        </svg>
      </g>
      ${option.tickmarks.secondary !== null ?
    svg`<svg width="512" height="512" x="-256" y="-256">
            ${primaryTickmarksLarge({
      showDeg: option.tickmarks.secondary,
      labels: option.labels,
      scaleRatio: option.scaleRatio,
      startDeg: firstLabel,
      endDeg: lastLabel,
      size: (option.tickmarks.primarySize ?? 1) * .5,
      strokeClass: "ob-instrument-tick-mark-secondary-color-stroke"
    })}</svg>` : null}
      
    <svg width="512" height="512" x="-256" y="-256">
            ${primaryTickmarksLarge({
    showDeg: option.tickmarks.primary,
    labels: option.labels,
    scaleRatio: option.scaleRatio,
    startDeg: firstLabel,
    endDeg: lastLabel,
    size: option.tickmarks.primarySize,
    strokeClass: "ob-instrument-tick-mark-primary-color-stroke"
  })}
        </svg>
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

  render(): SVGTemplateResult {
    return watchFaceLargeRender({
      innerCircle: this.innerCircle,
      tickmarks: {
        primary: this.primaryTickmarks,
        secondary: this.secondaryTickmarks
      },
      clip: { startDeg: this.startClipDeg, endDeg: this.endClipDeg },
      labels: {
        show: this.showLabels,
        rotate: this.rotate,
        nsew: this.nsew,
        bold: this.bold
      },
      cross: this.cross,
      uuid: this.uuid
    });
  }
}
