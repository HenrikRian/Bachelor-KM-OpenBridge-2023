import { customElement, property, svg } from 'lit-element'
import { ObElement } from '../obElement';
import HeadingMedium from '../../generated-without-style/HDG_COG/FlatArrowHdgMedium.svg';
import WatchFace45 from '../../generated-without-style/HDG_COG/WatchFace45Medium.svg';
import WatchFace30 from '../../generated-without-style/HDG_COG/WatchFace30Medium.svg';
import Cog from '../../generated-without-style/HDG_COG/CogFlatMedium.svg';


@customElement('ob-hdg-flat-medium')
export class HdgMedium extends ObElement {
  @property({ type: Number }) heading = 0
  @property({ type: Number }) courseOverGround = 0
  @property({ type: Number }) watchFaceResolution = 15

  protected render(): unknown {
    const svgWidth = 1456;
    const heading = this.heading % 360;
    const cog = this.courseOverGround % 360
    let diff = (cog - heading) % 360;
    diff += diff <= 180 ? 0 : -360
    diff += diff >= -180 ? 0 : 360
    const xCog = diff * svgWidth / 360;
    const headingMapped = heading > 180 ? heading - 360 :  heading;
    const x = (headingMapped) * svgWidth / 360 - 120 + .08887;
    const watchface = this.watchFaceResolution == 30 ? WatchFace30 : WatchFace45

    return svg`
<svg viewBox="-128 0 256 68">
        <svg x="-128" y="0" width="256" height="44" viewBox="${ x + svgWidth } 0 256 44">
        ${ watchface }
      </svg>
      <svg x="-128" y="0" width="256" height="44" viewBox="${ x } 0 256 44">
        ${ watchface }
      </svg>
      <svg x="${-12+ xCog}" y="36">
        ${ Cog }
      </svg>
      <svg x="-12" y="36">
        ${ HeadingMedium }
      </svg>
      <path id="line" d="M0 28v16" stroke-width="1" class="ob-instrument-dynamic-color-stroke"/>

  </svg>`;
  }
}
