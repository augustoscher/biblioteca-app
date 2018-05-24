import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaLivroComponent } from './consulta-livro.component';

describe('ConsultaLivroComponent', () => {
  let component: ConsultaLivroComponent;
  let fixture: ComponentFixture<ConsultaLivroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaLivroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
