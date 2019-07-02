import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ComponentStyle} from '../../variables';

@Component({
  selector: 'ob-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() label: string;
  @Input() isSelected = false;
  @Input() componentStyle: ComponentStyle;
  @Input() setSelectedOnClick = false;
  @Output() onclick = new EventEmitter();

  protected styleClasses: string[] = [];
  private styleClassesInternal = [];

  constructor() {
  }

  ngOnInit(): void {
    this.setClassesInternal(this.isSelected);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const isSelected = changes.isSelected;

    if (isSelected !== undefined) {
      this.setClassesInternal(isSelected.currentValue);
    }

  }


  private setClassesInternal(isSelected: boolean) {
    this.styleClassesInternal = [...this.styleClasses]; // Clone styleClasses
    if (isSelected) {
      this.styleClassesInternal.push('ob-selected');
    }
    if (this.componentStyle !== undefined) {
      this.styleClassesInternal.push(this.componentStyle.valueOf());
    }
  }

  private onClickListener() {
    if (this.setSelectedOnClick) {
      this.isSelected = !this.isSelected;
      this.setClassesInternal(this.isSelected);
    }
    this.onclick.emit();
  }

}
