import { Component, Input } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-list-footer',
  templateUrl: './contact-list-footer.component.html',
  styleUrls: ['./contact-list-footer.component.css']
})
export class ContactListFooterComponent {

  @Input()
  contacts: Contact[];

  constructor() {}

}
