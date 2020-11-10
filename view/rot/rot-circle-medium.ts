import {svg, customElement, property} from 'lit-element'
import {ObElement} from "../obElement";
import CircleDotsMedium from '../../generated-without-style/ROT/CircleDotsMedium.svg'
import CircleBorderInsideMedium
    from '../../generated-without-style/ROT/CircleBorderInsideMedium.svg'
import CircleBorderOutsideMedium
    from '../../generated-without-style/ROT/CircleBorderOutsideMedium.svg'
import CircleTrackMedium from '../../generated-with-style/ROT/CircleTrackMedium.svg'

@customElement('ob-rot-circle-medium')
export class HdgMedium extends ObElement {
    @property({type: Number}) rateOfTurn = 0;
    @property({type: Number, attribute: false}) angle = 0;
    intervalHandler: NodeJS.Timeout | null = null

    connectedCallback() {
        super.connectedCallback();
        const dt = 1000 / 60;
        this.intervalHandler = setInterval(() => {
            this.angle += this.rateOfTurn * dt / 1000;
        }, dt);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.intervalHandler !== null) {
            clearInterval(this.intervalHandler);
            this.intervalHandler = null;
        }
    }

    render() {
        return  svg`<svg viewBox="-128 -128 256 256">
    <svg x="-104" y="-104" width="208" height="208">
        ${CircleTrackMedium}
    </svg>
    <svg x="-88" y="-88" width="176" height="176">
        ${CircleBorderInsideMedium}
    </svg>
    <svg x="-104" y="-104" width="208" height="208">
        ${CircleBorderOutsideMedium}
    </svg>
    <g transform="rotate(${this.angle})">
      <svg x="-100" y="-100" width="200" height="200">${CircleDotsMedium}</svg>
    </g>
  </svg>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ob-rot-circle-medium': HdgMedium
    }
}
