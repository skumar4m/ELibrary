import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import {IUser} from '../model/user';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm!: FormGroup;
  invalidLogin!: boolean;
 
  constructor(private userService:UserService, private router: Router) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  checkLogin(myForm: FormGroup) {
    this.userService.GetAllUsers().subscribe((resp) => {
      let users = resp;
      let user = users.find(x => x.email==myForm.value.username && x.password == myForm.value.password);
      if (user != undefined) {
        this.invalidLogin = false;
        this.userService.SetLogIn(true, user.id, user.admin);
        this.router.navigate(['search-book']);
      } else {
        this.invalidLogin = true;
      }
    });
  }

  getAllUsers() {
    this.userService.GetAllUsers().subscribe((resp) => {
      console.log(resp);
    });
  }
}
