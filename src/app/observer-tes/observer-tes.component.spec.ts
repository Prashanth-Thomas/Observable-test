import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserverTesComponent } from './observer-tes.component';

describe('ObserverTesComponent', () => {
  let component: ObserverTesComponent;
  let fixture: ComponentFixture<ObserverTesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserverTesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserverTesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
