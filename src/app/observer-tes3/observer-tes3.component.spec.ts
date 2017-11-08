import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserverTes3Component } from './observer-tes3.component';

describe('ObserverTes3Component', () => {
  let component: ObserverTes3Component;
  let fixture: ComponentFixture<ObserverTes3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserverTes3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserverTes3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
