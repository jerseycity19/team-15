import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SARFormComponent } from './sarform.component';

describe('SARFormComponent', () => {
  let component: SARFormComponent;
  let fixture: ComponentFixture<SARFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SARFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SARFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
