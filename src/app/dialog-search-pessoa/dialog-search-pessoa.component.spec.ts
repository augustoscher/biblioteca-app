import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSearchPessoaComponent } from './dialog-search-pessoa.component';

describe('DialogSearchPessoaComponent', () => {
  let component: DialogSearchPessoaComponent;
  let fixture: ComponentFixture<DialogSearchPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSearchPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSearchPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
