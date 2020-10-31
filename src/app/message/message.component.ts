import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
 
  title="message is displayed";
  constructor() { }

  ngOnInit(): void {
    console.log('the title is '+this.title);
  }
  
  
}







