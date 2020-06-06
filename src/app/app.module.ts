import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BasicsComponent } from './basics/basics.component';
import { HomeComponent } from './home/home.component';
import { DirectiveComponent } from './directive/directive.component';
import { DeptComponent } from './dept/dept.component';
import { ViewdeptComponent } from './viewdept/viewdept.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizhomeComponent } from './quiz/quizhome/quizhome.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, BasicsComponent, HomeComponent, DirectiveComponent, DeptComponent,
    ViewdeptComponent,
    QuizhomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
