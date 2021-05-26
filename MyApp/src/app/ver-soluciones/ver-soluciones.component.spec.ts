import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerSolucionesComponent } from './ver-soluciones.component';

describe('VerSolucionesComponent', () => {
  let component: VerSolucionesComponent;
  let fixture: ComponentFixture<VerSolucionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerSolucionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerSolucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
