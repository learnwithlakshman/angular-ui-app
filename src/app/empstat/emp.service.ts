import { Dept } from './../shared/dept.model';
import { DeptCount, Employee } from './model/deptcount.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


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
  constructor(private http:HttpClient) { }

  getEmployeeCount(){

      return this.deptCount;
  }

  getDeptDetails(){
    return this.http.get<Dept[]>('../../assets/dept.json');
  }

  getEmployeeDetails(){
    return this.http.get<Employee[]>('../../assets/employee.json');
  }
  getDnameByDeptno(deptno:number){

  }

}
