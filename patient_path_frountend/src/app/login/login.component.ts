





import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup; 

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  logIn() {
    if (this.loginForm.invalid) {
      alert("Please fill in all fields.");
      return;
    }

    this.loginService.getUsers().subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
      });

      if (user) {
        alert("Login Successful");
        this.loginForm.reset();
        
        this.router.navigate(['dashboard']); 
      } else {
        alert("Invalid Credentials");
      }
    }, err => {
      alert("Server error");
    });
  }
}

