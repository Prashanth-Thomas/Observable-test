import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserverTes2Component } from './observer-tes2.component';

describe('ObserverTes2Component', () => {
  let component: ObserverTes2Component;
  let fixture: ComponentFixture<ObserverTes2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserverTes2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserverTes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
