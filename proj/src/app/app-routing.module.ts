import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './info/info.component';
import { MyComponent } from './my/my.component';
import { PostsComponent } from './posts/posts.component';
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
  },
  {
    path: 'posts',
    component: PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
