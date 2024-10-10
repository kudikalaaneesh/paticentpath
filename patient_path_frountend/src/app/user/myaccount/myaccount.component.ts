import { Component ,OnInit} from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileComponent } from '../editprofile/editprofile.component';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrl: './myaccount.component.css'
})
export class MyaccountComponent {
  constructor(private userService: UserService,public dialog: MatDialog) { }
  user={
    name:'trisha',
    email:'tchowdhury455@gmail.com',
    number:'9862710589'
  };



editProfile() {
  const dialogRef = this.dialog.open(EditProfileComponent, {
    width: '300px',
    data: { user: this.user }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.user = result; // Update user with new data
      // You may want to save the updated user to the server here
    }
  });
}



ngOnInit():void{
  
}


}
