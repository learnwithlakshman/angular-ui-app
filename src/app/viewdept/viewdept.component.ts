import { Dept } from './../shared/dept.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-viewdept',
  templateUrl: './viewdept.component.html',
  styleUrls: ['./viewdept.component.css']
})
export class ViewdeptComponent implements OnInit {

  @Input()
  dept:Dept;

  @Output()
  remove = new EventEmitter<Dept>();

  constructor() { }

  ngOnInit(): void {
  }

  removeDept(dept:Dept){
     this.remove.emit(dept);
  }
}
