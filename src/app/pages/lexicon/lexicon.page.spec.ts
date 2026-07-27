import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LexiconPage } from './lexicon.page';

describe('LexiconPage', () => {
  let component: LexiconPage;
  let fixture: ComponentFixture<LexiconPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LexiconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
