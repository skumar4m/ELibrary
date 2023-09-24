import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IUser } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm!: FormGroup;
  userAdded!: boolean;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  registerUser(myForm: FormGroup) {
    let user:IUser = {
      id: 0,
      firstName: myForm.value.firstName,
      lastName: myForm.value.lastName,
      email: myForm.value.email,
      password: myForm.value.password,
      admin: false
    }

    this.userService.AddUser(user).subscribe((resp) => {
      console.log(resp);
      this.userAdded = true;
    });

}



}
