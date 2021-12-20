import {svg, customElement, property} from 'lit-element'
import {ObElement} from "../obElement";
import {watchFaceSmallRender} from "../watchface/watchface-small";
import {InnerWatchFaceType} from "../models";

import HdgSmall from '../../generated-with-style/Compass/HdgSmall.svg';
import CogSmall from '../../generated-with-style/Compass/CogSmall.svg';
import CenterSmall from '../../generated-with-style/Compass/CenterSmall.svg';

@customElement('ob-relative-small')
export class RelativeSmall extends ObElement {
    @property({type: Boolean}) northUp = false;
    @property({type: Number}) rotate = 0;
    @property({type: Number}) rotateHdg = 0;
    @property({type: Number}) rotateCog = 0;

    protected render(): unknown {
        const northUp = this.northUp;
        const rotate = northUp ? this.rotate : this.rotate - this.rotateHdg;
        const rotateHdg = northUp ? this.rotateHdg : 0;
        const rotateCog = northUp ? this.rotateCog : this.rotateCog - this.rotateHdg;

        return svg`
            <svg viewBox="-32 -32 64 64">
                <svg x="-32" y="-32">
                    ${watchFaceSmallRender({
                        cross: false,
                        showArrow: true,
                        rotate: rotate,
                        //typeOfLabel: true,
                        startClipDeg: 0,
                        endClipDeg: 0,
                        primaryTickMarks: 45,
                        innerCircle: InnerWatchFaceType.REGULAR,
                        uuid: this.uuid
                    })}
                </svg>

                <g transform="rotate(${rotate})">
                    <svg x="-2" y="-2" width="16" height="64">
                        ${CenterSmall}
                    </svg>
                </g>
                <g transform="rotate(${rotateHdg})">
                    <svg x="-12" y="-32" width="20" height="64">
                        ${HdgSmall}
                    </svg>
                </g>
                <g transform="rotate(${rotateCog})">
                    <svg x="-12" y="-32" width="20" height="64">
                        ${CogSmall}
                    </svg>
                </g>
            </svg>`;
    }
}