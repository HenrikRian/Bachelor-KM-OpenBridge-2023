import {svg, customElement, property} from 'lit-element'
import {ObElement} from "../obElement";

import ShipMedium from '../../generated-with-style/02 A Long - Lat/LongLatShipMedium.svg';

import LongitudinalLineMedium from '../../generated-with-style/02 A Long - Lat/LongLatLongitudinalLineMedium.svg';
//import LongitudinalDotMedium from '../../generated-with-style/02 A Long - Lat/LongLatLongitudinalDotMedium.svg';
import LongitudinalDotMedium from './svgFiles/longLatDotMedium.svg';
import LongitudinalDotActiveMedium from '../../generated-with-style/02 A Long - Lat/LongLatLongitudinalDotActiveMedium.svg';
//import LongitudinalBarMedium from '../../generated-with-style/02 A Long - Lat/LongLatLongitudinalBarMedium.svg';
import LongitudinalBarMedium from './svgFiles/longitudinalBarMedium.svg';
import LongitudinalArrowMedium from '../../generated-with-style/02 A Long - Lat/LongLatLongitudinalArrowMedium.svg';

import LatitudinalLineMedium from '../../generated-with-style/02 A Long - Lat/LongLatLatitudinalLineMedium.svg';
//import LatitudinalBarMedium from '../../generated-with-style/02 A Long - Lat/LongLatLatitudinalBarMedium.svg';
import LatitudinalBarMedium from './svgFiles/latitudinalBarMedium.svg';
import LatitudinalLeftArrowMedium from '../../generated-with-style/02 A Long - Lat/LongLatLatitudinalLeftArrowMedium.svg';

import LatitudinalRightArrowMedium from '../../generated-with-style/02 A Long - Lat/LongLatLatitudinalRightArrowMedium.svg';

@customElement('ob-long-lat-medium')
export class LongLatMedium extends ObElement {
    @property({type: Number}) speedLongitudinal = 25;
    @property({type: Number}) speedLatitudinalBack = 25;
    @property({type: Number}) speedLatitudinalFront = 25;
    @property({type: Number}) speedLatitudinalMiddle = 25;
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
        if(this.speedLongitudinal <= 0) {
            this.hiddeSpeedLongitudinalFront = 'hidden';
            this.hiddeSpeedLongitudinalBack = '';
        }
        else {
            this.hiddeSpeedLongitudinalBack = 'hidden';
            this.hiddeSpeedLongitudinalFront = '';
        }

        //latitudinal-back - (left - right)
        if(this.speedLatitudinalBack <= 0) {
            this.hiddeSpeedLatitudinalBackLeft = 'hidden';
            this.hiddeSpeedLatitudinalBackRight = '';
        }
        else {
            this.hiddeSpeedLatitudinalBackRight = 'hidden';
            this.hiddeSpeedLatitudinalBackLeft = '';
        }

        //latitudinal-front - (left - right)
        if(this.speedLatitudinalFront <= 0) {
            this.hiddeSpeedLatitudinalFrontLeft = 'hidden';
            this.hiddeSpeedLatitudinalFrontRight = '';
        }
        else {
            this.hiddeSpeedLatitudinalFrontRight = 'hidden';
            this.hiddeSpeedLatitudinalFrontLeft = '';
        }

        //latitudinal-middle - (left - right)
        if(this.speedLatitudinalMiddle <= 0) {
            this.hiddeSpeedLatitudinalMiddleLeft = 'hidden';
            this.hiddeSpeedLatitudinalMiddleRight = '';
        }
        else {
            this.hiddeSpeedLatitudinalMiddleRight = 'hidden';
            this.hiddeSpeedLatitudinalMiddleLeft = '';
        }

        let temp = 0;
        let label = -2;
        if (this.positionOfSensor === 'front') {//front
            temp = -32;
            label = -30.5;
        }
        else if (this.positionOfSensor === 'middle') {//middle
            temp = -0.5;//TODO
            label = 10;
        }
        else if (this.positionOfSensor === 'back') {//back
            temp = 45.5; //TODO
            label = 44;
        }

