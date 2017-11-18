import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { Routes, RouterModule } from '@angular/router';
import { ThirdComponent } from 'app/modules/simple-route/third/third.component';

const routes: Routes = [
  {path: '', redirectTo: 'foo' , pathMatch: 'full' },
  {path: 'foo', component: FirstComponent},
  {path: 'bar', component: SecondComponent},
  {path: 'third/:userId/:userName', component: ThirdComponent}
];

export const SimpleRoutes = RouterModule.forRoot(routes);
