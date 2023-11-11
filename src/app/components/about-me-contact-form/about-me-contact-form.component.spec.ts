import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeContactFormComponent } from './about-me-contact-form.component';

describe('AboutMeContactFormComponent', () => {
  let component: AboutMeContactFormComponent;
  let fixture: ComponentFixture<AboutMeContactFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutMeContactFormComponent]
    });
    fixture = TestBed.createComponent(AboutMeContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
