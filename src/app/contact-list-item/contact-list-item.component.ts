import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent {

  @Input() contact: Contact;

  @Output()
  update: EventEmitter<Contact> = new EventEmitter();

  @Output()
  remove: EventEmitter<Contact> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Contact> = new EventEmitter();

  constructor() {
  }

  toggleContactComplete(contact: Contact) {
    this.toggleComplete.emit(contact);
  }

  removeContact(contact: Contact) {
    this.remove.emit(contact);
  }

  updateContact(contact: Contact) {
    this.update.emit(contact);
  }
}
