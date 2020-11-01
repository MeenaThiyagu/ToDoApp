import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router :Router) { }//Router dependency injected

  ngOnInit(): void {
  }

  HandleLogin(){
    console.log("Hello  "+ this.unFromComp);
    if(this.unFromComp==='MeenaT' && this.pwFromComp==='Hello123!'){
      this.isInvalidLogin=false
      this.router.navigate(['welcome',this.unFromComp])
      
      //Redirecting to Welcome component
    }
    else{
    this.isInvalidLogin=true
    this.router.navigate(['error'])
    }
  }
 
}
