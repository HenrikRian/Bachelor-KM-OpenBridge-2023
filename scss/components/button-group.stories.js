export default {title: 'Button group'};

export const normal = () => `
<div class="ob-button-group">
    <div class="ob-button-group__item ob-button-group__item--selected">
    <button class="ob-button ob-button-group__button ">
      <span class="ob-icon">
        <i class="material-icons">add</i>
      </span>
  </button>
  <span class="ob-text-under">Item 1</span>
  </div>
  <div class="ob-button-group__item">
  <button class="ob-button ob-button-group__button ">
    <span class="ob-icon">
      <i class="material-icons">add</i>
    </span>
  </button>
  <span class="ob-text-under">Item 2</span>
  </div>
</div>`;

export const moved = () => `
<div class="ob-button-group">
    <div class="ob-button-group__item ob-button-group__item--selected">
    <button class="ob-button ob-button-group__button " style="left:7mm">
      <span class="ob-icon">
        <i class="material-icons">wb_sunny</i>
      </span>
  </button>
  <span class="ob-text-under">sun</span>
  </div>
  <div class="ob-button-group__item">
  <button class="ob-button ob-button-group__button ">
    <span class="ob-icon">
      <i class="material-icons">wb_sunny</i>
    </span>
  </button>
  <span class="ob-text-under">sun</span>
  </div>
</div>`;
