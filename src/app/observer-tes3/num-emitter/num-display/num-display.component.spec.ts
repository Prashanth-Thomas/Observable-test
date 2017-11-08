import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumDisplayComponent } from './num-display.component';

describe('NumDisplayComponent', () => {
  let component: NumDisplayComponent;
  let fixture: ComponentFixture<NumDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
