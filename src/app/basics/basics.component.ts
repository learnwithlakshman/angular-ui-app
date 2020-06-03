import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {

  title = "Data Binding"
  imgUrl = "https://angular.io/generated/images/guide/architecture/databinding.png";
  colSpan = 3;
  status = "ok";
  imgSrc:string="../../assets/images/on.png";
  bulbStatus = true;
  username:string="";
  email:string="hello@gmail.com";
  countDown = 0;
  h:number;
  m:number;
  s:number;

  usersArray:string[] = [];

  deptArray= [
    {
      "deptno": 10,
      "dname": "Accounting",
      "location": "New York"
    },
    {
      "deptno": 20,
      "dname": "Research",
      "location": "Dallas"
    },
    {
      "deptno": 30,
      "dname": "Sales",
      "location": "Chicago"
    },
    {
      "deptno": 40,
      "dname": "Operations",
      "location": "Boston"
    }
  ]

  constructor() { }

  ngOnInit(): void {

    let timmer = setInterval(()=>{
      let date = new Date();
      this.h = date.getHours();
      this.m = date.getMinutes();
      this.s = date.getSeconds();
    },1000)

  }

  changeStatus(){
      if(this.bulbStatus){
        this.imgSrc = "../../assets/images/off.png";
      }else{
        this.imgSrc = "../../assets/images/on.png";
      }
      this.bulbStatus = !this.bulbStatus;
  }
  getInputData(username){
    console.log("user input:"+username);
     this.username = username;
  }

  collectEmail(){
      this.email = this.email.toUpperCase();
  }
  editName;
  saveOrUpdateUser(){

    let index = this.usersArray.indexOf(this.editName);
    console.log(this.username +" "+index);
    if(index == -1){
      if(this.username.trim() !== ""){
        this.usersArray.push(this.username);
        this.username = "";
      }
    }else{
        this.usersArray[index]= this.username;
    }
    this.username = "";


  }

  editUser(name){
      this.username = name;
      this.editName = name;
  }
  deleteUser(name){
      if(confirm("Do you really want delete :"+name+"?")){
          let index = this.usersArray.indexOf(name);
          this.usersArray.splice(index,1);
      }
  }


}
