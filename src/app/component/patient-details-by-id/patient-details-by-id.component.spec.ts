import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsByIdComponent } from './patient-details-by-id.component';

describe('PatientDetailsByIdComponent', () => {
  let component: PatientDetailsByIdComponent;
  let fixture: ComponentFixture<PatientDetailsByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientDetailsByIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientDetailsByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
