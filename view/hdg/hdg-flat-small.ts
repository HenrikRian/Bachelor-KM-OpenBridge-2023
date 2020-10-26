import { customElement, property, svg } from 'lit-element'
import { ObElement } from '../obElement';
import HeadingSmall from '../../generated-without-style/HDG_COG/FlatArrowHdgSmall.svg';
import WatchFace45 from '../../generated-without-style/HDG_COG/WatchFace45Small.svg';
import WatchFace30 from '../../generated-without-style/HDG_COG/WatchFace30Small.svg';
import Cog from './CogFlatSmall.svg';


@customElement('ob-hdg-flat-small')
export class HdgSmall extends ObElement {
  @property({ type: Number }) heading = 0
  @property({ type: Number }) courseOverGround = 0
  @property({ type: Number }) watchFaceResolution = 3.75

  protected render(): unknown {
    const svgWidth = 372;
    const heading = this.heading % 360;
    const cog = this.courseOverGround % 360
    let diff = (cog - heading) % 360;
    diff += diff <= 180 ? 0 : -360
    diff += diff >= -180 ? 0 : 360
    const xCog = diff * svgWidth / 360;
    const headingMapped = heading > 180 ? heading - 360 :  heading;
    const x = (headingMapped) * svgWidth / 360 + 12.0439 - 32;
    const watchface = this.watchFaceResolution == 30 ? WatchFace30 : WatchFace45

    return svg`
<svg viewBox="-32 0 64 36">
        <svg x="-32" y="-7" width="64" height="32" viewBox="${ x + svgWidth } 0 64 32">
        ${ watchface }
      </svg>
      <svg x="-32" y="-7" width="64" height="32" viewBox="${ x } 0 64 32">
        ${ watchface }
      </svg>
      <svg x="${-12+ xCog}" y="24">
        ${ Cog }
      </svg>
      <svg x="-12" y="16">
        ${ HeadingSmall }
      </svg>

  </svg>`;
  }
}
