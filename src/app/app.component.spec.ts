import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {TopBarComponent} from './components/navigation/top-bar/top-bar.component';
import {ButtonComponent} from './components/button/button.component';
import {ButtonTextComponent} from './components/button/button-text/button-text.component';
import {ButtonSlideToggleComponent} from './components/button/button-slide-toggle/button-slide-toggle.component';
import {ButtonGroupComponent} from './components/button/button-group/button-group.component';
import {ButtonIconComponent} from './components/button/button-icon/button-icon.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ButtonComponent,
        TopBarComponent,
        ButtonTextComponent,
        ButtonSlideToggleComponent,
        ButtonGroupComponent,
        ButtonIconComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'App title'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('openbridge-angular');
  });
});
