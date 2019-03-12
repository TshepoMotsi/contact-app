import { Component, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-list-header',
  templateUrl: './contact-list-header.component.html',
  styleUrls: ['./contact-list-header.component.css']
})
export class ContactListHeaderComponent {

  newContact: Contact = new Contact();

  @Output()
  add: EventEmitter<Contact> = new EventEmitter();

  constructor() {
  }

  addContact() {
    this.add.emit(this.newContact);
    this.newContact = new Contact();
  }

}
