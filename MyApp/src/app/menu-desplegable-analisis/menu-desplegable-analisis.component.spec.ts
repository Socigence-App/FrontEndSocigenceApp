import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDesplegableAnalisisComponent } from './menu-desplegable-analisis.component';

describe('MenuDesplegableAnalisisComponent', () => {
  let component: MenuDesplegableAnalisisComponent;
  let fixture: ComponentFixture<MenuDesplegableAnalisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDesplegableAnalisisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDesplegableAnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
