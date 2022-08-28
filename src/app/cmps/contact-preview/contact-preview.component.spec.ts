import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactpreviewComponent } from './contact-preview.component';

describe('ContactpreviewComponent', () => {
  let component: ContactpreviewComponent;
  let fixture: ComponentFixture<ContactpreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactpreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
