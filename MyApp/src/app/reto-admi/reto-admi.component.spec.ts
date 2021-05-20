import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetoAdmiComponent } from './reto-admi.component';

describe('RetoAdmiComponent', () => {
  let component: RetoAdmiComponent;
  let fixture: ComponentFixture<RetoAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetoAdmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetoAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
