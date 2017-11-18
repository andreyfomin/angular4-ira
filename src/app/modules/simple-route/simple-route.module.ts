import { SimpleRoutes } from './simple.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { SimpleRouteTestComponent } from './simple-route-test/simple-route-test.component';
import { ThirdComponent } from './third/third.component';

@NgModule({
  imports: [
    CommonModule,
    SimpleRoutes,
  ],
  exports : [
    SimpleRouteTestComponent,
  ],
  declarations: [
    FirstComponent,
    SecondComponent,
    SimpleRouteTestComponent,
    ThirdComponent,
  ]
})
export class SimpleRouteModule { }
