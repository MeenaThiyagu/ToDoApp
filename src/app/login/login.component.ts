import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  unFromComp='MeenaT'
  pwFromComp='Hello123!'
  errorMessage="Invalid Credentails";
  isInvalidLogin=false;

  constructor() { }

  ngOnInit(): void {
  }

  HandleLogin(){
    console.log("Hello  "+ this.unFromComp);
    if(this.unFromComp==='MeenaT' && this.pwFromComp==="Hello123!"){
      this.isInvalidLogin=false
    }
    else{
    this.isInvalidLogin=true
    }
  }
 
}
