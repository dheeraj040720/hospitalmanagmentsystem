import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewpatientComponent } from './adminviewpatient.component';

describe('AdminviewpatientComponent', () => {
  let component: AdminviewpatientComponent;
  let fixture: ComponentFixture<AdminviewpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminviewpatientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
