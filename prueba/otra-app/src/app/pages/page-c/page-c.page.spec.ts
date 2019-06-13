import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCPage } from './page-c.page';

describe('PageCPage', () => {
  let component: PageCPage;
  let fixture: ComponentFixture<PageCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
