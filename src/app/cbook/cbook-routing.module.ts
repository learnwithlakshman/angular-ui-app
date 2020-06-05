import { CbookhomeComponent } from './cbookhome/cbookhome.component';
import { CbookComponent } from './cbook.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

    {
      path:'',
      component:CbookComponent,
      children:[
          {
            path:'',
            component:CbookhomeComponent
          },
          {
            path:'home',
            component:CbookhomeComponent
          }
      ]
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CbookRoutingModule { }
