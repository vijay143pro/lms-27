import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AugustaFamilyComponent } from './augusta-family.component';

describe('AugustaFamilyComponent', () => {
  let component: AugustaFamilyComponent;
  let fixture: ComponentFixture<AugustaFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AugustaFamilyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AugustaFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
