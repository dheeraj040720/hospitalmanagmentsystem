import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctordiagnoseComponent } from './doctordiagnose.component';

describe('DoctordiagnoseComponent', () => {
  let component: DoctordiagnoseComponent;
  let fixture: ComponentFixture<DoctordiagnoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctordiagnoseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctordiagnoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
