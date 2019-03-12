import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ApiMockService {

  constructor() {}

  public getAllContacts(): Observable<Contact[]> {
    return Observable.of([
      new Contact({
        id: 1,
        title: "Tshepo Motsi",
        email : "tshepomotsi@ymail.com",
        complete : false})
    ]);
  }

  public createContact(contact: Contact): Observable<Contact> {
    return Observable.of(
      new Contact({
        id: 1,
        title: "Tshepo Motsi",
        email : "tshepomotsi@ymail.com",
        complete : false})
    );
  }

  public getContactById(contactId: number): Observable<Contact> {
    return Observable.of(
      new Contact({
        id: 1,
        title: "Tshepo Motsi",
        email : "tshepomotsi@ymail.com",
        complete : false})
    );
  }

  public updateContact(contact: Contact): Observable<Contact> {
    return Observable.of(
      new Contact({
        id: 1,
        title: "Tshepo Motsi",
        email : "tshepomotsi@ymail.com",
        complete : false})
    );
  }

  public deleteContactById(contactId: number): Observable<null> {
    return null;
  }
}
