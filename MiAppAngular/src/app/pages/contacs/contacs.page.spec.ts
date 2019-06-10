import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacsPage } from './contacs.page';

describe('ContacsPage', () => {
  let component: ContacsPage;
  let fixture: ComponentFixture<ContacsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
