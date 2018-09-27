import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSearchAutorComponent } from './dialog-search-autor.component';

describe('DialogSearchAutorComponent', () => {
  let component: DialogSearchAutorComponent;
  let fixture: ComponentFixture<DialogSearchAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSearchAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSearchAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
