import {svg, customElement, property} from 'lit-element'
import HdgMedium from '../../generated-with-style/Compass/HdgMedium.svg';
import ShipMedium from '../../generated-with-style/Compass/ShipMedium.svg';
import CogMedium from '../../generated-with-style/Compass/CogMedium.svg';
import CurrentMedium from '../../generated-with-style/Compass/CurrentMedium.svg';
import WindMedium from '../../generated-with-style/Compass/WindMedium.svg';
import CenterMedium from '../../generated-with-style/Compass/CenterMedium.svg';

import {ObElement} from "../obElement";
import {watchFaceMediumRender} from "../watchface/watchface-medium";
import {InnerWatchFaceType} from "../models";

import TrueArrow from '../../generated-with-style/True/TrueArrowMedium.svg';
import TrueBar from '../../generated-with-style/True/TrueBarMedium.svg';
import TruePointerLine from '../../generated-with-style/True/TruePointerLineMedium.svg';

import RelativeArrow from '../../generated-with-style/Relative/RelativeArrowMedium.svg';
import RelativeBar from '../../generated-with-style/Relative/RelativeBarMedium.svg';
import RelativePointerLine from '../../generated-with-style/Relative/RelativePointerLineMedium.svg';

@customElement('ob-relative-medium')
export class RelativeMedium extends ObElement {
    @property({type: Boolean}) northUp = false
    @property({type: Boolean}) typeOfLabel = true;
    @property({type: Number}) rotate = 0;
    @property({type: Number}) rotateShip = 0;
    @property({type: Number}) rotateHdg = 0;
    @property({type: Number}) rotateCog = 0;
    @property({type: Number}) rotateCurrent = 0;
    @property({type: Number}) rotateWind = 0;

    @property({type: Number}) speedHdg = 50;
    @property({type: Number}) speedCog = 50;

    protected render(): unknown {
        const northUp = this.northUp;
        const rotate = northUp ? this.rotate : this.rotate - this.rotateHdg;
        const rotateShip = northUp ? this.rotateShip : this.rotateShip - this.rotateHdg;
        const rotateHdg = northUp ? this.rotateHdg : 0;
        const rotateCog = northUp ? this.rotateCog : this.rotateCog - this.rotateHdg;
        const rotateCurrent = northUp ? this.rotateCurrent : this.rotateCurrent - this.rotateHdg;
        const rotateWind = northUp ? this.rotateWind : this.rotateWind - this.rotateHdg;

        return svg`
            <svg viewBox="-128 -128 256 256">
                <svg x="-128" y="-128">
                    ${watchFaceMediumRender({
                        cross: true,
                        rotate: rotate,
                        typeOfLabel: this.typeOfLabel,
                        showLabels: true,
                        startClipDeg: 0,
                        endClipDeg: 0,
                        primaryTickMarks: 45,
                        secondaryTickMarks: 10,
                        innerCircle: InnerWatchFaceType.REGULAR,
                        uuid: this.uuid
                    })}
                </svg>
                <g transform="rotate(${rotateShip})">
                    <svg x="-16" y="-48" width="256" height="256">
                        ${ShipMedium}
                    </svg>
                </g>
        
                <g transform="rotate(${rotate})">
                    <svg x="-4" y="-4" width="256" height="256">
                        ${CenterMedium}
                    </svg>
                </g>

                <g transform="rotate(${rotateHdg})">
                    <svg x="-4" y="-96" width="256" height="256">
                        ${TruePointerLine}
                    </svg>
                    <svg x="-2" y=${-this.speedHdg} width="8" height="${this.speedHdg}">
                        <svg width="4" height="80" viewBox="0 0 4 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect id="Bar" width="4" height="80" fill="#0080FF" class="ob-instrument-dynamic-color-fill"/>
                        </svg>
                    </svg>
                    <svg x="-12" y=${-this.speedHdg - 23.5} width="48" height="48">
                        ${TrueArrow}
                    </svg>
                </g>

                <g transform="rotate(${rotateCog})">
                    <svg x="-4" y="-96" width="256" height="256">
                        ${RelativePointerLine}
                    </svg>
                    <svg x="-2" y=${-this.speedCog} width="8" height="${this.speedCog}">
                        <svg width="4" height="80" viewBox="0 0 4 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect id="Bar" width="4" height="80" fill="#0080FF" class="ob-instrument-dynamic-color-fill"/>
                        </svg>
                    </svg>
                    <svg x="-12" y=${-this.speedCog - 23.5} width="48" height="48">
                        ${RelativeArrow}
                    </svg>
                </g>

                <g transform="rotate(${rotateCurrent})">
                    <svg x="-12" y="-128" width="256" height="256">
                        ${CurrentMedium}
                    </svg>
                </g>
                <g transform="rotate(${rotateWind})">
                    <svg x="-10" y="-128" width="256" height="256">
                        ${WindMedium}
                    </svg>
                </g>
            </svg>`;
    }
}


/*

//RelativeArrowMedium

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Arrow">
        <path id="Arrow_2" d="M12 2.6L20.5 23L3.5 23L12 2.6Z" fill="#F7F7F7" stroke="#0080FF" stroke-width="2" class="ob-instrument-dynamic-color-stroke ob-container-background-color-fill"/>
    </g>
</svg>

*/