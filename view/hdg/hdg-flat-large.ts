import { customElement, property, svg } from 'lit-element'
import { ObElement } from '../obElement';
import HeadingLarge from '../../generated-without-style/HDG_COG/FlatArrowHdgLarge.svg';
import WatchFace45 from '../../generated-without-style/HDG_COG/WatchFace45Large.svg';
import WatchFace30 from '../../generated-without-style/HDG_COG/WatchFace30Large.svg';
import Cog from '../../generated-without-style/HDG_COG/CogFlatLarge.svg';


@customElement('ob-hdg-flat-large')
export class HdgLarge extends ObElement {
  @property({ type: Number }) heading = 0
  @property({ type: Number }) courseOverGround = 0
  @property({ type: Number }) watchFaceResolution = 30

  protected render(): unknown {
    const svgWidth = 2880;
    const heading = this.heading % 360;
    const cog = this.courseOverGround % 360
    let diff = (cog - heading) % 360;
    diff += diff <= 180 ? 0 : -360
    diff += diff >= -180 ? 0 : 360
    const xCog = diff * svgWidth / 360;
    const headingMapped = heading > 180 ? heading - 360 :  heading;
    const x = (headingMapped - 28) * svgWidth / 360 ;
    const watchface = this.watchFaceResolution == 30 ? WatchFace30 : WatchFace45

    return svg`
<svg viewBox="-256 0 512 112">
        <svg x="-240" y="0" width="480" height="64" viewBox="${ x + svgWidth } 0 480 64">
        ${ watchface }
      </svg>
      <svg x="-240" y="0" width="480" height="64" viewBox="${ x } 0 480 64">
        ${ watchface }
      </svg>
      <svg x="${-24+ xCog}" y="48">
        ${ Cog }
      </svg>
      <svg x="-24" y="48">
        ${ HeadingLarge }
      </svg>
      <path id="line" d="M0 32V48" stroke-width="2" class="ob-instrument-dynamic-color-stroke"/>

  </svg>`;
  }
}
