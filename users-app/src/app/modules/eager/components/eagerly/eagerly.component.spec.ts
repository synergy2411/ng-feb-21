import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerlyComponent } from './eagerly.component';

describe('EagerlyComponent', () => {
  let component: EagerlyComponent;
  let fixture: ComponentFixture<EagerlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EagerlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EagerlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
