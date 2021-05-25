import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerRecompensasAdmiComponent } from './ver-recompensas-admi.component';

describe('VerRecompensasAdmiComponent', () => {
  let component: VerRecompensasAdmiComponent;
  let fixture: ComponentFixture<VerRecompensasAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerRecompensasAdmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerRecompensasAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
