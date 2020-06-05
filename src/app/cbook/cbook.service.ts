import { ContactDTO,Contact } from './model/cbook.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "./../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class CbookService {

  contact:Contact
  baseUrl = environment.baseUrl;
  constructor(private http:HttpClient) { }

  addContact(contact:ContactDTO){
      return this.http.post<Contact>(`${this.baseUrl}new`,contact);
  }
  getContacts() {
     return this.http.get<Contact[]>(`${this.baseUrl}getall`);
  }
}
