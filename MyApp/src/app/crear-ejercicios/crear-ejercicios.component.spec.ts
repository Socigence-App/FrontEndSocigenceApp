import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEjerciciosComponent } from './crear-ejercicios.component';

describe('CrearEjerciciosComponent', () => {
  let component: CrearEjerciciosComponent;
  let fixture: ComponentFixture<CrearEjerciciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEjerciciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEjerciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
