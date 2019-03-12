import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Contact } from './contact';
import { ContactDataService } from './contact-data.service';

@Injectable()
export class ContactsResolver implements Resolve<Observable<Contact[]>> {

  constructor(
    private contactDataService: ContactDataService
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact[]> {
    return this.contactDataService.getAllContacts();
  }
}
