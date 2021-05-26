import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSolucionComponent } from './crear-solucion.component';

describe('CrearSolucionComponent', () => {
  let component: CrearSolucionComponent;
  let fixture: ComponentFixture<CrearSolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearSolucionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
