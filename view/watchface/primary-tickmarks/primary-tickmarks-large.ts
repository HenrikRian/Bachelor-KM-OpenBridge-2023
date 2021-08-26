import { svg, SVGTemplateResult } from "lit-element";
import { CircularLabelOptions } from "./circular-labels";

export enum TickMarkSize {
  SMALL = .25,
  MEDIUM = .5,
  LARGE = 1
}

export interface PrimaryTickmarksOptions {
  showDeg: number;
  scaleRatio?: number;
  labels: CircularLabelOptions;
  startDeg: number;
  endDeg: number;
  size?: number;
  strokeClass: string
}

export function primaryTickmarksLarge(option: PrimaryTickmarksOptions): SVGTemplateResult {
  const length = (option.size ?? 1) * 32;
  const y1=-176-length;

  const primaryTickmarks = [];
  if (option.showDeg > 0) {
    for (let i = option.startDeg; i <= option.endDeg; i += option.showDeg) {
      primaryTickmarks.push(svg`<line transform="rotate(${i})" x1="0" x2="0" y1="${y1}" y2="-176" stroke-width="1" class="${option.strokeClass}"/>`);
    }
  }
  return svg`<svg width="512" height="512" viewBox="-256 -256 512 512" fill="none"
       xmlns="http://www.w3.org/2000/svg">
      ${primaryTickmarks}
  </svg>`;
}

