import { svg, customElement, property } from "lit-element";
import { ObElement } from "../obElement";
import CircleDotsSmall from "../../generated-without-style/ROT/CircleDotsSmall.svg";
import CircleBorderInsideSmall from "../../generated-without-style/ROT/CircleBorderInsideSmall.svg";
import CircleBorderOutsideSmall from "../../generated-without-style/ROT/CircleBorderOutsideSmall.svg";

import CircleTrackSmall from "../../generated-without-style/ROT/CircleTrackSmall.svg";

@customElement("ob-rot-circle-small")
export class HdgSmall extends ObElement {
  @property({ type: Number }) rateOfTurn = 0;
  @property({ type: Number, attribute: false }) angle = 0;
  intervalHandler: NodeJS.Timeout | null = null;

  connectedCallback() {
    super.connectedCallback();
    const dt = 250 / 15;
    this.intervalHandler = setInterval(() => {
      this.angle += (this.rateOfTurn * dt) / 250;
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
    return svg`<svg viewBox="-32 -32 64 64">
    <svg x="-26" y="-26" width="52" height="52">${CircleTrackSmall}</svg>
    <svg x="-22" y="-22" width="44" height="44">
        ${CircleBorderInsideSmall}
    </svg>
    <svg x="-27" y="-27" width="54" height="54">
        ${CircleBorderOutsideSmall}
    </svg>
    <g transform="rotate(${this.angle})">
      <svg x="-30" y="-30" width="60" height="60">${CircleDotsSmall}</svg>
    </g>
  </svg>`;
  }
}
