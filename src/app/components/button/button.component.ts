import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() label: string;
  @Input() isSelected = false;
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
    console.log('changed selected' + this.styleClassesInternal);
  }


}
