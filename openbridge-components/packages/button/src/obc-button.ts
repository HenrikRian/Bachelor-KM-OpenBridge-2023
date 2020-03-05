import {customElement, html, LitElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {style} from './obc-button-css';

@customElement('obc-button')
export class Button extends LitElement {
  static styles = style;

  @property({type: Boolean, reflect: true}) disabled = false;
  @property({type: String}) label = '';
  @property({type: Boolean}) raised = false;
  @property({type: Boolean}) normal = false;


  protected render() {
    const classes = {
      'ob-raised': this.raised,
      'ob-normal': this.normal
    };


    return html`
      <button
          id="button"
          class="ob-btn ${classMap(classes)}"
          ?disabled="${this.disabled}"
          aria-label="${this.label}">
        <span class="leading-icon">
          <slot name="icon">
          </slot>
        </span>
        <span class="ob-button__label">${this.label}</span>
        <slot></slot>
        <span class="trailing-icon">
          <slot name="trailingIcon">
          </slot>
        </span>
      </button>`;
  }
}
