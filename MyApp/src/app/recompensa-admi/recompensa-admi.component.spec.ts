import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecompensaAdmiComponent } from './recompensa-admi.component';

describe('RecompensaAdmiComponent', () => {
  let component: RecompensaAdmiComponent;
  let fixture: ComponentFixture<RecompensaAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecompensaAdmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecompensaAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
