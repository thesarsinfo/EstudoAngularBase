import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPersonalizadoComponent } from './comp-personalizado.component';

describe('CompPersonalizadoComponent', () => {
  let component: CompPersonalizadoComponent;
  let fixture: ComponentFixture<CompPersonalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompPersonalizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompPersonalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
