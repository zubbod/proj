import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyComponent } from './my/my.component';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './info/info.component';
import { UserFormComponent } from './user-form/user-form.component';


const routes: Routes = [
  {
    path: 'my',
    component: MyComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'feedback',
    component: InfoComponent
  },
  {
    path: 'form',
    component: UserFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
