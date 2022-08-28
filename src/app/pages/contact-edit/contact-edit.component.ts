import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss'],
})
export class ContactEditComponent implements OnInit {
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  contact!: Contact;

  ngOnInit(): void {
    this.route.data.subscribe(({ contact }) => {
      this.contact = contact || this.contactService.getEmptyContact() as Contact;
    });
  }

  async onSaveContact() {
    await this.contactService.saveContact({ ...this.contact });
    this.router.navigateByUrl('/contacts');
  }
  async deleteContact(contactId: string) {
    await this.contactService.deleteContact(contactId);
    this.router.navigateByUrl('/contacts');
  }

  onBack() {
    this.router.navigateByUrl('/contacts');
  }
}
