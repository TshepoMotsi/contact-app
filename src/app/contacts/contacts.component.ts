import { Component, OnInit } from '@angular/core';
import { ContactDataService } from '../contact-data.service';
import { Contact } from '../contact';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactDataService]
})
export class ContactsComponent implements OnInit {

  contacts: Contact[] = [];

  constructor(private contactDataService: ContactDataService, private route: ActivatedRoute) {}

  public ngOnInit() {
    this.route.data
      .map((data) => data['contacts'])
      .subscribe(
        (contacts) => {
          this.contacts = contacts;
        }
      );
  }

  onAddContact(contact) {
    this.contactDataService
      .addContact(contact)
      .subscribe(
        (newContact) => {
          this.contacts = this.contacts.concat(newContact);
        }
      );
  }

  // TODO -- Work in progress
  // onUpdateContact(contact) {
  //   this.contactDataService
  //     .updateContact(contact)
  //     .subscribe(
  //       (updated) => {
  //         contact.id == updated.id;
  //         this.contacts = this.contacts.filter((t) => t.id !== contact.id);
  //       }
  //     )
  // }

  onGetContactById(contact) {
    this.contactDataService
      .getContactById(contact.id)
      .subscribe(
        (_) => {
          this.contacts = this.contacts.filter((t) => t.id !== contact.id);
        }
      );
  }

  onToggleContactComplete(contact) {
    this.contactDataService
      .toggleContactComplete(contact)
      .subscribe(
        (updatedContact) => {
          contact = updatedContact;
        }
      );
  }

  onRemoveContact(contact) {
    this.contactDataService
      .deleteContactById(contact.id)
      .subscribe(
        (_) => {
          this.contacts = this.contacts.filter((t) => t.id !== contact.id);
        }
      );
  }
}
