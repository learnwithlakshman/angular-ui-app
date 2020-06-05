import { CbookService } from './../cbook.service';
import { ContactDTO, Contact } from './../model/cbook.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cbookhome',
  templateUrl: './cbookhome.component.html',
  styleUrls: ['./cbookhome.component.css']
})
export class CbookhomeComponent implements OnInit {
  contacts: Contact[] = [];
  cform: FormGroup;
  cid: string;
  searchStr: string;
  constructor(private fb: FormBuilder, private cservice: CbookService) {

    this.cform = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: [''],
      mobile: [''],
      city: ['']
    });

  }

  ngOnInit(): void {
    this.getContacts();
  }

  onSubmit() {
    const contact: ContactDTO = this.cform.value;
    this.cform.reset();
    this.cservice.addContact(contact).subscribe(res => {
      this.getContacts();
    });
  }

  getContacts() {
    this.cservice.getContacts().subscribe(res => {
      this.contacts = res;
    });
  }

  delete(contact: any) {
    const cid = contact.cid;
    if (confirm(`Are you sure to delete this contact with name ${contact.name} ?`)) {
      this.cservice.delete(cid).subscribe(res => {
        if (res) {
          this.getContacts();
        }
      });
    } else {
      alert('Something went wrong while deleting contact');
    }
  }

  editContact(contact: Contact) {
    this.cid = contact.id;
    const mycontact = {
      name: contact.name,
      city: contact.city,
      mobile: contact.mobile,
      email: contact.email
    }
    this.cform.setValue(mycontact);
  }

  search() {
    if (this.searchStr !== '') {
      this.cservice.search(this.searchStr).subscribe(res => {
        this.contacts = res;
      });
    } else {
      this.getContacts();
    }
  }

  clear() {
    if (this.searchStr.length === 0) {
      this.getContacts();
    }
  }

  refreshContacts() {
    this.getContacts();
  }


  get name() {
    return this.cform.get('name');
  }
}
