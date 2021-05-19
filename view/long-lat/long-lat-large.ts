import {svg, customElement, property} from 'lit-element'
import {ObElement} from "../obElement";

import ShipLarge from '../../generated-with-style/02 A Long - Lat/LongLatShipLarge.svg';

import LongitudinalLineLarge from '../../generated-with-style/02 A Long - Lat/LongLatLongitudinalLineLarge.svg';
import LongitudinalDotLarge from '../../generated-with-style/02 A Long - Lat/LongLatLongitudinalDotLarge.svg';
import LongitudinalDotActiveLarge from '../../generated-with-style/02 A Long - Lat/LongLatLongitudinalDotActiveLarge.svg';
//import LongitudinalBarLarge from '../../generated-with-style/02 A Long - Lat/LongLatLongitudinalBarLarge.svg';
import LongitudinalBarLarge from './svgFiles/longitudinalBarLarge.svg';
import LongitudinalArrowLarge from '../../generated-with-style/02 A Long - Lat/LongLatLongitudinalArrowLarge.svg';

import LatitudinalLineLarge from '../../generated-with-style/02 A Long - Lat/LongLatLatitudinalLineLarge.svg';
//import LatitudinalBarLarge from '../../generated-with-style/02 A Long - Lat/LongLatLatitudinalBarLarge.svg';
import LatitudinalBarLarge from './svgFiles/latitudinalBarLarge.svg';
import LatitudinalLeftArrowLarge from '../../generated-with-style/02 A Long - Lat/LongLatLatitudinalLeftArrowLarge.svg';

import LatitudinalRightArrowLarge from '../../generated-with-style/02 A Long - Lat/LongLatLatitudinalRightArrowLarge.svg';

@customElement('ob-long-lat-large')
export class LongLatLarge extends ObElement {
    @property({type: Number}) speedLongitudinal = 48;
    @property({type: Number}) speedLatitudinalBack = 48;
    @property({type: Number}) speedLatitudinalFront = 48;
    @property({type: Number}) speedLatitudinalMiddle = 48;
    @property({type: Text}) title = '';
    @property({type: Text}) positionOfSensor = 'middle'; //front/middle/back <=> 1/2/3


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
        if(!this.showSpeedLongitudinal)
            this.hiddeSpeedLongitudinal = 'hidden';
        else
            this.hiddeSpeedLongitudinal = '';
        //latitudinal - back
        if(!this.showSpeedLatitudinalBack)
            this.hiddeSpeedLatitudinalBack = 'hidden';
        else
            this.hiddeSpeedLatitudinalBack = '';

        //latitudinal - front
        if(!this.showSpeedLatitudinalFront)
            this.hiddeSpeedLatitudinalFront = 'hidden';
        else
            this.hiddeSpeedLatitudinalFront = '';

        //latitudinal - middle
        if(!this.showSpeedLatitudinalMiddle)
            this.hiddeSpeedLatitudinalMiddle = 'hidden';
        else
            this.hiddeSpeedLatitudinalMiddle = '';   

        //longitudinalFront
        if(!this.showSpeedLongitudinalFront) {
            this.hiddeSpeedLongitudinalFront = 'hidden';
            this.hiddeSpeedLongitudinalBack = '';
        }
        else {
            this.hiddeSpeedLongitudinalBack = 'hidden';
            this.hiddeSpeedLongitudinalFront = '';
        }

        //latitudinal-back - (left - right)
        if(!this.showSpeedLatitudinalBackLeft) {
            this.hiddeSpeedLatitudinalBackLeft = 'hidden';
            this.hiddeSpeedLatitudinalBackRight = '';
        }
        else {
            this.hiddeSpeedLatitudinalBackRight = 'hidden';
            this.hiddeSpeedLatitudinalBackLeft = '';
        }

        //latitudinal-front - (left - right)
        if(!this.showSpeedLatitudinalFrontLeft) {
            this.hiddeSpeedLatitudinalFrontLeft = 'hidden';
            this.hiddeSpeedLatitudinalFrontRight = '';
        }
        else {
            this.hiddeSpeedLatitudinalFrontRight = 'hidden';
            this.hiddeSpeedLatitudinalFrontLeft = '';
        }

