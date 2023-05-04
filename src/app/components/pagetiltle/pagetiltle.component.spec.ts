/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagetiltleComponent } from './pagetiltle.component';

describe('PagetiltleComponent', () => {
  let component: PagetiltleComponent;
  let fixture: ComponentFixture<PagetiltleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagetiltleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagetiltleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
