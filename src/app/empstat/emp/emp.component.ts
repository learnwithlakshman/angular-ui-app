import { DeptCount, Employee } from './../model/deptcount.model';
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
  employees:Employee[] = [];

  name = "Krish";
  birthday = new Date(1988, 3, 15);
  desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ut vitae quo sit architecto. Velit facere animi officiis cumque. Possimus similique incidunt saepe placeat reiciendis laborum minus tenetur magni illum!"
  constructor(private empService:EmpService) {
      this.deptCount = this.empService.getEmployeeCount();
      let data:any[] = [["Dname","Count"]]
      for(let d of this.deptCount){
        data.push([d.dname,d.count]);
      }
    this.drawDeptCountChart(data);
  }

  ngOnInit(): void {
      this.empService.getEmployeeDetails()
      .subscribe(resp=>{
          console.log(resp);
          this.employees = resp;
      });
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
