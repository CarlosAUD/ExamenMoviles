import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppListPage } from './app-list.page';

describe('AppListPage', () => {
  let component: AppListPage;
  let fixture: ComponentFixture<AppListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
