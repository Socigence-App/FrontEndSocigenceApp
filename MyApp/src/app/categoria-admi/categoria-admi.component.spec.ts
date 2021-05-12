import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaAdmiComponent } from './categoria-admi.component';

describe('CategoriaAdmiComponent', () => {
  let component: CategoriaAdmiComponent;
  let fixture: ComponentFixture<CategoriaAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaAdmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
