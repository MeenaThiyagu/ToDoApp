import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.css']
})
export class ListToDosComponent implements OnInit {
  toDo={
    id:1,
    description:'Become a Full stack developer'
  }
  toDos=[{id:1,description:'Learn with Java and Server Side technologies'},
          {id:2,description:'Understand Database Management/Connectivity'},
          {id:3,description:'Understand Spring/SpringBoot and REST'},
          {id:4,description:"Strong knowledge on UI technologies such as Angular"}
        ]
  constructor() { }

  ngOnInit(): void {
  }

}
