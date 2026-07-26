import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipDetailPage } from './tip-detail.page';

describe('TipDetailPage', () => {
  let component: TipDetailPage;
  let fixture: ComponentFixture<TipDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TipDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