        return svg`
            <svg viewBox="-128 -128 256 256">
                
                <g style="visibility:${this.hiddeSpeedLongitudinal}">
                    <svg x="-0.5" y="-122" width="2" height="244">
                        ${LongitudinalLineMedium}
                    </svg>
                    <g style="visibility:${this.hiddeSpeedLongitudinalFront}">
                        <svg x="-2" y="120" width="4" height="4">
                            ${LongitudinalDotMedium}
                        </svg>
                        <svg x="-2" y="-124" width="4" height="4">
                            ${LongitudinalDotActiveMedium}
                        </svg>
                        <svg x="-2" y=${-this.speedLongitudinal * 0.5 - 48} width="4" height="${this.speedLongitudinal}">
                            ${LongitudinalBarMedium}
                        </svg>
                        <svg x="-12" y=${-this.speedLongitudinal * 0.5 - 71.5} width="24" height="24">
                            ${LongitudinalArrowMedium}
                        </svg>
                    </g>

                    <g style="visibility:${this.hiddeSpeedLongitudinalBack}">
                        <svg x="-2" y="-124" width="4" height="4">
                            ${LongitudinalDotMedium}
                        </svg>
                        <svg x="-2" y="120" width="4" height="4">
                            ${LongitudinalDotActiveMedium}
                        </svg>
                        <g transform="rotate(${180})">
                            <svg x="-2" y="${this.speedLongitudinal * 0.5 - 48}" width="4" height="${-this.speedLongitudinal}">
                                ${LongitudinalBarMedium}
                            </svg>
                        </g>
                        <g transform="rotate(${180})">
                            <svg x="-12" y=${this.speedLongitudinal * 0.5 - 71.5} width="24" height="24">
                                ${LongitudinalArrowMedium}
                            </svg>
                        </g>
                    </g>
                </g>

                <g style="visibility:${this.hiddeSpeedLatitudinalBack}">
                    <svg x="-91.5" y="45.5" width="180" height="2">
                        ${LatitudinalLineMedium}
                    </svg>
                    <g style="visibility:${this.hiddeSpeedLatitudinalBackLeft}">
                        <svg x="-92" y="44" width="4" height="4">
                            ${LongitudinalDotMedium}
                        </svg>
                        <svg x="88" y="44" width="4" height="4">
                            ${LongitudinalDotActiveMedium}
                        </svg>
                        <g transform="rotate(${180})">
                            <svg x="${-this.speedLatitudinalBack * 0.5 - 16}" y="-48" width="${this.speedLatitudinalBack}" height="4">
                                ${LatitudinalBarMedium}
                            </svg>
                        </g>
                        <g transform="rotate(${180})">
                            <svg x="${-this.speedLatitudinalBack * 0.5 - 39.5}" y="-58" width="24" height="24">
                                ${LatitudinalLeftArrowMedium}
                            </svg>
                        </g>
                    </g>
                    <g style="visibility:${this.hiddeSpeedLatitudinalBackRight}">
                        <svg x="88" y="44" width="4" height="4">
                            ${LongitudinalDotMedium}
                        </svg>
                        <svg x="-92" y="44" width="4" height="4">
                            ${LongitudinalDotActiveMedium}
                        </svg>
                        <svg x="${this.speedLatitudinalBack * 0.5 - 16}" y="44" width="${-this.speedLatitudinalBack}" height="4">
                            ${LatitudinalBarMedium}
                        </svg>
                        <svg x="${this.speedLatitudinalBack * 0.5 - 39.5}" y="34" width="24" height="24">
                            ${LatitudinalLeftArrowMedium}
                        </svg>
                    </g>
                </g>

                <g style="visibility:${this.hiddeSpeedLatitudinalFront}">
                    <svg x="-91.5" y="-32" width="180" height="2">
                        ${LatitudinalLineMedium}
                    </svg>
                    <g style="visibility:${this.hiddeSpeedLatitudinalFrontRight}">
                        <svg x="-92" y="-33.5" width="4" height="4">
                            ${LongitudinalDotActiveMedium}
                        </svg>
                        <svg x="88" y="-33.5" width="4" height="4">
                            ${LongitudinalDotMedium}
                        </svg>
                        <svg x="${this.speedLatitudinalFront * 0.5 - 16}" y="-33.5" width="${-this.speedLatitudinalFront}" height="4">
                            ${LatitudinalBarMedium}
                        </svg>
                        <g>
                            <svg x="${this.speedLatitudinalFront * 0.5 - 39.5}" y="-43.5" width="24" height="24">
                                ${LatitudinalRightArrowMedium}
                            </svg>
                        </g>
                    </g>
                    <g style="visibility:${this.hiddeSpeedLatitudinalFrontLeft}">
                        <svg x="88" y="-33.5" width="4" height="4">
                            ${LongitudinalDotActiveMedium}
                        </svg>
                        <svg x="-92" y="-33.5" width="4" height="4">
                            ${LongitudinalDotMedium}
                        </svg>
                        <g transform="rotate(${180})">
                            <svg x="${-this.speedLatitudinalFront * 0.5 - 16}" y="29.5" width="${this.speedLatitudinalFront}" height="4">
                                ${LatitudinalBarMedium}
                            </svg>
                        </g>
                        <g transform="rotate(${180})">
                            <svg x="${-this.speedLatitudinalFront * 0.5 - 39.5}" y="19.5" width="24" height="24">
                                ${LatitudinalRightArrowMedium}
                            </svg>
                        </g>
                    </g>
                </g>

                <g style="visibility:${this.hiddeSpeedLatitudinalMiddle}">
                    <svg x="-91.5" y="${temp}" width="244" height="2">
                        ${LatitudinalLineMedium}
                    </svg>
                    <g style="visibility:${this.hiddeSpeedLatitudinalMiddleLeft}">
                        <svg x="-92" y="${temp - 1.5}" width="4" height="4">
                            ${LongitudinalDotMedium}
                        </svg>
                        <svg x="88" y="${temp - 1.5}" width="4" height="4">
                            ${LongitudinalDotActiveMedium}
                        </svg>
                        <g transform="rotate(${180})">
                            <svg x="${-this.speedLatitudinalMiddle * 0.5 - 16}" y="${-temp - 2.5}" width="${this.speedLatitudinalMiddle}" height="4">
                                ${LatitudinalBarMedium}
                            </svg>
                        </g>
                        <g transform="rotate(${180})">
                            <svg x="${-this.speedLatitudinalMiddle * 0.5 - 39.5}" y="${-temp - 12.5}" width="24" height="24">
                                ${LatitudinalRightArrowMedium}
                            </svg>
                        </g>
                    </g>
                    <g style="visibility:${this.hiddeSpeedLatitudinalMiddleRight}">
                        <svg x="88" y="${temp - 1.5}" width="4" height="4">
                            ${LongitudinalDotMedium}
                        </svg>
                        <svg x="-92" y="${temp - 1.5}" width="4" height="4">
                            ${LongitudinalDotActiveMedium}
                        </svg>
                        <svg x="${this.speedLatitudinalMiddle * 0.5 - 16}" y="${temp - 1.5}" width="${-this.speedLatitudinalMiddle}" height="4">
                            ${LatitudinalBarMedium}
                        </svg>
                        <g>
                            <svg x="${this.speedLatitudinalMiddle * 0.5 - 39.5}" y="${temp - 11.5}" width="24" height="24">
                                ${LatitudinalRightArrowMedium}
                            </svg>
                        </g>
                    </g>
                </g>
        
                <g>
                    <svg x="-16" y="-48" width="32" height="96">
                        ${ShipMedium}
                    </svg>
                </g>

                <g style="visibility:${this.hiddeSpeedLatitudinalMiddle}">
                    <svg  x="-15" y="${label - 8}" height="16" width="30">
                        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="12" fill="element-active-color" width="32" height="16">${this.title}</text>
                    </svg>
                </g>

            </svg>
        `;
    }
}

/*
    //LatitudinalBarMedium
    <svg width="64" height="4" viewBox="0 0 64 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect id="Bar" y="4" width="4" height="64" transform="rotate(-90 0 4)" fill="#0080FF" class="ob-instrument-dynamic-color-fill"/>
    </svg>

    //longitudinalBarMedium
    <svg width="4" height="64" viewBox="0 0 4 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect id="Bar" width="4" height="64" fill="#0080FF" class="ob-instrument-dynamic-color-fill"/>
    </svg>

    //dotMedium
    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle id="Dot" cx="2" cy="2" r="2" fill="#E5E5E5" class="ob-instrument-tick-mark-tertiary-color-fill"/>
    </svg>
*/