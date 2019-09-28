import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionByQuestionComponent } from './question-by-question.component';

describe('QuestionByQuestionComponent', () => {
  let component: QuestionByQuestionComponent;
  let fixture: ComponentFixture<QuestionByQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionByQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionByQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
