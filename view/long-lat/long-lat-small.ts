import {svg, customElement, property} from 'lit-element'
import {ObElement} from "../obElement";

import ShipSmall from '../../generated-with-style/02 A Long - Lat/LongLatShipSmall.svg';

import LongitudinalArrowSmall from '../../generated-with-style/02 A Long - Lat/LongLatLongitudinalArrowSmall.svg';
import LatitudinalLeftArrowSmall from '../../generated-with-style/02 A Long - Lat/LongLatLatitudinalLeftArrowSmall.svg';
import LatitudinalRightArrowSmall from '../../generated-with-style/02 A Long - Lat/LongLatLatitudinalRightArrowSmall.svg';

@customElement('ob-long-lat-small')
export class LongLatSmall extends ObElement {
    
    @property({type: Number}) speedLongitudinal = 18;
    @property({type: Number}) speedLatitudinalBack = 18;
    @property({type: Number}) speedLatitudinalFront = 18;
    @property({type: Number}) speedLatitudinalMiddle = 18;

    @property({type: Boolean}) showSpeedLongitudinal = true; 
    hiddeSpeedLongitudinal = ''; //hidden

    @property({type: Boolean}) showSpeedLatitudinalBack = true;
    hiddeSpeedLatitudinalBack = ''; //hidden

    @property({type: Boolean}) showSpeedLatitudinalFront = true;
    hiddeSpeedLatitudinalFront = ''; //hidden

    @property({type: Boolean}) showSpeedLatitudinalMiddle = false;
    hiddeSpeedLatitudinalMiddle = ''; //hidden

    @property({type: Boolean}) showSpeedLongitudinalFront = true;
    hiddeSpeedLongitudinalFront = ''; //hidden
    hiddeSpeedLongitudinalBack = 'hidden'; //''

    @property({type: Boolean}) showSpeedLatitudinalBackLeft = false;
    hiddeSpeedLatitudinalBackLeft = ''; //hidden
    hiddeSpeedLatitudinalBackRight = 'hidden'; //''

    @property({type: Boolean}) showSpeedLatitudinalFrontLeft = false;
    hiddeSpeedLatitudinalFrontLeft = ''; //hidden
    hiddeSpeedLatitudinalFrontRight = 'hidden'; //''

    @property({type: Boolean}) showSpeedLatitudinalMiddleLeft = false;
    hiddeSpeedLatitudinalMiddleLeft = ''; //hidden
    hiddeSpeedLatitudinalMiddleRight = 'hidden'; //''

    protected render(): unknown {

        //longitudinal
        if(this.speedLongitudinal == 0)
            this.hiddeSpeedLongitudinal = 'hidden';
        else
            this.hiddeSpeedLongitudinal = '';
        //latitudinal - back
        if(this.speedLatitudinalBack == 0)
            this.hiddeSpeedLatitudinalBack = 'hidden';
        else
            this.hiddeSpeedLatitudinalBack = '';

        //latitudinal - front
        if(this.speedLatitudinalFront == 0)
            this.hiddeSpeedLatitudinalFront = 'hidden';
        else
            this.hiddeSpeedLatitudinalFront = '';

        //latitudinal - middle
        if(this.speedLatitudinalMiddle == 0)
            this.hiddeSpeedLatitudinalMiddle = 'hidden';
        else
            this.hiddeSpeedLatitudinalMiddle = '';   

        //longitudinalFront
        if(this.speedLongitudinal < 0) {
            this.hiddeSpeedLongitudinalFront = 'hidden';
            this.hiddeSpeedLongitudinalBack = '';
        }
        else {
            this.hiddeSpeedLongitudinalBack = 'hidden';
            this.hiddeSpeedLongitudinalFront = '';
        }

        //latitudinal-back - (left - right)
        if(this.speedLatitudinalBack > 0) {
            this.hiddeSpeedLatitudinalBackLeft = 'hidden';
            this.hiddeSpeedLatitudinalBackRight = '';
        }
        else {
            this.hiddeSpeedLatitudinalBackRight = 'hidden';
            this.hiddeSpeedLatitudinalBackLeft = '';
        }

        //latitudinal-front - (left - right)
        if(this.speedLatitudinalFront > 0) {
            this.hiddeSpeedLatitudinalFrontLeft = 'hidden';
            this.hiddeSpeedLatitudinalFrontRight = '';
        }
        else {
            this.hiddeSpeedLatitudinalFrontRight = 'hidden';
            this.hiddeSpeedLatitudinalFrontLeft = '';
        }

        //latitudinal-middle - (left - right)
        if(this.speedLatitudinalMiddle > 0) {
            this.hiddeSpeedLatitudinalMiddleLeft = 'hidden';
            this.hiddeSpeedLatitudinalMiddleRight = '';
        }
        else {
            this.hiddeSpeedLatitudinalMiddleRight = 'hidden';
            this.hiddeSpeedLatitudinalMiddleLeft = '';
        }

        return svg`
            <svg viewBox="-32 -32 64 64">
                <g style="visibility:${this.hiddeSpeedLongitudinal}">
                    <g style="visibility:${this.hiddeSpeedLongitudinalFront}">
                        <svg x="-3" y=${-30} width="12" height="12">
                            ${LongitudinalArrowSmall}
                        </svg>
                    </g>

                    <g style="visibility:${this.hiddeSpeedLongitudinalBack}">
                        <g transform="rotate(${180})">
                            <svg x="-3" y=${-30} width="12" height="12">
                                ${LongitudinalArrowSmall}
                            </svg>
                        </g>
                    </g>
                </g>

                <g style="visibility:${this.hiddeSpeedLatitudinalBack}">
                    <g style="visibility:${this.hiddeSpeedLatitudinalBackLeft}">
                        <svg x="${-22}" y="12" width="12" height="12">
                            ${LatitudinalLeftArrowSmall}
                        </svg>
                    </g>
                    <g style="visibility:${this.hiddeSpeedLatitudinalBackRight}">
                        <g transform="rotate(${180})">
                            <svg x="${-22}" y="-18" width="12" height="12">
                                ${LatitudinalLeftArrowSmall}
                            </svg>
                        </g>
                    </g>
                </g>

                <g style="visibility:${this.hiddeSpeedLatitudinalFront}">
                    <g style="visibility:${this.hiddeSpeedLatitudinalFrontRight}">
                        <g transform="rotate(${180})">
                            <svg x="${-22}" y="8" width="12" height="12">
                                ${LatitudinalRightArrowSmall}
                            </svg>
                        </g>
                    </g>
                    <g style="visibility:${this.hiddeSpeedLatitudinalFrontLeft}">
                        <g>
                            <svg x="${-22}" y="-14" width="12" height="12">
                                ${LatitudinalRightArrowSmall}
                            </svg>
                        </g>
                    </g>
                </g>

                <g style="visibility:${this.hiddeSpeedLatitudinalMiddle}">
                    <g style="visibility:${this.hiddeSpeedLatitudinalMiddleLeft}">
                        <g>
                            <svg x="${-22}" y="${-3}" width="12" height="12">
                                ${LatitudinalRightArrowSmall}
                            </svg>
                        </g>
                    </g>
                    <g style="visibility:${this.hiddeSpeedLatitudinalMiddleRight}">
                        <g transform="rotate(${180})">
                            <svg x="${-22}" y="${-3}" width="12" height="12">
                                ${LatitudinalRightArrowSmall}
                            </svg>
                        </g>
                    </g>
                </g>

                <g>
                    <svg x="-8" y="-16" width="16" height="32">
                        ${ShipSmall}
                    </svg>
                </g>
            </svg>`;
    }
}