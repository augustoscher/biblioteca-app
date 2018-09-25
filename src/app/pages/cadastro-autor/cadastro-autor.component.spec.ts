import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAutorComponent } from './cadastro-autor.component';

describe('CadastroAutorComponent', () => {
  let component: CadastroAutorComponent;
  let fixture: ComponentFixture<CadastroAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
