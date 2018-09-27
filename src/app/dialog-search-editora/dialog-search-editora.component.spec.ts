import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSearchEditoraComponent } from './dialog-search-editora.component';

describe('DialogSearchEditoraComponent', () => {
  let component: DialogSearchEditoraComponent;
  let fixture: ComponentFixture<DialogSearchEditoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSearchEditoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSearchEditoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
