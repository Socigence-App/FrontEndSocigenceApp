import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionAdmiComponent } from './publicacion-admi.component';

describe('PublicacionAdmiComponent', () => {
  let component: PublicacionAdmiComponent;
  let fixture: ComponentFixture<PublicacionAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionAdmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
