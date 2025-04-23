import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoradmineditpageComponent } from './doctoradmineditpage.component';

describe('DoctoradmineditpageComponent', () => {
  let component: DoctoradmineditpageComponent;
  let fixture: ComponentFixture<DoctoradmineditpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctoradmineditpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctoradmineditpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
