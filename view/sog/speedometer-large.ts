import {customElement, property, svg} from "lit-element";
import {ObElement} from "../obElement";
import WatchFaceLarge from "../../generated-with-style/SOG_STW/WatchFaceLarge.svg";
import SpeedNeedleLarge from "../../generated-with-style/SOG_STW/SpeedNeedleLarge.svg";

@customElement('ob-speedometer-large')
export class SpeedometerLarge extends ObElement {
  @property({type: Number}) value = 0;

  render() {
    const rotate = this.value * 90 / 10 - 90
    return svg`
      <svg viewBox="-256 -256 512 512">
        <svg x="-257" y="-257" width="513" height="513">${WatchFaceLarge}</svg>
        <g transform="rotate(${rotate})">
          <svg x="-24" y="-256" width="48" height="512">${SpeedNeedleLarge}</svg>
        </g>
      </svg>`
  }
}
