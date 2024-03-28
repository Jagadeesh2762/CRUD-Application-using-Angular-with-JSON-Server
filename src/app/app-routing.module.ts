import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path:'',component:ListUserComponent
  },
  {
    path:'add',component:AddUserComponent
  },
  {
    path:'edit/:id',component:EditUserComponent
  },
  {
    path:'list',component:ListUserComponent
  },
  {
    path:'**',component:NotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
