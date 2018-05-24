import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucaoLivroComponent } from './devolucao-livro.component';

describe('DevolucaoLivroComponent', () => {
  let component: DevolucaoLivroComponent;
  let fixture: ComponentFixture<DevolucaoLivroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevolucaoLivroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevolucaoLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
