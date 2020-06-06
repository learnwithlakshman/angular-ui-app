import { Injectable } from '@angular/core';

export interface User{
    username:string,
    email:string,
    password:string
}

export interface UserMinProfile{
  username:string,
  email:string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users:User[] = [
      {
          "username":"User1",
          "email":"user1@lwl.com",
          "password":"user1"

      },
      {
        "username":"User2",
        "email":"user2@lwl.com",
        "password":"user2"
      }
  ]
  constructor() { }

  loadUserByEmail(email:string){
      return this.users.filter(user=>user.email === email)[0];
  }

  login(email:string,password:string){
      let user:User = this.loadUserByEmail(email);
      if(user != null){
          if(user.password === password){
            let userProfile:UserMinProfile = {"email":user.email,"username":user.username};
            localStorage.setItem("user",JSON.stringify(userProfile));
            return true;
          }
      }
      return false;
  }

  getUserProfile(){
    return localStorage.getItem("user");
  }
  isUserLoggedIn(){
    return (localStorage.getItem("user") !=null );
  }
  logout(){
    localStorage.removeItem("user");
  }

}
