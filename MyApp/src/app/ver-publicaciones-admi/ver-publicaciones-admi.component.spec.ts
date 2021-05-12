import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPublicacionesAdmiComponent } from './ver-publicaciones-admi.component';

describe('VerPublicacionesAdmiComponent', () => {
  let component: VerPublicacionesAdmiComponent;
  let fixture: ComponentFixture<VerPublicacionesAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPublicacionesAdmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPublicacionesAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
