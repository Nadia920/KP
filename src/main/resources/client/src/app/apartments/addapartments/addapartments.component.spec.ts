import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApartmentsComponent } from './addapartments.component';

describe('AddapartmentsComponent', () => {
  let component: AddApartmentsComponent;
  let fixture: ComponentFixture<AddApartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddApartmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddApartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
