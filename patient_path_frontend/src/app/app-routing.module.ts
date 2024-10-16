import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserpageComponent } from './user/userpage/userpage.component';
import { BookComponent } from './user/book/book.component';

import { DoctorlistComponent } from './user/doctorlist/doctorlist.component';
import { HomeComponent } from './user/home/home.component';
import { MyaccountComponent } from './user/myaccount/myaccount.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  // {path:'',redirectTo:'/userpage',pathMatch:'full'},
  {path:'navbar',component:NavbarComponent},
  {path:'userpage',component:UserpageComponent},
  {path:'home',component:HomeComponent},
  {path:'book',component:BookComponent},
  {path:'doctorlist',component:DoctorlistComponent},
  {path:'myaccount',component:MyaccountComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
