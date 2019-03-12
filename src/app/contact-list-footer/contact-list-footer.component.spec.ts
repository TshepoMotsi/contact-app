/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContactListFooterComponent } from './contact-list-footer.component';
import { Contact } from '../contact';

describe('ContactListFooterComponent', () => {
  let component: ContactListFooterComponent;
  let fixture: ComponentFixture<ContactListFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactListFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListFooterComponent);
    component = fixture.componentInstance;
    component.contacts = [
      new Contact({ id: 1, title: 'Test', email: 'something@gmail.com', complete: false})
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
