import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

@Injectable()
export class ContactDataService {

  constructor(private api: ApiService) {}

  // Simulate POST /contacts
  addContact(contact: Contact): Observable<Contact> {
    return this.api.createContact(contact);
  }

  // Simulate DELETE /contacts/:id
  deleteContactById(contactId: number): Observable<Contact> {
    return this.api.deleteContactById(contactId);
  }

  // Simulate PUT /contacts/:id
  updateContact(contact: Contact): Observable<Contact> {
    return this.api.updateContact(contact);
  }

  // Simulate GET /contacts
  getAllContacts(): Observable<Contact[]> {
    return this.api.getAllContacts().delay(3000);
  }

  // Simulate GET /contacts/:id
  getContactById(contactId: number): Observable<Contact> {
    return this.api.getContactById(contactId);
  }

  // Toggle complete
  toggleContactComplete(contact: Contact) {
    contact.complete = !contact.complete;
    return this.api.updateContact(contact);
  }

}
