import { customElement, property, svg, SVGTemplateResult } from "lit-element";
import { ObElement } from "../obElement";
import SpeedNeedle from "../../generated-without-style/M5-01NavigationElements/MeterLarge.svg";
import { watchFaceLargeRender } from "../watchface/watchface-large";
import { InnerWatchFaceType } from "../models";
import { TickMarkSize } from "../watchface/primary-tickmarks/primary-tickmarks-large";

@customElement("ob-speedometer-medium")
export class SpeedometerMedium extends ObElement {
  @property({ type: Number }) value = 0;
  @property({ type: Number }) maxValue = 100;

  render(): SVGTemplateResult {
    const rotate = (this.value/ this.maxValue * 270)  - 135;
    const labels = [];
    for (let i = 0; i <= 4; i++) {
      labels.push({angle: (i * (270 / 4))  - 135, text: `${i * this.maxValue /4}`, bold: true})
    }

    return svg`
  <svg viewBox="-256 -256 512 512">
    <svg x="-256" y="-256" width="512" height="512">${watchFaceLargeRender(
      {
        cross: false,
        innerCircle: InnerWatchFaceType.CONDENSED,
        clip: { startDeg: 180 - 45, endDeg: 180 + 45 },
        uuid: this.uuid,
        tickmarks: {
          primary: 67.5,
          primarySize: TickMarkSize.MEDIUM,
          secondary: 67.5/5,
          tertiary: false,
        },
        labels: {
          show: true,
          custom: labels
        }
      }
    )}</svg>
    <g transform="rotate(${rotate})">
      <svg x="-24" y="-256" width="40" height="470">${SpeedNeedle}</svg>
    </g>
  </svg>`;
  }
}
