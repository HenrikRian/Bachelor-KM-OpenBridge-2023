import {customElement, property, svg} from "lit-element";
import {ObElement} from "../obElement";
import WatchFaceMedium from "../../generated-with-style/SOG_STW/WatchFaceMedium.svg";
import SpeedNeedleMedium from "../../generated-with-style/SOG_STW/SpeedNeedleMedium.svg";

@customElement('ob-speedometer-medium')
export class SpeedometerMedium extends ObElement {
  @property({type: Number}) value = 0;

  render() {
    const rotate = this.value * 90 / 10 - 90
    return svg`
      <svg viewBox="-128 -128 256 256">
        <svg x="-128.5" y="-128.5" width="257" height="257">${WatchFaceMedium}</svg>
        <g transform="rotate(${rotate})">
          <svg x="-12" y="-128" width="24" height="256">${SpeedNeedleMedium}</svg>
        </g>
      </svg>
    `
  }
}
