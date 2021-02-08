import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  //Variable d'affichage
  contacts;

  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
    // request HTTP
    this.contactService.getContactsFromApi();
    //suscribe à un subject contacts$
    this.contactService.contacts$.subscribe( data => this.contacts=data);
  }

}
