import { Injectable } from '@angular/core';
import {IUser} from '../model/user';
import { Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = "http://localhost:3000/users";
  userList!: IUser[];
  userFound!: IUser;
  loggedIn: boolean = false;
  loggedUser!: string;

  constructor(private http:HttpClient) {

   }
   GetUser(username: string, password: string) : any {
      var userFound = this.userList.find(x => x.email == username && x.password == password);

      if (userFound != undefined) {
        console.log('Login success')
      } else {
        console.log('Login failed')
      }

      return userFound;
   }

   GetAllUsers():Observable<IUser[]> {
      return this.http.get<IUser[]>(this.apiUrl);
   }

   AddUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.apiUrl, user, httpOptions);
  }

  SetLogIn(logIn: boolean, loginUserId?: number, isAdmin?: boolean) {
    this.loggedIn = logIn;
    if (loginUserId == undefined)
    {
      environment.loginUserId = 0
    } else {
      environment.loginUserId = loginUserId;
    }

    if (isAdmin == undefined) {
      environment.IsAdmin = false;
    } else {
      environment.IsAdmin = isAdmin;
    }
    
    
  }

  GetLogin(): boolean {
    return this.loggedIn;
  }
}
