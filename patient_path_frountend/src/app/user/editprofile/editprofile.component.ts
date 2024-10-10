import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrl: './editprofile.component.css'
})

export class EditProfileComponent implements OnInit {
  editProfileForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private dialog:DialogRef<EditProfileComponent> // Use the service
  ) {
    this.editProfileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('\\+?[0-9]*')]]
    });
  }

  ngOnInit(): void {
    // Optionally load existing user data here
    this.loadUserData();
  }

  loadUserData(): void {
    this.userService.getUserData().subscribe(userData => {
      this.editProfileForm.patchValue(userData);
    });
  }

  onSubmit(): void {
    if (this.editProfileForm.valid) {
      const updatedUser = this.editProfileForm.value;

      // Send the updated user data to the db.json
      this.userService.updateUserData(updatedUser).subscribe({
        next: () => {
          console.log('Profile updated successfully');
          // this.router.navigate(['/myaccount']); // Navigate to My Account page
        },
        error: (err: any) => {
          console.error('Error updating profile', err);
        }
      });
      this.dialog.close();
    }
  }

  onNoClick(): void {
    this.router.navigate(['/myaccount']); // Navigate back to My Account page
  }
}
