import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ButtonComponent} from './button.component';

const quixote = require('quixote');

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;

  });

  it('should emit on click', (done) => {
    fixture.nativeElement.addEventListener('click', done);
    // trigger the click
    fixture.nativeElement.dispatchEvent(new Event('click'));

    fixture.detectChanges();
  });

  it('should not emit on click when disabled', () => {
    fixture.nativeElement.addEventListener('click', fail);
    component.disabled = true;
    // trigger the click
    fixture.nativeElement.dispatchEvent(new Event('click'));

    fixture.detectChanges();
  });
});

describe('Button Style', () => {

  let frame;
  let container;
  let aBtn;
  let btnBtn;
  let aIcnBtn;
  let rem;

  beforeAll((done) => {
    frame = quixote.createFrame({
      // stylesheet: 'base/assets/styles/openbridge-day.css'
    }, done);
  });

  afterAll(() => {
    frame.remove();
  });

  beforeEach(() => {
    frame.reset();
    container = frame.add(`<div>
<a class="ob-btn ob-normal" id="a-btn">
  Hei
</a>
<button class="ob-btn ob-normal" id="btn-btn">
  Hei
</button>
<a class="ob-btn ob-normal" id="a-icn-btn">
    <span class="ob-icon">
      <i class="material-icons">wb_sunny</i>
    </span>
    <span class="ob-text-under">sun</span>
</a>
</div>
  `);
    aBtn = frame.get('#a-btn');
    btnBtn = frame.get('#btn-btn');
    aIcnBtn = frame.get('#a-icn-btn');
    rem = aBtn.calculatePixelValue('1rem');
  });

  it('<a> and <button> have same height', () => {
    aBtn.assert({
      height: btnBtn.height
    });
  });


});
