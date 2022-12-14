import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkStatisticsComponent } from './workstatistics.component';

describe('WorkStatisticsComponent', () => {
  let component: WorkStatisticsComponent;
  let fixture: ComponentFixture<WorkStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
