import {LitElement, css, unsafeCSS, CSSResult, CSSResultArray} from 'lit-element'
import style from '!css-loader!sass-loader!openbridge-components/scss/_svg-variables.scss';
import styleText from '!css-loader!sass-loader!openbridge-components/scss/_fonts.scss';
import { uuidv4 } from './utils/uuid';

export class ObElement extends LitElement {
    uuid: string;

    constructor() {
        super();
        this.uuid = uuidv4();
    }

    static get styles(): CSSResult | CSSResultArray {
        const obCss = unsafeCSS(style.toString() as string);
        const obFontCss = unsafeCSS(styleText.toString() as string);
        return [obCss, obFontCss, css`
      :host { display: block; }
      .ob-center-label {
         text-anchor: middle;
         dominant-baseline: middle;
      }
      
      .ob-right-label {
         text-anchor: end;
         dominant-baseline: middle;
      }
    `];
    }
}
