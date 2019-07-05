import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {TopBarComponent} from './components/navigation/top-bar/top-bar.component';
import {ButtonComponent} from './components/button/button.component';
import {ButtonSlideToggleComponent} from './components/button-slide-toggle/button-slide-toggle.component';
import {ButtonGroupComponent} from './components/button-group/button-group.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ButtonComponent,
        TopBarComponent,
        ButtonSlideToggleComponent,
        ButtonGroupComponent,
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
