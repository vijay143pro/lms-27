import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AugustaHolidayComponent } from './augusta-holiday.component';

describe('AugustaHolidayComponent', () => {
  let component: AugustaHolidayComponent;
  let fixture: ComponentFixture<AugustaHolidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AugustaHolidayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AugustaHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
