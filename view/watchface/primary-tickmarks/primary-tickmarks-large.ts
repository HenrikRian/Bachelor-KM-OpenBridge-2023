import { svg } from "lit-element";
import { CircularLabelOptions } from "./circular-labels";

export interface PrimaryTickmarksOptions {
  showDeg: number;
  scaleRatio?: number;
  labels: CircularLabelOptions;
  startDeg: number;
  endDeg: number;
}

export function primaryTickmarksLarge(option: PrimaryTickmarksOptions) {
  return svg`<svg width="725" height="725" viewBox="0 0 725 725" fill="none"
       xmlns="http://www.w3.org/2000/svg">
    <g id="Large/ Angle Master">
      <g id="Tickmarks">
      ${
        option.showDeg === 30
          ? svg`<g id="30Â°">
          <g id="60Â°" clip-path="url(#Large/ Angle Masterclip0)">
            <path id="Vector 3" d="M182.137 258.368L209.885 274.388" stroke="#333333" stroke-width="2" class="ob-instrument-tick-mark-primary-color-stroke"/>
          <path id="Vector 4" d="M515.115 450.612L542.863 466.633" stroke="#333333" stroke-width="2" class="ob-instrument-tick-mark-primary-color-stroke"/>
          <path id="Vector 5" d="M258.367 542.863L274.388 515.115" stroke="#333333" stroke-width="2" class="ob-instrument-tick-mark-primary-color-stroke"/>
          <path id="Vector 6" d="M450.612 209.885L466.633 182.137" stroke="#333333" stroke-width="2" class="ob-instrument-tick-mark-primary-color-stroke"/>
          </g>
          <g id="30Â°_2" clip-path="url(#Large/ Angle Masterclip1)">
            <path id="Vector 3_2" d="M258.367 182.137L274.388 209.885" stroke="#333333" stroke-width="2" class="ob-instrument-tick-mark-primary-color-stroke"/>
          <path id="Vector 4_2" d="M450.612 515.115L466.633 542.863" stroke="#333333" stroke-width="2" class="ob-instrument-tick-mark-primary-color-stroke"/>
          <path id="Vector 5_2" d="M182.137 466.633L209.885 450.612" stroke="#333333" stroke-width="2" class="ob-instrument-tick-mark-primary-color-stroke"/>
          <path id="Vector 6_2" d="M515.115 274.388L542.863 258.367" stroke="#333333" stroke-width="2" class="ob-instrument-tick-mark-primary-color-stroke"/>
          </g>
        </g>`
          : null
      }
       ${
         option.showDeg === 45
           ? svg`
        <g id="45Â°" clip-path="url(#Large/ Angle Masterclip2)">
          <path id="Vector 3_3" d="M215.234 215.234L237.891 237.891" stroke="#333333" stroke-width="2" class="ob-instrument-tick-mark-primary-color-stroke"/>
          <path id="Vector 4_3" d="M487.109 487.109L509.766 509.766" stroke="#333333" stroke-width="2" class="ob-instrument-tick-mark-primary-color-stroke"/>
          <path id="Vector 5_3" d="M215.234 509.766L237.891 487.109" stroke="#333333" stroke-width="2" class="ob-instrument-tick-mark-primary-color-stroke"/>
          <path id="Vector 6_3" d="M487.109 237.891L509.766 215.234" stroke="#333333" stroke-width="2" class="ob-instrument-tick-mark-primary-color-stroke"/>
        </g>`
           : null
       }
        <g id="90Â°">
          <path id="Vector 3_4" d="M362.5 154.235L362.5 186.276" stroke="#333333" stroke-width="2" class="ob-instrument-tick-mark-primary-color-stroke"/>
          <path id="Vector 4_4" d="M362.5 538.724L362.5 570.765" stroke="#333333" stroke-width="2" class="ob-instrument-tick-mark-primary-color-stroke"/>
          <path id="Vector 5_4" d="M154.235 362.5L186.276 362.5" stroke="#333333" stroke-width="2" class="ob-instrument-tick-mark-primary-color-stroke"/>
          <path id="Vector 6_4" d="M538.724 362.5L570.765 362.5" stroke="#333333" stroke-width="2" class="ob-instrument-tick-mark-primary-color-stroke"/>
        </g>
      </g>
      ${
        option.labels.show
          ? svg`
        <svg width="24" height="416" x="350.5" y="154.5"  viewBox="0 0 24 416">
            <path d="M11.5 8H12.5L22 32H2L6.75 20L11.5 8Z" class="ob-element-active-color-fill"/>
        </svg>`
          : null
      }
    </g>
    <defs>
      <clipPath id="Large/ Angle Masterclip0">
        <rect width="416" height="416" fill="white"
              transform="translate(78.0046 438.73) scale(1.00127) rotate(-60)"/>
      </clipPath>
      <clipPath id="Large/ Angle Masterclip1">
        <rect width="416" height="416" fill="white"
              transform="translate(78.0046 286.27) scale(1.00127) rotate(-30)"/>
      </clipPath>
      <clipPath id="Large/ Angle Masterclip2">
        <rect width="416" height="416" fill="white"
              transform="translate(67.9687 362.5) scale(1.00127) rotate(-45)"/>
      </clipPath>
    </defs>
  </svg>`;
}
