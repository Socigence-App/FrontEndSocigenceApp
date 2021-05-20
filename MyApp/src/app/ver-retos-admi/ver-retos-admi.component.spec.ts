import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerRetosAdmiComponent } from './ver-retos-admi.component';

describe('VerRetosAdmiComponent', () => {
  let component: VerRetosAdmiComponent;
  let fixture: ComponentFixture<VerRetosAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerRetosAdmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerRetosAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
