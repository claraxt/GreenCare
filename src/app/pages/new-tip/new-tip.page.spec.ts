import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewTipPage } from './new-tip.page';

describe('NewTipPage', () => {
  let component: NewTipPage;
  let fixture: ComponentFixture<NewTipPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
