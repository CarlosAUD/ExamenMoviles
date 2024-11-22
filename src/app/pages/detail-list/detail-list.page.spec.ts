import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailListPage } from './detail-list.page';

describe('DetailListPage', () => {
  let component: DetailListPage;
  let fixture: ComponentFixture<DetailListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
