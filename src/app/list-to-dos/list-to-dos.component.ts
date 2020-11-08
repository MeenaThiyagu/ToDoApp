import { Component, Inject, OnInit } from '@angular/core';




export class toDoClass {
  

  constructor(
                @Inject(Object) public id: number, 
                @Inject(String) public description:string,
                @Inject(Boolean) public isCompleted: boolean,
                @Inject(Date) public deadline: Date
              )
              {

              }   
             
}

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.css']
})

export class ListToDosComponent implements OnInit {
   toDo={
    id:1,
    description:'Become a Full stack developer'
  }
  // toDos=[{id:1,description:'Learn with Java and Server Side technologies'},
  //         {id:2,description:'Understand Database Management/Connectivity'},
  //         {id:3,description:'Understand Spring/SpringBoot and REST'},
  //         {id:4,description:"Strong knowledge on UI technologies such as Angular"}
  //       ]
  toDos=[new toDoClass(1,'Learn Java and Server Side technologies',true, new Date()),
        new toDoClass(2,'Understand Database Management/Connectivity',false, new Date()),
        new toDoClass(3,'Understand Spring/SpringBoot and REST',true, new Date()),
        new toDoClass(4,'Knowledge on UI technologies such as Angular',false, new Date()),
        new toDoClass(5,'Knowledge on Backend including RDBMS',false, new Date())
      ]
  constructor() { }

  ngOnInit(): void {
  }

}
