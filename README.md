# My_Angular_Proj

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

    To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Defining a Component as in app.component.ts

## @Component =>Decorator having selector: templateURL/HTML and styleUrls/CSS, code/ts

## Interpolation => {{}} this denotes value from component can be used in template

## Databinding => data elements created in component are used in html/templates

## ng g c => when its created, its modified in app.module.ts

accessible in `app.component.html`
not accessible in `index.html` as index.html can access only app.component.html as it acts as a proxy index file

## Creating an ToDo Application:

Step 1: Creating a Login Page( new 3 Databindings) Create Login Component(html has uName and pW)
`Interpolation` is done in Login component html to get default values to UI from Login.ts...
Login button has `event binding` with a method which has code to print in the console.i.e., `(click)=HandleLogin()`...

`ngModel` to provide 2 way(bi-directional) data binding: import `FormsModule` banana-in-a-box-approach`:

    Username : <input type="text" name="Username" [(ngModel)]="unFromComp">

1.1: Hardcoded check in Login Component: Using Angular Attribute `*ngIf`
if ngIf comes to true, the text in small tag will be displayed

1.2: `Routing`with `app-root` in `index.html`
`app-routing.module.ts` has array of objects of paths and corresponding components defined.So this is the module which would handle all the routing.

1.3: `Dependency injecting Router` in Login Component
in a constructor any paramater is considered as member of the class
constructor(private router: Router){}
this.router.navigate([welcome])

1.4: `Pass Username from Login to Welcome`:
1.4.1: login.component.ts->this.router.navigate['welcome',this.unFromComp]
1.4.2: app-routing.module.ts-> path:’welcome/:name’
1.4.3: welcome.component.ts->constructor(private route : ActivatedRoute)
-> onInit(){this.uname=this.route.snapshot.params[‘name’]}
1.4.4: welcome.component.html->welcome{{uname}}

## Create ToDos component and populate ToDo table

    ToDos.component.ts->object of ToDos created
    ToDos.component.html->If only one? `<td>{{todo.id}}</td>`
    If all list of values? `<tr \*ngFor=”let list of todos”><td>{{list.id}}</td>`
    RouterLink(similar to href) toDo in welcome.html

## Create ToDo in separate class in same file

    Create `constructor`with parameters having return types in toDoClass.
    In component class `ListToDosComponent`,create a variable toDos having array of Objects of toDoClass.
    To get list of values `<tr \*ngFor=”let list of todos”><td>{{list.id}}</td>`

## Bootstrapping an Angular Application

    View source -> index has <app-root>
    main.ts has AppModule bootstrapped. AppModule has AppComponent bootstrapped.
    app.component.html is hence loaded/visible always hence we can make any footer/static to it.

## Insights

Deleting a component?
Remove import from app.modules.ts and
same file with @NgModules
Delete the folder of the component in project
