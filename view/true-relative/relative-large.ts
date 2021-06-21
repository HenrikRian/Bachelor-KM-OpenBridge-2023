import {svg, customElement, property} from 'lit-element'
import HdgLarge from '../../generated-with-style/Compass/HdgLarge.svg';
import ShipLarge from '../../generated-with-style/Compass/ShipLarge.svg';
import CogLarge from '../../generated-with-style/Compass/CogLarge.svg';
import CurrentLarge from '../../generated-with-style/Compass/CurrentLarge.svg';
import WindLarge from '../../generated-with-style/Compass/WindLarge.svg';
import CenterLarge from '../../generated-with-style/Compass/CenterLarge.svg';


import TrueArrow from '../../generated-with-style/True/TrueArrowLarge.svg';
import TrueBar from '../../generated-with-style/True/TrueBarLarge.svg';
import TruePointerLine from '../../generated-with-style/True/TruePointerLineLarge.svg';

import RelativeArrow from '../../generated-with-style/Relative/RelativeArrowLarge.svg';
import RelativeBar from '../../generated-with-style/Relative/RelativeBarLarge.svg';
import RelativePointerLine from '../../generated-with-style/Relative/RelativePointerLineLarge.svg';


import {ObElement} from "../obElement";
import {watchFaceLargeRender} from "../watchface/watchface-large";
import {InnerWatchFaceType} from "../models";

@customElement('ob-relative-large')
export class RelativeLarge extends ObElement {
    @property({type: Boolean}) northUp = false;
    @property({type: Boolean}) typeOfLabel = true;
    @property({type: Number}) rotate = 0;
    @property({type: Number}) rotateShip = 0;
    @property({type: Number}) rotateHdg = 0;
    @property({type: Number}) rotateCog = 0;
    @property({type: Number}) rotateCurrent = 0;
    @property({type: Number}) rotateWind = 0;

    @property({type: Number}) speedHdg = 97;
    @property({type: Number}) speedCog = 97;

    protected render(): unknown {
        const northUp = this.northUp;
        const rotate = northUp ? this.rotate : this.rotate - this.rotateHdg;
        const rotateShip = northUp ? this.rotateShip : this.rotateShip - this.rotateHdg;
        const rotateHdg = northUp ? this.rotateHdg : 0;
        const rotateCog = northUp ? this.rotateCog : this.rotateCog - this.rotateHdg;
        const rotateCurrent = northUp ? this.rotateCurrent : this.rotateCurrent - this.rotateHdg;
        const rotateWind = northUp ? this.rotateWind : this.rotateWind - this.rotateHdg;

        return svg`
            <svg viewBox="-256 -256 512 512">
                <svg x="-256" y="-256">
                    ${watchFaceLargeRender({
                        cross: true,
                        rotate: rotate,
                        typeOfLabel: this.typeOfLabel,
                        showLabels: true,
                        startClipDeg: 0,
                        endClipDeg: 0,
                        primaryTickMarks: 45,
                        secondaryTickMarks: 5,
                        innerCircle: InnerWatchFaceType.REGULAR,
                        uuid: this.uuid
                    })}
                </svg>
                <g transform="rotate(${rotateShip})">
                    <svg x="-32" y="-96" width="256" height="256">
                        ${ShipLarge}
                    </svg>
                </g>

                <g transform="rotate(${rotate})">
                    <svg x="-8" y="-8" width="256" height="256">
                        ${CenterLarge}
                    </svg>
                </g>
                            
                <g transform="rotate(${rotateHdg})">
                    <svg x="-4" y="-192" width="512" height="512">
                        ${TruePointerLine}
                    </svg>
                    <svg x="-4" y=${-this.speedHdg * 1.3} width="8" height="${this.speedHdg * 1.3}">
                        <svg width="8" height="150" viewBox="0 0 8 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect id="Bar" width="8" height="150" fill="#0080FF" class="ob-instrument-dynamic-color-fill"/>
                        </svg>
                    </svg>
                    <svg x="-24" y=${-this.speedHdg * 1.3 - 47} width="48" height="48">
                        ${TrueArrow}
                    </svg>
                </g>

                <g transform="rotate(${rotateCog})">
                    <svg x="-4" y="-192" width="512" height="512">
                        ${RelativePointerLine}
                    </svg>
                    <svg x="-2" y=${-this.speedCog * 1.3} width="8" height="${this.speedCog * 1.3}">
                        <svg width="4" height="150" viewBox="0 0 4 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect id="Bar" width="4" height="150" fill="#0080FF" class="ob-instrument-dynamic-color-fill"/>
                        </svg>
                    </svg>
                    <svg x="-24" y=${-this.speedCog * 1.3 - 47} width="48" height="48">
                        ${RelativeArrow}
                    </svg>
                </g>
                            
                <g transform="rotate(${rotateCurrent})">
                    <svg x="-24" y="-256" width="512" height="512">
                        ${CurrentLarge}
                    </svg>
                </g>
                            
                <g transform="rotate(${rotateWind})">
                    <svg x="-20" y="-256" width="512" height="512">
                        ${WindLarge}
                    </svg>
                </g>
            </svg>`;
    }
}


/*

//RelativeArrowLarge

<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Arrow">
        <path id="Arrow_2" d="M24 5.2L41 46L6.99999 46L24 5.2Z" fill="#F7F7F7" stroke="#0080FF" stroke-width="4" class="ob-instrument-dynamic-color-stroke ob-container-background-color-fill"/>
    </g>
</svg>

*/