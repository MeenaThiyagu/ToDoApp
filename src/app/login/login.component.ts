import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  unFromComp='MeenaT'
  pwFromComp='Hello123!'
  constructor() { }

  ngOnInit(): void {
  }

  HandleLogin(){
    console.log("Hello  "+ this.unFromComp);
  }
}
