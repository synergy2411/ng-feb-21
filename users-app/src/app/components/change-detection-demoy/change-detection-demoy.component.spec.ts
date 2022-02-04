import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionDemoyComponent } from './change-detection-demoy.component';

describe('ChangeDetectionDemoyComponent', () => {
  let component: ChangeDetectionDemoyComponent;
  let fixture: ComponentFixture<ChangeDetectionDemoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDetectionDemoyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionDemoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
