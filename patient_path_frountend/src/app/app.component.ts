import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'patient_path_frountend';
 public  useractive:boolean=true;

 constructor(){

 }

 public loginactive(){
  if(localStorage.getItem("useremail")!=null){
    this.useractive=false;
    console.log(this.useractive);
  }
 }

 public logout(){
  if(this.useractive==false){
    this.useractive=true;
    localStorage.setItem('useremail',"");
  }
 }
}
