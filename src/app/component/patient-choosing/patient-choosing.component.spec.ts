import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChoosingComponent } from './patient-choosing.component';

describe('PatientChoosingComponent', () => {
  let component: PatientChoosingComponent;
  let fixture: ComponentFixture<PatientChoosingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientChoosingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientChoosingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
