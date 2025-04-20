import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewdoctorComponent } from './adminviewdoctor.component';

describe('AdminviewdoctorComponent', () => {
  let component: AdminviewdoctorComponent;
  let fixture: ComponentFixture<AdminviewdoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminviewdoctorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
