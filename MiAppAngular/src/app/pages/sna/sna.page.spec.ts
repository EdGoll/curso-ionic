import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnaPage } from './sna.page';

describe('SnaPage', () => {
  let component: SnaPage;
  let fixture: ComponentFixture<SnaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
