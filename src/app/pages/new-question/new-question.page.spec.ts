import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewQuestionPage } from './new-question.page';

describe('NewQuestionPage', () => {
  let component: NewQuestionPage;
  let fixture: ComponentFixture<NewQuestionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
