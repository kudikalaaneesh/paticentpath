import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service'; // Adjust the path as necessary
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  bookAppointmentForm!:FormGroup;
  reviewForm!:FormGroup;

// bookingForm: any;
// review: any;

  
  constructor(
    private formBuilder:FormBuilder,
  
    private bookServices:AuthService,
    private router:Router
  ){
    this.bookAppointmentForm=this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      number:['',Validators.required],
      hospital:['',Validators.required],
      doctors:['',Validators.required],
      specialist:['',Validators.required],
      date:['',Validators.required]
    })
    ;
    this.reviewForm=this.formBuilder.group({
      writeReview:['',Validators.required]
    })
  }
 
  onSubmit() {
    if(this.reviewForm.value){
      this.bookServices.submitReview(this.reviewForm.value).subscribe(
        {
          next:()=>{
          alert("review submitted successfully");
          this.reviewForm.reset();
          }
        }
      )
  }
}
  onBookSubmit():void{
    if(this.bookAppointmentForm.valid){
    const bookingData=this.bookAppointmentForm.value;
    this.bookServices.submitBooking(bookingData).subscribe(
      next => {
          alert("Booking submitted successfully");
          this.bookAppointmentForm.reset(); 
          console.log("booking is successfull",bookingData);
      },
      error => {
          if (error.status === 400) {
              alert("Please fill in all required fields correctly.");
          } else {
              alert("An error occurred while submitting your booking. Please try again later.");
          }
      }
  );
  } else {
    alert("please fill the fields correctly");
  }


}
  
// onSubmit(_t99: NgForm) {
// throw new Error('Method not implemented.');
// }
  // review = {writeReview: '' }; // Model for review
//   review = {rating:0,comment: ''};

  booking = {name: '',number: '', email: '',hospital: '',doctors: '',specialist: '',date: ''};
//   // booking = { name:'',number:'',email:'',date: '', time: '', service: '' }; // Model for booking

//   constructor(private authService: AuthService) {}

//   // Handle review form submission
//   onReviewSubmit(reviewForm: NgForm) {
//     if (reviewForm.valid) {
//       this.authService.submitReview(this.review).subscribe(
//         response => {
//           console.log('Review submitted successfully:', response);
//           reviewForm.reset(); // Reset form after successful submission
//         },
//         error => {
//           console.error('Error submitting review:', error);
//         }
//       );
//     } else {
//       console.log('Review form is invalid');
//     }
//   }

//   // Handle booking form submission
//   onBookSubmit(bookingForm: NgForm) {
//     if (bookingForm.valid) {
//       this.authService.submitBooking(this.booking).subscribe(
//         response => {
//           console.log('Booking submitted successfully:', response);
//           bookingForm.reset(); // Reset form after successful submission
//         },
//         error => {
//           console.error('Error submitting booking:', error);
//         }
//       );
//     } else {
//       console.log('Booking form is invalid');
//     }
//   }
}
