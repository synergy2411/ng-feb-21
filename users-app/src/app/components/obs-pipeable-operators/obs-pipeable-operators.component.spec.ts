import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsPipeableOperatorsComponent } from './obs-pipeable-operators.component';

describe('ObsPipeableOperatorsComponent', () => {
  let component: ObsPipeableOperatorsComponent;
  let fixture: ComponentFixture<ObsPipeableOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsPipeableOperatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsPipeableOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
