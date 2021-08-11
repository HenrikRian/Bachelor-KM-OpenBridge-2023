import {svg} from 'lit-element'

export function primaryTickmarksSmall(showDeg: number, showArrow: boolean) {


    return svg`<svg width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Small/ Angle Master">
      <g id="Tickmarks">
       ${showDeg === 30 ?
        svg`<g id="30Â°">
          <g id="60Â°">
            <g id="Thick 08px" clip-path="url(#Small/ Angle Masterclip0)">
              <path id="Vector 3" d="M17.637 29.4133L24.6028 33.435" stroke="#999999"
                    class="ob-instrument-tick-mark-secondary-color-stroke"/>
              <path id="Vector 4" d="M66.3972 57.565L73.3629 61.5867" stroke="#999999"
                    class="ob-instrument-tick-mark-secondary-color-stroke"/>
              <path id="Vector 5" d="M29.4133 73.3629L33.4349 66.3972" stroke="#999999"
                    class="ob-instrument-tick-mark-secondary-color-stroke"/>
              <path id="Vector 6" d="M57.5649 24.6028L61.5866 17.637" stroke="#999999"
                    class="ob-instrument-tick-mark-secondary-color-stroke"/>
            </g>
          </g>
          <g id="30Â°_2">
            <g id="Thick 08px_2" clip-path="url(#Small/ Angle Masterclip1)">
              <path id="Vector 3_2" d="M29.4133 17.6371L33.4349 24.6028" stroke="#999999"
                    class="ob-instrument-tick-mark-secondary-color-stroke"/>
              
              <path id="Vector 4_2" d="M57.5649 66.3972L61.5866 73.363" stroke="#999999"
                    class="ob-instrument-tick-mark-secondary-color-stroke"/>
              
              <path id="Vector 5_2" d="M17.637 61.5867L24.6028 57.565" stroke="#999999"
                    class="ob-instrument-tick-mark-secondary-color-stroke"/>
              
              <path id="Vector 6_2" d="M66.3972 33.435L73.3629 29.4133" stroke="#999999"
                    class="ob-instrument-tick-mark-secondary-color-stroke"/>
            </g>
          </g>
        </g>` : null}
       ${showDeg === 45 ?
        svg`
        <g id="45Â°">
          <g id="Thick 08px_3" clip-path="url(#Small/ Angle Masterclip2)">
            <path id="Vector 3_3" d="M22.75 22.75L28.4375 28.4375" stroke="#999999"
                  class="ob-instrument-tick-mark-secondary-color-stroke"/>
              
            <path id="Vector 4_3" d="M62.5625 62.5625L68.25 68.25" stroke="#999999"
                  class="ob-instrument-tick-mark-secondary-color-stroke"/>
              
            <path id="Vector 5_3" d="M22.75 68.25L28.4375 62.5625" stroke="#999999"
                  class="ob-instrument-tick-mark-secondary-color-stroke"/>
              
            <path id="Vector 6_3" d="M62.5625 28.4375L68.25 22.75" stroke="#999999"
                  class="ob-instrument-tick-mark-secondary-color-stroke"/>
          </g>
        </g>` : null}
        <g id="90Â°">
          <g id="Thick 08px_4">
            <path id="Vector 3_4" d="M45.4999 13.3266L45.4999 21.37" stroke="#999999"
                  class="ob-instrument-tick-mark-secondary-color-stroke"/>
              
            <path id="Vector 4_4" d="M45.4999 69.63L45.4999 77.6734" stroke="#999999"
                  class="ob-instrument-tick-mark-secondary-color-stroke"/>
              
            <path id="Vector 5_4" d="M13.3266 45.5L21.3699 45.5" stroke="#999999"
                  class="ob-instrument-tick-mark-secondary-color-stroke"/>
              
            <path id="Vector 6_4" d="M69.63 45.5L77.6733 45.5" stroke="#999999"
                  class="ob-instrument-tick-mark-secondary-color-stroke"/>
          </g>
        </g>
      </g>
       ${showArrow ? svg`
      <g id="NorthArrow">
        <path id="Color"
              d="M45.3323 14.3321H45.6675L48.8513 22.3754H42.1485L43.7404 18.3537L45.3323 14.3321Z"
              fill="#999999" class="ob-instrument-tick-mark-secondary-color-fill"/>
      </g>` : null}
    </g>
    <defs>
      <clipPath id="Small/ Angle Masterclip0">
        <rect width="64" height="64" fill="white"
              transform="translate(1.55035 57.2763) scale(1.00542) rotate(-60)"/>
      </clipPath>
      <clipPath id="Small/ Angle Masterclip1">
        <rect width="64" height="64" fill="white"
              transform="translate(1.55035 33.7237) scale(1.00542) rotate(-30)"/>
      </clipPath>
      <clipPath id="Small/ Angle Masterclip2">
        <rect width="64" height="64" fill="white"
              transform="translate(0 45.5) scale(1.00542) rotate(-45)"/>
      </clipPath>
    </defs>
  </svg>
`;

}
