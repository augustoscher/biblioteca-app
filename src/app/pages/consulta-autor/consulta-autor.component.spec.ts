import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAutorComponent } from './consulta-autor.component';

describe('ConsultaAutorComponent', () => {
  let component: ConsultaAutorComponent;
  let fixture: ComponentFixture<ConsultaAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
