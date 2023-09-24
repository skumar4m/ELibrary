import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { IBook } from '../model/book';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = "http://localhost:3000/books";

  constructor(private http:HttpClient) { }

  GetBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.apiUrl);
  }

  AddBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(this.apiUrl, book, httpOptions);
  }

  GetBook(id:number): Observable<IBook> {
    return this.http.get<IBook>(this.apiUrl + "/" + id);
  }

  UpdateBook(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(this.apiUrl + "/" + book.id, book, httpOptions);
  }

  DeleteBook(id:number): Observable<IBook> {
    return this.http.delete<IBook>(this.apiUrl + "/" + id, httpOptions);
  }
}
