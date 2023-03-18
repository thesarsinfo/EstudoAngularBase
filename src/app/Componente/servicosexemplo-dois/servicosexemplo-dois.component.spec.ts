import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosexemploDoisComponent } from './servicosexemplo-dois.component';

describe('ServicosexemploDoisComponent', () => {
  let component: ServicosexemploDoisComponent;
  let fixture: ComponentFixture<ServicosexemploDoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicosexemploDoisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicosexemploDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
