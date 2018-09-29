import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSearchTurmaComponent } from './dialog-search-turma.component';

describe('DialogSearchTurmaComponent', () => {
  let component: DialogSearchTurmaComponent;
  let fixture: ComponentFixture<DialogSearchTurmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSearchTurmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSearchTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
