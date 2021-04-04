import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPublicacionesComponent } from './ver-publicaciones.component';

describe('VerPublicacionesComponent', () => {
  let component: VerPublicacionesComponent;
  let fixture: ComponentFixture<VerPublicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPublicacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
