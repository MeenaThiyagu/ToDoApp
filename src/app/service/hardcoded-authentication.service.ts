import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username,password){
    if(username==='MeenaT' && password==='Hello123!'){
      return true;
    }
    else{
      return false;
    }
  }
}
