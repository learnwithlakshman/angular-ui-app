import { DeptCount } from './model/deptcount.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {


  deptCount:DeptCount[]=[
      {
        "dname":"sales",
        "count":10
      },
      {
        "dname":"dev",
        "count":50
      },
      {
          "dname":"qa",
          "count":5
      },
      {
        "dname":"UI/UX",
        "count":50
    }

  ]
  constructor() { }

  getEmployeeCount(){
      //Logic
      return this.deptCount;
  }

  getDnameByDeptno(deptno:number){

  }

}
