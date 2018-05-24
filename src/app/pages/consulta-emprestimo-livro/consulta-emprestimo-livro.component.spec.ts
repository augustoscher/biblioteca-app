import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaEmprestimoLivroComponent } from './consulta-emprestimo-livro.component';

describe('ConsultaEmprestimoLivroComponent', () => {
  let component: ConsultaEmprestimoLivroComponent;
  let fixture: ComponentFixture<ConsultaEmprestimoLivroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaEmprestimoLivroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaEmprestimoLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
