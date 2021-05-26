import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAnalisisComponent } from './perfil-analisis.component';

describe('PerfilAnalisisComponent', () => {
  let component: PerfilAnalisisComponent;
  let fixture: ComponentFixture<PerfilAnalisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilAnalisisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
