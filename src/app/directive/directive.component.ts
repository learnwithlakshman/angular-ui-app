import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  username:string;
  usernames:string[] = [];
  viewtype:string = 'table';

  deptArray= [
    {
      "deptno": 10,
      "dname": "Accounting",
      "location": "New York"
    },
    {
      "deptno": 20,
      "dname": "Research",
      "location": "Dallas"
    },
    {
      "deptno": 30,
      "dname": "Sales",
      "location": "Chicago"
    },
    {
      "deptno": 40,
      "dname": "Operations",
      "location": "Boston"
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }
  addUser(){
    console.log(this.username.trim().length);

    if(this.username.trim().length != 0){
        this.usernames.push(this.username);
        this.username = "";
        console.log(this.usernames);
    }
  }

}
