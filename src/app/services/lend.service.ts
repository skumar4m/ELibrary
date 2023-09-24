import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { ILend } from '../model/lend';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LendService {
  private apiUrl = "http://localhost:3000/lends";

  constructor(private http:HttpClient) { }

  GetLends(): Observable<ILend[]> {
    return this.http.get<ILend[]>(this.apiUrl);
  }

  AddLend(lend: ILend): Observable<ILend> {
    return this.http.post<ILend>(this.apiUrl, lend, httpOptions);
  }

}
