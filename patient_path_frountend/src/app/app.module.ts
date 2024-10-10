import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import {  FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserpageComponent } from './user/userpage/userpage.component';
import { MatMenuModule } from '@angular/material/menu';
import { DoctorlistComponent } from './user/doctorlist/doctorlist.component';
import { BookComponent } from './user/book/book.component';
import { HomeComponent } from './user/home/home.component';
import { MyaccountComponent } from './user/myaccount/myaccount.component';
import { FormsModule } from '@angular/forms';

import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditProfileComponent } from './user/editprofile/editprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminloginComponent,
   
    UserpageComponent,
    DoctorlistComponent,
    BookComponent,
    HomeComponent,
    MyaccountComponent,
    AboutComponent,
    NavbarComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterLink,
    HttpClientModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  
  providers: [
    provideAnimationsAsync()
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
