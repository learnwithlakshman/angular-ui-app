import { DeptCount } from './../model/deptcount.model';
import { EmpService } from './../emp.service';
import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  public chartData: GoogleChartInterface;
  deptCount:DeptCount[] = [];
  constructor(private empService:EmpService) {
      this.deptCount = this.empService.getEmployeeCount();
      let data:any[] = [["Dname","Count"]]
      for(let d of this.deptCount){
        data.push([d.dname,d.count]);
      }
    this.drawDeptCountChart(data);
  }

  ngOnInit(): void {
  }

  drawDeptCountChart(data){
    this.chartData ={
      chartType: 'PieChart',
    dataTable: data,
    //firstRowIsData: true,
    options: {'title': 'Tasks','width':400,'height':400}
    };

  }

  select(event){
      console.log(event.selectedRowFormattedValues[0]);
  }

}
