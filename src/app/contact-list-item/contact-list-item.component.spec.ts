import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ContactListItemComponent } from './contact-list-item.component';
import { Contact } from '../contact';

describe('ContactListItemComponent', () => {
  let component: ContactListItemComponent;
  let fixture: ComponentFixture<ContactListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListItemComponent);
    component = fixture.componentInstance;
    component.contact = new Contact({ id: 1, title: 'Test', email: 'xxxxx@gmail.com', complete: false });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
