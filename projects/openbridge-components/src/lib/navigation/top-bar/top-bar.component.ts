import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ob-top-bar',
  templateUrl: './top-bar.component.html'
})
export class TopBarComponent {
  @Input() title: string;
  @Input() subTitle: string;

  @Input() menuActive = false;

  @Output() clickOnMenuEvent = new EventEmitter<Event>();

  constructor() { }

  private onClickOnMenu(event: Event) {
    event.stopPropagation();
    this.clickOnMenuEvent.emit(event);
  }

}