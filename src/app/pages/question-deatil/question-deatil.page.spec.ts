import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionDeatilPage } from './question-deatil.page';

describe('QuestionDeatilPage', () => {
  let component: QuestionDeatilPage;
  let fixture: ComponentFixture<QuestionDeatilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionDeatilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
