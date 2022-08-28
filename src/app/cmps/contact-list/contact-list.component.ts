import { Component, Input } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactlistComponent {

  @Input() contacts!: Contact[] | null;

  constructor() {
    // this.contacts = Contact[];
   }
}