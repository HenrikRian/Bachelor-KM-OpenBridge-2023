import {css} from 'lit-element'; 
export const style = css` 
/**
  This file resets default behavior in browsers.
 */
:focus {
  outline: none; }

* {
  box-sizing: border-box; }

.ob-visually-hidden {
  position: absolute;
  width: 1px;
  /* stylelint-disable-line meowtec/no-px */
  height: 1px;
  /* stylelint-disable-line meowtec/no-px */
  padding: 0;
  margin: -1px;
  /* stylelint-disable-line meowtec/no-px */
  overflow: hidden;
  clip: rect(0 0 0 0);
  border: 0;
  outline: 0;
  -webkit-appearance: none;
  /* stylelint-disable-line property-no-vendor-prefix */
  -moz-appearance: none;
  /* stylelint-disable-line property-no-vendor-prefix */ }

/** Use this function for unit testing
 *  Sets content to $tag, so that getCalculatedStyle can be used to assert the style with highest priority.
 */
/* stylelint-disable-line meowtec/no-px */
.ob-btn {
  font-family: "Open Sans", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  color: var(--ui-element-active-color);
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 12rem;
  height: 5rem;
  padding: 0 3rem;
  text-align: center;
  vertical-align: middle;
  border-radius: 0.75rem; }
  .ob-btn:disabled, .ob-btn.ob-disabled {
    color: var(--ui-element-disabled-color); }
  .ob-btn:hover:not(:disabled) {
    cursor: pointer; }
  .ob-btn.ob-normal {
    background-color: var(--style-normal-normal-fill-color);
    border-color: var(--style-normal-normal-stroke-color);
    border-style: solid;
    border-width: var(--style-normal-normal-border-width); }
    .ob-btn.ob-normal:hover:not(:disabled):not(.ob-disabled) {
      z-index: 1;
      background-color: var(--style-normal-hover-fill-color);
      border-color: var(--style-normal-hover-stroke-color);
      border-width: var(--style-normal-hover-border-width); }
    .ob-btn.ob-normal:focus-within {
      background-color: var(--style-normal-focused-fill-color);
      z-index: 2; }
      .ob-btn.ob-normal:focus-within::after {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        margin: -0.5rem;
        content: "";
        border: 0.5rem var(--style-normal-focused-stroke-color) solid;
        border-radius: 0.75rem; }
      .ob-btn.ob-normal:focus-within:active {
        background-color: var(--style-normal-pressed-fill-color);
        border-color: var(--style-normal-pressed-stroke-color);
        border-width: var(--style-normal-pressed-border-width); }
    .ob-btn.ob-normal:disabled, .ob-btn.ob-normal.ob-disabled {
      color: var(--ui-element-disabled-color);
      background-color: var(--style-normal-disabled-fill-color);
      border-color: var(--style-normal-disabled-stroke-color); }
  .ob-btn.ob-raised {
    color: var(--ui-element-active-inverted-color);
    background-color: var(--style-raised-normal-fill-color);
    border-color: var(--style-raised-normal-stroke-color);
    border-style: solid;
    border-width: var(--style-raised-normal-border-width); }
    .ob-btn.ob-raised:hover:not(:disabled):not(.ob-disabled) {
      z-index: 1;
      background-color: var(--style-raised-hover-fill-color);
      border-color: var(--style-raised-hover-stroke-color);
      border-width: var(--style-raised-hover-border-width); }
    .ob-btn.ob-raised:focus-within {
      background-color: var(--style-raised-focused-fill-color);
      z-index: 2; }
      .ob-btn.ob-raised:focus-within::after {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        margin: -0.5rem;
        content: "";
        border: 0.5rem var(--style-raised-focused-stroke-color) solid;
        border-radius: 0.75rem; }
      .ob-btn.ob-raised:focus-within:active {
        background-color: var(--style-raised-pressed-fill-color);
        border-color: var(--style-raised-pressed-stroke-color);
        border-width: var(--style-raised-pressed-border-width); }
    .ob-btn.ob-raised:disabled, .ob-btn.ob-raised.ob-disabled {
      color: var(--ui-element-disabled-color);
      background-color: var(--style-raised-disabled-fill-color);
      border-color: var(--style-raised-disabled-stroke-color); }
  .ob-btn > .ob-text-under {
    position: absolute;
    left: 0;
    width: 100%;
    transform: translateY(4rem); }
  .ob-btn .ob-icon {
    display: flex;
    align-items: center;
    height: 100%; }

.ob-btn-group {
  display: inline-block;
  height: 5rem;
  background-color: var(--style-indent-normal-fill-color);
  border-color: var(--style-indent-normal-stroke-color);
  border-width: var(--style-indent-normal-border-width);
  border-radius: 5rem; }

.ob-btn-group .ob-btn {
  border-radius: 5rem;
  color: var(--ui-element-neutral-color);
  background-color: var(--style-flat-normal-fill-color);
  border-color: var(--style-flat-normal-stroke-color);
  border-style: solid;
  border-width: var(--style-flat-normal-border-width); }
  .ob-btn-group .ob-btn:hover:not(:disabled):not(.ob-disabled) {
    z-index: 1;
    background-color: var(--style-flat-hover-fill-color);
    border-color: var(--style-flat-hover-stroke-color);
    border-width: var(--style-flat-hover-border-width); }
  .ob-btn-group .ob-btn:focus-within {
    background-color: var(--style-flat-focused-fill-color);
    z-index: 2; }
    .ob-btn-group .ob-btn:focus-within::after {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
      margin: -var(--style-flat-focused-border-width);
      content: "";
      border: var(--style-flat-focused-border-width) var(--style-flat-focused-stroke-color) solid;
      border-radius: 3rem; }
    .ob-btn-group .ob-btn:focus-within:active {
      background-color: var(--style-flat-pressed-fill-color);
      border-color: var(--style-flat-pressed-stroke-color);
      border-width: var(--style-flat-pressed-border-width); }
  .ob-btn-group .ob-btn:disabled, .ob-btn-group .ob-btn.ob-disabled {
    color: var(--ui-element-disabled-color);
    background-color: var(--style-flat-disabled-fill-color);
    border-color: var(--style-flat-disabled-stroke-color); }
  .ob-btn-group .ob-btn.ob-selected {
    background-color: var(--style-normal-normal-fill-color);
    border-color: var(--style-normal-normal-stroke-color);
    border-style: solid;
    border-width: var(--style-normal-normal-border-width); }
    .ob-btn-group .ob-btn.ob-selected:hover:not(:disabled):not(.ob-disabled) {
      z-index: 1;
      background-color: var(--style-normal-hover-fill-color);
      border-color: var(--style-normal-hover-stroke-color);
      border-width: var(--style-normal-hover-border-width); }
    .ob-btn-group .ob-btn.ob-selected:focus-within {
      background-color: var(--style-normal-focused-fill-color);
      z-index: 2; }
      .ob-btn-group .ob-btn.ob-selected:focus-within::after {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        margin: -0.5rem;
        content: "";
        border: 0.5rem var(--style-normal-focused-stroke-color) solid;
        border-radius: 3rem; }
      .ob-btn-group .ob-btn.ob-selected:focus-within:active {
        background-color: var(--style-normal-pressed-fill-color);
        border-color: var(--style-normal-pressed-stroke-color);
        border-width: var(--style-normal-pressed-border-width); }
    .ob-btn-group .ob-btn.ob-selected:disabled, .ob-btn-group .ob-btn.ob-selected.ob-disabled {
      color: var(--ui-element-disabled-color);
      background-color: var(--style-normal-disabled-fill-color);
      border-color: var(--style-normal-disabled-stroke-color); }

.ob-slide-toggle {
  color: var(--on-background-active-color);
  background-color: var(--style-indent-normal-fill-color);
  border-color: var(--style-indent-normal-stroke-color);
  border-style: solid;
  border-width: var(--style-indent-normal-border-width);
  position: relative;
  display: flex;
  align-items: center;
  width: 6rem;
  height: 3rem;
  border-radius: 3rem; }
  .ob-slide-toggle:hover:not(:disabled):not(.ob-disabled) {
    z-index: 1;
    color: var(--on-background-focused-color);
    background-color: var(--style-indent-hover-fill-color);
    border-color: var(--style-indent-hover-stroke-color);
    border-width: var(--style-indent-hover-border-width); }
  .ob-slide-toggle:focus-within {
    background-color: var(--style-indent-focused-fill-color);
    z-index: 2; }
    .ob-slide-toggle:focus-within::after {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
      margin: -var(--style-indent-focused-border-width);
      content: "";
      border: var(--style-indent-focused-border-width) var(--style-indent-focused-stroke-color) solid;
      border-radius: 3rem; }
    .ob-slide-toggle:focus-within:active {
      background-color: var(--style-indent-pressed-fill-color);
      border-color: var(--style-indent-pressed-stroke-color);
      border-width: var(--style-indent-pressed-border-width); }
  .ob-slide-toggle:disabled, .ob-slide-toggle.ob-disabled {
    color: var(--ui-element-disabled-color);
    background-color: var(--style-indent-disabled-fill-color);
    border-color: var(--style-indent-disabled-stroke-color); }
  .ob-slide-toggle:hover:not(:disabled):not(.ob-disabled) {
    cursor: pointer; }
  .ob-slide-toggle > .ob-thumb {
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 1.5rem;
    color: var(--on-background-active-color);
    background-color: var(--style-thumb-normal-fill-color);
    border-color: var(--style-thumb-normal-stroke-color);
    border-style: solid;
    border-width: var(--style-thumb-normal-border-width);
    margin: 0.625rem;
    content: "";
    transition: margin-left 0.3s; }
    .ob-slide-toggle > .ob-thumb:hover:not(:disabled):not(.ob-disabled) {
      z-index: 1;
      color: var(--on-background-focused-color);
      background-color: var(--style-thumb-hover-fill-color);
      border-color: var(--style-thumb-hover-stroke-color);
      border-width: var(--style-thumb-hover-border-width); }
    .ob-slide-toggle > .ob-thumb:focus-within {
      background-color: var(--style-thumb-focused-fill-color);
      z-index: 2; }
      .ob-slide-toggle > .ob-thumb:focus-within::after {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        margin: -var(--style-thumb-focused-border-width);
        content: "";
        border: var(--style-thumb-focused-border-width) var(--style-thumb-focused-border-width) solid;
        border-radius: 0.75rem; }
      .ob-slide-toggle > .ob-thumb:focus-within:active {
        background-color: var(--style-thumb-pressed-fill-color);
        border-color: var(--style-thumb-pressed-stroke-color);
        border-width: var(--style-thumb-pressed-border-width); }
    .ob-slide-toggle > .ob-thumb:disabled, .ob-slide-toggle > .ob-thumb.ob-disabled {
      color: var(--ui-element-disabled-color);
      background-color: var(--style-thumb-disabled-fill-color);
      border-color: var(--style-thumb-disabled-stroke-color); }
  .ob-slide-toggle.ob-selected {
    background-color: var(--style-alert-running-fill-color);
    border-color: var(--style-alert-running-stroke-color);
    border-style: solid;
    border-width: var(--style-alert-running-border-width);
    border-radius: 3rem; }
    .ob-slide-toggle.ob-selected:hover:not(:disabled):not(.ob-disabled) {
      z-index: 1;
      background-color: var(--style-alert-running-fill-color);
      border-color: var(--style-alert-running-stroke-color);
      border-width: var(--style-alert-running-border-width); }
    .ob-slide-toggle.ob-selected:focus-within {
      background-color: var(--style-alert-running-fill-color);
      z-index: 2; }
      .ob-slide-toggle.ob-selected:focus-within::after {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        margin: -0.5rem;
        content: "";
        border: 0.5rem var(--style-alert-running-border-width) solid;
        border-radius: 3rem; }
      .ob-slide-toggle.ob-selected:focus-within:active {
        background-color: var(--style-alert-running-fill-color);
        border-color: var(--style-alert-running-stroke-color);
        border-width: var(--style-alert-running-border-width); }
    .ob-slide-toggle.ob-selected:disabled, .ob-slide-toggle.ob-selected.ob-disabled {
      background-color: var(--style-alert-running-fill-color);
      border-color: var(--style-alert-running-stroke-color);
      border-width: var(--style-alert-running-border-width); }
    .ob-slide-toggle.ob-selected .ob-thumb {
      margin-left: 3.375rem; }

/*# sourceMappingURL=obc-button.css.map */
`; 
export const style = css` 
