import {LitElement, property, css, unsafeCSS, CSSResult, CSSResultArray} from 'lit-element'
import style from '!css-loader!sass-loader!openbridge-components/scss/_svg-variables.scss';

export class ObElement extends LitElement {
    @property({type: Number}) heading = 0;

    static get styles(): CSSResult | CSSResultArray {
        const obCss = unsafeCSS(style.toString() as string);
        return [obCss, css`
      :host { display: block; }
      .ob-center-label {
         text-anchor: middle;
         dominant-baseline: middle;
      }
    `];
    }
}
