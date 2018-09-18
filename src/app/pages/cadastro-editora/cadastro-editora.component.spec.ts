import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEditoraComponent } from './cadastro-editora.component';

describe('CadastroEditoraComponent', () => {
  let component: CadastroEditoraComponent;
  let fixture: ComponentFixture<CadastroEditoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroEditoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroEditoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
