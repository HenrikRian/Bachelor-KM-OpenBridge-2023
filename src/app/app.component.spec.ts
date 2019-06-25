import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {TopBarComponent} from './components/navigation/top-bar/top-bar.component';
import {ButtonNormalComponent} from './components/button-normal/button-normal.component';
import {ButtonRaisedComponent} from './components/button-raised/button-raised.component';
import {ButtonComponent} from './components/button/button.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ButtonNormalComponent,
        ButtonRaisedComponent,
        ButtonComponent,
        TopBarComponent
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
