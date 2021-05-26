import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerciciosAnalisisComponent } from './ejercicios-analisis.component';

describe('EjerciciosAnalisisComponent', () => {
  let component: EjerciciosAnalisisComponent;
  let fixture: ComponentFixture<EjerciciosAnalisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjerciciosAnalisisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosAnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
