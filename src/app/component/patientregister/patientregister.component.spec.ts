import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientregisterComponent } from './patientregister.component';

describe('PatientregisterComponent', () => {
  let component: PatientregisterComponent;
  let fixture: ComponentFixture<PatientregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientregisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
