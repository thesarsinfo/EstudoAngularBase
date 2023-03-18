import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosexemploComponent } from './servicosexemplo.component';

describe('ServicosexemploComponent', () => {
  let component: ServicosexemploComponent;
  let fixture: ComponentFixture<ServicosexemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicosexemploComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicosexemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
