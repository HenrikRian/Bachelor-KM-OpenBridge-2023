import { customElement, LitElement, svg } from "lit-element";
import { ObElement } from "../obElement";

@customElement("test-fixed-font-size")
export class FixedFontSizeTest extends ObElement {
  protected render() {
    const root = this.renderRoot as ShadowRoot;
    const scale =
      512 / parseFloat(getComputedStyle(root.host).getPropertyValue("width"));
    console.log(scale);

    return svg`
<svg viewBox="-256 -256 512 512">
<rect x="-256" y="-256" height="512" width="512" fill="none" stroke="black" />
    <text x="50" y="0" font-size="${20 * scale}" text-anchor="middle">50</text>
</svg>`;
  }
}
