import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private userService:UserService, 
    private router:Router) { }

  ngOnInit(): void {
  }

  GetLogin(): boolean {
    return this.userService.GetLogin();
  }

  SetLogOut() {
    this.userService.SetLogIn(false);
    this.router.navigate(['home']);
  }

}
