import {LitElement, property, css, unsafeCSS} from 'lit-element'
import style from '!css-loader!sass-loader!openbridge-components/scss/_svg-variables.scss';

export class ObElement extends LitElement {
    @property({type: Number}) heading = 0;

    static get styles() {
        const obCss = unsafeCSS(style.toString() as string);
        return css`
      :host { display: block; }
      ${obCss}
    `;
    }
}
