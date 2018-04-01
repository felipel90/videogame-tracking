import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogPage } from './catalog';

describe('CatalogPage', () => {
  let component: CatalogPage;
  let fixture: ComponentFixture<CatalogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
