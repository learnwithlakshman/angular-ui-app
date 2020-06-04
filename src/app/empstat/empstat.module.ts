import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2GoogleChartsModule, GoogleChartsSettings } from 'ng2-google-charts';
import { EmpstatRoutingModule } from './empstat-routing.module';
import { EmpstatComponent } from './empstat.component';
import { DeptComponent } from './dept/dept.component';
import { EmpComponent } from './emp/emp.component';
import { SummaryPipe } from './summary.pipe';
import { KeyformatDirective } from './keyformat.directive';


@NgModule({
  declarations: [EmpstatComponent, DeptComponent, EmpComponent, SummaryPipe, KeyformatDirective],
  imports: [
    CommonModule,
    EmpstatRoutingModule,
    Ng2GoogleChartsModule
  ]
})
export class EmpstatModule { }
