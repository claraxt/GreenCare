import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LexiconDetailPage } from './lexicon-detail.page';

describe('LexiconDetailPage', () => {
  let component: LexiconDetailPage;
  let fixture: ComponentFixture<LexiconDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LexiconDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
