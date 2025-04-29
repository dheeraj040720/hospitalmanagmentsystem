import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChoosingDoctorComponent } from './patient-choosing-doctor.component';

describe('PatientChoosingDoctorComponent', () => {
  let component: PatientChoosingDoctorComponent;
  let fixture: ComponentFixture<PatientChoosingDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientChoosingDoctorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientChoosingDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
