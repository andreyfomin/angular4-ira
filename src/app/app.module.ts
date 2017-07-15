import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    ToDoListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
