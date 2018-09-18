import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaEditoraComponent } from './consulta-editora.component';

describe('ConsultaEditoraComponent', () => {
  let component: ConsultaEditoraComponent;
  let fixture: ComponentFixture<ConsultaEditoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaEditoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaEditoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