        //latitudinal-middle - (left - right)
        if(!this.showSpeedLatitudinalMiddleLeft) {
            this.hiddeSpeedLatitudinalMiddleLeft = 'hidden';
            this.hiddeSpeedLatitudinalMiddleRight = '';
        }
        else {
            this.hiddeSpeedLatitudinalMiddleRight = 'hidden';
            this.hiddeSpeedLatitudinalMiddleLeft = '';
        }

        let temp = 2;
        let label = 0;
        if (this.positionOfSensor === 'front') {//front
            temp = -64;
            label = -62;
        }
        else if (this.positionOfSensor === 'middle') {//middle
            temp = 2;//TODO
            label = 22;
        }
        else if (this.positionOfSensor === 'back') {//back
            temp = 94; //TODO
            label = 94;
        }

        return svg`
            <svg viewBox="-256 -256 512 512">
                
                <g style="visibility:${this.hiddeSpeedLongitudinal}">
                    <svg x="-1" y="-244" width="2" height="488">
                        ${LongitudinalLineLarge}
                    </svg>
                    <g style="visibility:${this.hiddeSpeedLongitudinalFront}">
                        <svg x="-4" y="242" width="8" height="8">
                            ${LongitudinalDotLarge}
                        </svg>
                        <svg x="-4" y="-244" width="8" height="8">
                            ${LongitudinalDotActiveLarge}
                        </svg>
                        <svg x="-4" y="${-this.speedLongitudinal - 93}" width="8" height="${this.speedLongitudinal}">
                            ${LongitudinalBarLarge}
                        </svg>
                        <svg x="-24" y=${-this.speedLongitudinal - 141} width="48" height="48">
                            ${LongitudinalArrowLarge}
                        </svg>
                    </g>

                    <g style="visibility:${this.hiddeSpeedLongitudinalBack}">
                        <svg x="-4" y="-244" width="8" height="8">
                            ${LongitudinalDotLarge}
                        </svg>
                        <svg x="-4" y="242" width="8" height="8">
                            ${LongitudinalDotActiveLarge}
                        </svg>
                        <g transform="rotate(${180})">
                            <svg x="-4" y="${-this.speedLongitudinal - 99}" width="8" height="${this.speedLongitudinal}">
                                ${LongitudinalBarLarge}
                            </svg>
                        </g>
                        <g transform="rotate(${180})">
                            <svg x="-24" y=${-this.speedLongitudinal - 147} width="48" height="48">
                                ${LongitudinalArrowLarge}
                            </svg>
                        </g>
                    </g>
                </g>

                <g style="visibility:${this.hiddeSpeedLatitudinalBack}">
                    <svg x="-181.5" y="94" width="359" height="2">
                        ${LatitudinalLineLarge}
                    </svg>
                    <g style="visibility:${this.hiddeSpeedLatitudinalBackLeft}">
                        <svg x="173" y="91" width="8" height="8">
                            ${LongitudinalDotLarge}
                        </svg>
                        <svg x="-181" y="91" width="8" height="8">
                            ${LongitudinalDotActiveLarge}
                        </svg>
                        <svg x="${-this.speedLatitudinalBack - 32}" y="91" width="${this.speedLatitudinalBack}" height="8">
                            ${LatitudinalBarLarge}
                        </svg>
                        <svg x="${-this.speedLatitudinalBack - 80}" y="71" width="48" height="48">
                            ${LatitudinalLeftArrowLarge}
                        </svg>
                    </g>
                    <g style="visibility:${this.hiddeSpeedLatitudinalBackRight}">
                        <svg x="-181" y="91" width="8" height="8">
                            ${LongitudinalDotLarge}
                        </svg>
                        <svg x="173" y="91" width="8" height="8">
                            ${LongitudinalDotActiveLarge}
                        </svg>
                        <g transform="rotate(${180})">
                            <svg x="${-this.speedLatitudinalBack - 32}" y="-99" width="${this.speedLatitudinalBack}" height="8">
                                ${LatitudinalBarLarge}
                            </svg>
                        </g>
                        <g transform="rotate(${180})">
                            <svg x="${-this.speedLatitudinalBack - 80}" y="-119" width="48" height="48">
                                ${LatitudinalLeftArrowLarge}
                            </svg>
                        </g>
                    </g>
                </g>

                <g style="visibility:${this.hiddeSpeedLatitudinalFront}">
                    <svg x="-181.5" y="-64" width="359" height="2">
                        ${LatitudinalLineLarge}
                    </svg>
                    <g style="visibility:${this.hiddeSpeedLatitudinalFrontRight}">
                        <svg x="173" y="-67" width="8" height="8">
                            ${LongitudinalDotActiveLarge}
                        </svg>
                        <svg x="-181" y="-67" width="8" height="8">
                            ${LongitudinalDotLarge}
                        </svg>
                        <svg x="${32}" y="-67" width="${this.speedLatitudinalFront}" height="8">
                            ${LatitudinalBarLarge}
                        </svg>
                        <g transform="rotate(${180})">
                            <svg x="${-this.speedLatitudinalFront - 80}" y="39" width="48" height="48">
                                ${LatitudinalRightArrowLarge}
                            </svg>
                        </g>
                    </g>
                    <g style="visibility:${this.hiddeSpeedLatitudinalFrontLeft}">
                        <svg x="-181" y="-67" width="8" height="8">
                            ${LongitudinalDotActiveLarge}
                        </svg>
                        <svg x="173" y="-67" width="8" height="8">
                            ${LongitudinalDotLarge}
                        </svg>
                        <g transform="rotate(${180})">
                            <svg x="${32}" y="59" width="${this.speedLatitudinalFront}" height="8">
                                ${LatitudinalBarLarge}
                            </svg>
                        </g>
                        <g>
                            <svg x="${-this.speedLatitudinalFront - 80}" y="-87" width="48" height="48">
                                ${LatitudinalRightArrowLarge}
                            </svg>
                        </g>
                    </g>
                </g>

                <g style="visibility:${this.hiddeSpeedLatitudinalMiddle}">
                    <svg x="-181.5" y="${temp}" width="359" height="2">
                        ${LatitudinalLineLarge}
                    </svg>
                    <g style="visibility:${this.hiddeSpeedLatitudinalMiddleLeft}">
                        <svg x="173" y="${temp - 3}" width="8" height="8">
                            ${LongitudinalDotLarge}
                        </svg>
                        <svg x="-181" y="${temp - 3}" width="8" height="8">
                            ${LongitudinalDotActiveLarge}
                        </svg>
                        <svg x="${-this.speedLatitudinalMiddle - 32}" y="${temp - 3}" width="${this.speedLatitudinalMiddle}" height="8">
                            ${LatitudinalBarLarge}
                        </svg>
                        <g>
                            <svg x="${-this.speedLatitudinalMiddle - 80}" y="${temp - 23}" width="48" height="48">
                                ${LatitudinalRightArrowLarge}
                            </svg>
                        </g>
                    </g>
                    <g style="visibility:${this.hiddeSpeedLatitudinalMiddleRight}">
                        <svg x="-181" y="${temp - 3}" width="8" height="8">
                            ${LongitudinalDotLarge}
                        </svg>
                        <svg x="173" y="${temp - 3}" width="8" height="8">
                            ${LongitudinalDotActiveLarge}
                        </svg>
                        <g transform="rotate(${180})">
                            <svg x="${-this.speedLatitudinalMiddle - 32}" y="${-temp - 5}" width="${this.speedLatitudinalMiddle}" height="8">
                                ${LatitudinalBarLarge}
                            </svg>
                        </g>
                        <g transform="rotate(${180})">
                            <svg x="${-this.speedLatitudinalMiddle - 80}" y="${-temp - 25}" width="48" height="48">
                                ${LatitudinalRightArrowLarge}
                            </svg>
                        </g>
                    </g>
                </g>
                
                <g>
                    <svg x="-32" y="-93" width="64" height="192">
                        ${ShipLarge}
                    </svg>
                </g>

                <g style="visibility:${this.hiddeSpeedLatitudinalMiddle}">
                    <svg  x="-32" y="${label - 16}" height="30" width="64">
                        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="16" fill="element-active-color" width="64" height="24">${this.title}</text>
                    </svg>
                </g>

            </svg>`;
    }
}

/*
//LongitudinalBarLarge
<svg width="8" height="128" viewBox="0 0 8 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect id="Bar" width="8" height="128" fill="#0080FF" class="ob-instrument-dynamic-color-fill"/>
</svg>

//LatitudinalBarLarge
<svg width="128" height="8" viewBox="0 0 128 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect id="Bar" y="8" width="8" height="128" transform="rotate(-90 0 8)" fill="#0080FF" class="ob-instrument-dynamic-color-fill"/>
</svg>

*/