import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Response } from '@angular/http';
import { Contact } from './contact';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) {
  }

  public getAllContacts(): Observable<Contact[]> {
    return this.http
      .get(API_URL + '/contacts')
      .map(response => {
        const contacts = response.json();
        return contacts.map((contact) => new Contact(contact));
      })
      .catch(this.handleError);
  }

  public createContact(contact: Contact): Observable<Contact> {
    return this.http
      .post(API_URL + '/contacts', contact)
      .map(response => {
        return new Contact(response.json());
      })
      .catch(this.handleError);
  }

  public getContactById(contactId: number): Observable<Contact> {
    return this.http
      .get(API_URL + '/contacts/' + contactId)
      .map(response => {
        return new Contact(response.json());
      })
      .catch(this.handleError);
  }

  public updateContact(contact: Contact): Observable<Contact> {
    return this.http
      .put(API_URL + '/contacts/' + contact.id, contact)
      .map(response => {
        return new Contact(response.json());
      })
      .catch(this.handleError);
  }

  public deleteContactById(contactId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/contacts/' + contactId)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
