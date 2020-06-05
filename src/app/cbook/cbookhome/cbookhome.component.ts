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
  canUpdate = false;
  loaded = false;
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
    if (this.canUpdate && this.cid !== '') {
      // tslint:disable-next-line: max-line-length
      const updatedContact: Contact = { cid: this.cid, name: contact.name, mobile: contact.mobile, city: contact.city, email: contact.email };
      this.cservice.updateContact(updatedContact).subscribe(res => {
        if (res) {
          alert('Update successfull');
          this.canUpdate = false;
          this.getContacts();
        } else {
          alert('Something went wrong while updating contact');
        }
      });
    } else {
      this.cservice.addContact(contact).subscribe(res => {
        this.getContacts();
      });
    }
    this.cform.reset();
  }

  getContacts() {
    this.loaded=false;
    this.cservice.getContacts().subscribe(res => {
      this.contacts = res;
      this.loaded = true;
    });
  }

  delete(contact: any) {
    const cid = contact.cid;
    if (confirm(`Are you sure to delete this contact with name ${contact.name} ?`)) {
      this.cservice.delete(cid).subscribe(res => {
        if (res) {
          this.getContacts();
        } else {
          alert('Something went wrong while deleting contact');
        }
      });
    }
  }

  editContact(contact: Contact) {
    this.cid = contact.cid;
    const mycontact = {
      name: contact.name,
      city: contact.city,
      mobile: contact.mobile,
      email: contact.email
    };
    this.cform.setValue(mycontact);
    this.canUpdate = true;
  }

  search() {
    if (this.searchStr !== '') {
      this.loaded = false;
      this.cservice.search(this.searchStr).subscribe(res => {
        this.contacts = res;
        this.loaded = true;
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
    this.searchStr = '';
    this.getContacts();
  }


  get name() {
    return this.cform.get('name');
  }
}
