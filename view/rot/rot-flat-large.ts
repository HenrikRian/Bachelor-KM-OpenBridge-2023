import { customElement, property, svg } from "lit-element";
import { ObElement } from "../obElement";
import BarMeterBlackLarge from "../../generated-without-style/ROT/BarMeterBlackLarge.svg";
import BarMeterPSLarge from "../../generated-without-style/ROT/BarMeterPSLarge.svg";
import BarMeterNoLabelLarge from "../../generated-without-style/ROT/BarMeterNoLabelLarge.svg";

@customElement("ob-rot-flat-bar-large")
export class RotFlatLarge extends ObElement {
  @property({ type: Number }) rateOfTurn = 0;
  @property({ type: Boolean }) portStarboard = false;
  @property({ type: Boolean }) label = true;

  render() {
    const scale = 208;
    const range = 40;
    const xMark = (this.rateOfTurn / range) * scale;
    let portFill = "ob-instrument-dynamic-color-fill";
    let starboardFill = portFill;
    let barMeter = BarMeterBlackLarge;
    if (this.portStarboard) {
      portFill = "ob-instrument-port-color-fill";
      starboardFill = "ob-instrument-starboard-color-fill";
      barMeter = BarMeterPSLarge;
    }
    if (!this.label) {
      barMeter = BarMeterNoLabelLarge;
    }

    return svg`<svg viewBox="-256 0 512 112">
    <svg x="-256" y="0" width="512" height="40">${barMeter}</svg>
    <rect x="-208" y="40" width="416" height="16" class="ob-instrument-track-color-fill"/>
    
    <svg width="208" height="32" y="24" x="0"  viewBox="0 0 208 32">
        <rect y="16" height="16" x="0" width="${xMark}" class="${starboardFill}"/>
    </svg>
    <svg width="208" height="32" y="24" x="-208"  viewBox="-208 0 208 32">
        <rect y="16" height="16" x="${xMark}" width="${-xMark}" class="${portFill}"/>
    </svg>
    <rect x="-207.5" y="40.5" width="415" height="15" class="ob-border-outline-color-stroke" fill="none" stroke-width="1"/>
    <svg width="208" height="31" y="24" x="0"  viewBox="0 0 208 31">
        <svg width="8" height="31" y="0" x="${xMark - 8}"  viewBox="0 0 8 31">
            <path d="M5.86667 0H8V31H0L5.86667 0Z" class="${starboardFill}"/>
        </svg>
    </svg>
    <svg width="208" height="31" y="24" x="-208"  viewBox="-208 0 208 31">
        <svg width="8" height="31" y="0" x="${xMark}"  viewBox="0 0 8 31">
            <path d="M2.133333 0H0V31H8Z" class="${portFill}"/>
        </svg>
    </svg>
    <line x1="0" x2="0" y1="24" y2="56" stroke-width="2" class="ob-instrument-tick-mark-primary-color-stroke"/>
  </svg>`;
  }
}
