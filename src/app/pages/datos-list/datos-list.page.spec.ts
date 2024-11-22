import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatosListPage } from './datos-list.page';

describe('DatosListPage', () => {
  let component: DatosListPage;
  let fixture: ComponentFixture<DatosListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
