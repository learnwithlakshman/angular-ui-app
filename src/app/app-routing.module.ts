import { QuizhomeComponent } from './quiz/quizhome/quizhome.component';
import { DeptComponent } from './dept/dept.component';
import { DirectiveComponent } from './directive/directive.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicsComponent } from './basics/basics.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'basics',
    component: BasicsComponent
  },
  {
    path: 'directives',
    component: DirectiveComponent
  },
  {
    path: 'dept',
    component: DeptComponent
  },
  {
    path: 'empstat',
    loadChildren: () => import('./empstat/empstat.module').then(m => m.EmpstatModule)
  },
  {
    path: 'cbook',
    loadChildren: () => import('./cbook/cbook.module').then(m => m.CbookModule)
  }, 
  {
    path:'quiz',
    component:QuizhomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
