import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaEmprestimoDetalhadoComponent } from './consulta-emprestimo-detalhado.component';

describe('ConsultaEmprestimoDetalhadoComponent', () => {
  let component: ConsultaEmprestimoDetalhadoComponent;
  let fixture: ComponentFixture<ConsultaEmprestimoDetalhadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaEmprestimoDetalhadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaEmprestimoDetalhadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
