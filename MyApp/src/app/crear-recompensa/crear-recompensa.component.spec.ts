import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRecompensaComponent } from './crear-recompensa.component';

describe('CrearRecompensaComponent', () => {
  let component: CrearRecompensaComponent;
  let fixture: ComponentFixture<CrearRecompensaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRecompensaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRecompensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
