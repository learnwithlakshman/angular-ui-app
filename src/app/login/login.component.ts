import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidMessage = "Invalid credentials";
  isValid:boolean=true;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  login(f){
      //Logic
      this.isValid = false;
      let email = f.value.email;
      let pwd = f.value.password;
      console.log(email,pwd);
      if(this.authService.login(email,pwd)){
          this.router.navigate(['quiz']);
      }else{
          this.isValid = false;
        setTimeout(()=>{
            this.isValid = true;
        },1000);
      }

  }
}
