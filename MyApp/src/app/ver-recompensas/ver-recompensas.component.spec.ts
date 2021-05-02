import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerRecompensasComponent } from './ver-recompensas.component';

describe('VerRecompensasComponent', () => {
  let component: VerRecompensasComponent;
  let fixture: ComponentFixture<VerRecompensasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerRecompensasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerRecompensasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
