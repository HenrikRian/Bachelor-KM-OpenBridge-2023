import {LitElement, svg, customElement, property, css, unsafeCSS} from 'lit-element'
import watchface from '../generated-with-style/HDG_COG/WatchFaceMedium.svg'
import arrow from '../generated-with-style/HDG_COG/HeadingMedium.svg'
import style from '!css-loader!sass-loader!openbridge-components/scss/_svg-variables.scss';

@customElement('ob-heading-medium')
export class HeadingMedium extends LitElement {
    @property({type: Number}) heading = 0;

    static get styles() {
        const obCss = unsafeCSS(style.toString() as string);
        return css`
      :host { display: block; }
      ${obCss}
    `;
    }

    render() {
        return svg`
    <svg viewBox="-128 -128 256 256" style="width: 100%;"> 
    <svg width="363" height="363" x="-181.5" y="-181.5">
      ${watchface}
      </svg>
      <g transform="rotate(${this.heading})">
      <svg width="32" height="256" x="-16" y="-128">
      ${arrow}
      </svg>
      </g>
      </svg>
    `
    }
}
