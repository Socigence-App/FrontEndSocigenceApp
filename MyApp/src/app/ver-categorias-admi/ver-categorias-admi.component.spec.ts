import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCategoriasAdmiComponent } from './ver-categorias-admi.component';

describe('VerCategoriasAdmiComponent', () => {
  let component: VerCategoriasAdmiComponent;
  let fixture: ComponentFixture<VerCategoriasAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerCategoriasAdmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCategoriasAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
