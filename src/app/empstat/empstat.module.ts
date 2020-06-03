import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2GoogleChartsModule, GoogleChartsSettings } from 'ng2-google-charts';
import { EmpstatRoutingModule } from './empstat-routing.module';
import { EmpstatComponent } from './empstat.component';
import { DeptComponent } from './dept/dept.component';
import { EmpComponent } from './emp/emp.component';


@NgModule({
  declarations: [EmpstatComponent, DeptComponent, EmpComponent],
  imports: [
    CommonModule,
    EmpstatRoutingModule,
    Ng2GoogleChartsModule
  ]
})
export class EmpstatModule { }
