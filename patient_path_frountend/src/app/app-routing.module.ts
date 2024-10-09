import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },

  {
     path:'login',component:LoginComponent
  },
  
  {
    path:'adminlogin',component:AdminloginComponent
  },
  {
    path:'signup',component:SignupComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
