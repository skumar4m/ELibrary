import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IBook } from '../model/book';
import { ILend } from '../model/lend';
import { BookService } from '../services/book.service';
import { LendService } from '../services/lend.service';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {
  myForm!:FormGroup;
  books!:IBook[];
  lends!:ILend[];
  imagePath: string = "assets/images/";
  userAdmn:boolean = environment.IsAdmin;

  constructor(private bookService: BookService, 
    private lendService: LendService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      title: new FormControl(''),
      author: new FormControl('')
    });

    this.GetBooks();
 }

  searchBooks(myForm: FormGroup) {
    let searchTitle:string;
    let searchAuthor:string;

    if(myForm.value.title) {
      searchTitle = myForm.value.title.toLowerCase();
    }

    if(myForm.value.author) {
      searchAuthor = myForm.value.author.toLowerCase();' ,m'
    }

    if(myForm.value.title && myForm.value.author) {
      this.books = this.books.filter(x => x.title.toLowerCase().includes(searchTitle) && x.author.toLowerCase().includes(searchAuthor));
    } else if(myForm.value.title) {
      this.books = this.books.filter(x => x.title.toLowerCase().includes(searchTitle));
    } else if(myForm.value.author) {
      this.books = this.books.filter(x => x.author.toLowerCase().includes(searchAuthor));
    } else {
      this.GetBooks();
    }
    
  }

  GetBooks() {
    this.bookService.GetBooks().subscribe((resp) => {
      this.books = resp;

      this.GetLends();
    });
  }

  RegisterLend(bookId: number) {
    let date = new Date();
    let lend:ILend = {
      userId: environment.loginUserId,
      bookId: bookId,
      issueDate: new Date(date.toDateString())
    }

    this.lendService.AddLend(lend).subscribe((resp) => {
      console.log(resp);

      this.GetLends();
    });
  }

  GetLends() {
    this.lendService.GetLends().subscribe((resp) => {
      this.lends = resp;
      console.log(resp);

      if (this.lends != undefined)
      {
        this.lends = this.lends.filter(x => x.userId == environment.loginUserId);
      }

      this.SetLendInfo();
    });
  }

  SetLendInfo() {
    for (let i = 0; i<this.books.length; i++)
    {
      let found = this.lends.find(x => x.bookId == this.books[i].id);
      if (found != undefined)
      {
        this.books[i].lended = true;
      }
    }

    console.log(this.books);
  }

  ClearAndSearch(myForm: FormGroup) {
    this.myForm.get("title")?.setValue("");
    this.myForm.get("author")?.setValue("");

    this.searchBooks(myForm);

  }
}
