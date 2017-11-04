import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ListtestComponent } from './listtest/listtest.component';
import { ListradioComponent } from './listradio/listradio.component';
import { ListbuttonsComponent } from './listbuttons/listbuttons.component';
import { IfLogicComponent } from './IfLogic/IfLogic.component';
import { SVGMouseMoveComponent } from './SVGMouseMove/SVGMouseMove.component';
import { MouseEventsComponent } from './MouseEvents/MouseEvents.component';
import { ToDoExampleComponent } from './ToDoExample/ToDoExample.component';
import { TodoInputComponent } from './ToDoExample/TodoInput/TodoInput.component';
import { ToDoListComponent } from './ToDoExample/ToDoList/ToDoList.component';
import { TodoService } from './ToDoExample/Todo.service';
import { FlickrComponent } from './flickr/flickr.component';
import { ReadJSONFileComponent } from './read-jsonfile/read-jsonfile.component';
import { SearchNYTComponent } from './search-nyt/search-nyt.component';
import { NYTService } from './search-nyt/nyt.service';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { FileService } from './fork-join/file.service';
import { BasicRoutingComponent } from './BasicRouting/basic-routing.component';
import { AboutComponent } from './BasicRouting/about.component';
import { LoginComponent } from './BasicRouting/login.component';
import { UsersComponent } from './BasicRouting/users.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ChildComponent,
    ParentComponent,
    ListtestComponent,
    ListradioComponent,
    ListbuttonsComponent,
    IfLogicComponent,
    SVGMouseMoveComponent,
    MouseEventsComponent,
    ToDoExampleComponent,
    TodoInputComponent,
    ToDoListComponent,
    FlickrComponent,
    ReadJSONFileComponent,
    SearchNYTComponent,
    ForkJoinComponent,
    BasicRoutingComponent,
    AboutComponent,
    LoginComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TodoService, NYTService, FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
