import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAlunoComponent } from './consulta-aluno.component';

describe('ConsultaAlunoComponent', () => {
  let component: ConsultaAlunoComponent;
  let fixture: ComponentFixture<ConsultaAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
