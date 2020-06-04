import { Dept } from './../../shared/dept.model';
import { EmpService } from './../emp.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css']
})
export class DeptComponent implements OnInit{

  deptDetails:Dept[] = [];
  constructor(private empService:EmpService) { }


  ngOnInit(): void {
      this.empService.getDeptDetails().subscribe(resp=>{
          this.deptDetails = resp;
      })
  }


}
