/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiscusionForumComponent } from './discusion-forum.component';

describe('DiscusionForumComponent', () => {
  let component: DiscusionForumComponent;
  let fixture: ComponentFixture<DiscusionForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscusionForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscusionForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
