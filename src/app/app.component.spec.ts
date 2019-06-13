import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ButtonComponent} from './components/button/button.component';
import {TopBarComponent} from './components/navigation/top-bar/top-bar.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
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

  it(`should have as title 'openbridge-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('openbridge-angular');
  });
});
