import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumEmitterComponent } from './num-emitter.component';

describe('NumEmitterComponent', () => {
  let component: NumEmitterComponent;
  let fixture: ComponentFixture<NumEmitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumEmitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
