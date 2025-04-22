import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminchoosingpageComponent } from './adminchoosingpage.component';

describe('AdminchoosingpageComponent', () => {
  let component: AdminchoosingpageComponent;
  let fixture: ComponentFixture<AdminchoosingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminchoosingpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminchoosingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
