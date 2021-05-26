import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSolucionComponent } from './editar-solucion.component';

describe('EditarSolucionComponent', () => {
  let component: EditarSolucionComponent;
  let fixture: ComponentFixture<EditarSolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarSolucionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
