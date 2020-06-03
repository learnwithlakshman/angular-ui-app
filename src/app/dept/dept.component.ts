import { Component, OnInit } from '@angular/core';
import { Dept } from '../shared/dept.model';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css']
})
export class DeptComponent implements OnInit {

  deptArray:Dept[]= [
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
  ];
  constructor() { }

  ngOnInit(): void {
  }

  removeDeptDetails(dept:Dept){
     this.deptArray =  this.deptArray.filter(d=>d.deptno != dept.deptno);
  }

}
