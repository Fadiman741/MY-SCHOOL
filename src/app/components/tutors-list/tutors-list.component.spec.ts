/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TutorlistComponent } from './tutors-list.component';

describe('TutorlIstComponent', () => {
  let component: TutorlistComponent;
  let fixture: ComponentFixture<TutorlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
