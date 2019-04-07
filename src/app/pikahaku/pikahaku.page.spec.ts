import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PikahakuPage } from './pikahaku.page';

describe('PikahakuPage', () => {
  let component: PikahakuPage;
  let fixture: ComponentFixture<PikahakuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PikahakuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PikahakuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
