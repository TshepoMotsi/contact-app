import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../contact';

@Component(
  {
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.css']
  }
)
export class ContactListComponent {

  @Input()
  contacts: Contact[];

  @Output()
  remove: EventEmitter<Contact> = new EventEmitter();

  @Output()
  update: EventEmitter<Contact> = new EventEmitter();

  @Output()
  getContactById: EventEmitter<Contact> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Contact> = new EventEmitter();

  constructor() {}

  onToggleContactComplete(contact: Contact) {
    this.toggleComplete.emit(contact);
  }

  onRemoveContact(contact: Contact) {
    this.remove.emit(contact);
  }

  onUpdateContact(contact: Contact) {
    this.update.emit(contact);
  }

  onGetContactById(contact: Contact) {
    this.getContactById.emit(contact);
  }
}
