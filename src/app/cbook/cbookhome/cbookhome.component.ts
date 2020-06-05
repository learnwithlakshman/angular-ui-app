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
  contacts:Contact[]=[]
  cform:FormGroup;
  constructor(private fb:FormBuilder,private cservice:CbookService) {

       this.cform =  this.fb.group({
           name:['',[Validators.required,Validators.minLength(3)]],
           email:[''],
           mobile:[''],
           city:['']
       })

  }

  ngOnInit(): void {
      this.getContacts();
  }

  onSubmit(){
    let contact:ContactDTO = this.cform.value;
    this.cform.reset();
    this.cservice.addContact(contact).subscribe(res=>{
        console.log(res);
        this.getContacts();
    })
    }

    getContacts(){
      this.cservice.getContacts().subscribe(res=>{
        this.contacts = res;
      })
    }


  get name(){
    return this.cform.get('name');
  }
}
