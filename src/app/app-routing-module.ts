import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Secondcomponent } from './secondcomponent/secondcomponent';
import { UserForm } from './user-form/user-form';

const routes: Routes = [
   { path: 'users', component: Secondcomponent },
  { path: 'add_users', component: UserForm }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
