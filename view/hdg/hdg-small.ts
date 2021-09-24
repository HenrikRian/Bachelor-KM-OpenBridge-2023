import { svg, customElement, property } from "lit-element";
import { ObElement } from "../obElement";
import HeadingSmall from "../../generated-without-style/HDG_COG/HdgCircularSmall.svg";
import CogSmall from "../../generated-without-style/HDG_COG/CogCircularSmall.svg";
import { watchFaceSmallRender } from "../watchface/watchface-small";
import { InnerWatchFaceType } from "../models";

@customElement("ob-hdg-small")
export class HdgSmall extends ObElement {
  @property({ type: Number }) heading = 0;
  @property({ type: Number }) courseOverGround = 0;
  @property({ type: Boolean }) northUp = false;
  @property({ type: Boolean }) showCog = false;

  protected render(): unknown {
    const northUp = this.northUp;
    const angle = this.showCog ? this.courseOverGround : this.heading;
    const symbol = this.showCog ? CogSmall : HeadingSmall;
    const watchFaceAngle = northUp ? 0 : -angle;
    const rotate = northUp ? angle : 0;

    return svg`
<svg viewBox="-32 -32 64 64">
<svg x="-32" y="-32">
${watchFaceSmallRender({
  cross: false,
  rotate: watchFaceAngle,
  showArrow: true,
  startClipDeg: 0,
  endClipDeg: 0,
  primaryTickMarks: 45,
  innerCircle: InnerWatchFaceType.REGULAR,
  uuid: this.uuid,
})}
</svg>
    <g transform="rotate(${rotate})">
      <svg x="-12" y="-32" width="24" height="64">
        ${symbol}
      </svg>
    </g>
  </svg>`;
  }
}
