import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDesplegableAdmiComponent } from './menu-desplegable-admi.component';

describe('MenuDesplegableAdmiComponent', () => {
  let component: MenuDesplegableAdmiComponent;
  let fixture: ComponentFixture<MenuDesplegableAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDesplegableAdmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDesplegableAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
