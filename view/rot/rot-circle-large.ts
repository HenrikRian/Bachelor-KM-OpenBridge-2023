import { svg, customElement, property } from "lit-element";
import { ObElement } from "../obElement";
import CircleDotsLarge from "../../generated-without-style/ROT/CircleDotsLarge.svg";
import CircleBorderInsideLarge from "../../generated-without-style/ROT/CircleBorderInsideLarge.svg";
import CircleBorderOutsideLarge from "../../generated-without-style/ROT/CircleBorderOutsideLarge.svg";
import CircleTrackLarge from "../../generated-without-style/ROT/CircleTrackLarge.svg";

@customElement("ob-rot-circle-large")
export class HdgLarge extends ObElement {
  @property({ type: Number }) rateOfTurn = 0;
  @property({ type: Number, attribute: false }) angle = 0;
  intervalHandler: NodeJS.Timeout | null = null;

  connectedCallback() {
    super.connectedCallback();
    const dt = 2000 / 120;
    this.intervalHandler = setInterval(() => {
      this.angle += (this.rateOfTurn * dt) / 2000;
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
    return svg`<svg viewBox="-256 -256 512 512">
    <svg x="-208" y="-208" width="416" height="416">
        ${CircleTrackLarge}
    </svg>
    <svg x="-185" y="-185" width="370" height="370">
        ${CircleBorderInsideLarge}
    </svg>
    <svg x="-208" y="-208" width="416" height="416">
        ${CircleBorderOutsideLarge}
    </svg>
    <g transform="rotate(${this.angle})">
      <svg x="-204" y="-204" width="408" height="408">${CircleDotsLarge}</svg>
    </g>
  </svg>`;
  }
}
