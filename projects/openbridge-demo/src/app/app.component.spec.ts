import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {
  ButtonModule,
  ButtonSlideToggleModule,
  ButtonToggleModule,
  NavigationMenuModule,
  TopBarModule
} from 'openbridge-components';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        ButtonToggleModule,
        ButtonModule,
        ButtonSlideToggleModule,
        NavigationMenuModule,
        TopBarModule
      ]
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
