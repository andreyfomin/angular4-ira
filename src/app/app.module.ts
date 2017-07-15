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

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ChildComponent,
    ParentComponent,
    ListtestComponent,
    ListradioComponent,
    ListbuttonsComponent,
    IfLogicComponent,
    SVGMouseMoveComponent
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
