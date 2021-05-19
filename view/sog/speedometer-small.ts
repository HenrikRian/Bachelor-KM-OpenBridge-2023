import {customElement, property, svg} from "lit-element";
import {ObElement} from "../obElement";
import WatchFaceSmall from "../../generated-with-style/SOG_STW/WatchFaceSmall.svg";
import SpeedNeedleSmall from "../../generated-with-style/SOG_STW/SpeedNeedleSmall.svg";

@customElement('ob-speedometer-small')
export class SpeedometerSmall extends ObElement {
  @property({type: Number}) value = 0;

  render() {
    const rotate = this.value * 90 / 10 - 90
    return svg`
      <svg viewBox="-64 -64 128 128">
        <svg x="-32.5" y="-32.5" width="129" height="129">${WatchFaceSmall}</svg>
        <g transform="rotate(${rotate})">
          <svg x="-2" y="-32" width="14" height="63">${SpeedNeedleSmall}</svg>
        </g>
      </svg>`
  }
}

/*



*/