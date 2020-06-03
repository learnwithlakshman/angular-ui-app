import { EmpstatComponent } from './empstat.component';
import { DeptComponent } from './dept/dept.component';
import { EmpComponent } from './emp/emp.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

    {
      path:'',
      component:EmpstatComponent,
      children:[
        {
            path:'',
            component:EmpComponent
        },
        {
          path:'emp',
          component:EmpComponent
        },
        {
          path:'dept',
          component:DeptComponent
        }
      ]
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpstatRoutingModule { }
