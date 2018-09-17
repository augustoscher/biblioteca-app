import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaTurmaComponent } from './consulta-turma.component';

describe('ConsultaTurmaComponent', () => {
  let component: ConsultaTurmaComponent;
  let fixture: ComponentFixture<ConsultaTurmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaTurmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
