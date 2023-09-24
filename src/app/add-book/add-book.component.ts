import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BookService } from '../services/book.service';
import { IBook } from '../model/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  myForm!: FormGroup;
  bookAdded: boolean = false;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {

    this.myForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      author: new FormControl(''),
      imageUrl: new FormControl(''),
      books_count: new FormControl('')
    });
   }

   addBook(myForm:FormGroup) {
    let book:IBook = {
      id: 0,
      title: myForm.value.title,
      description: myForm.value.description,
      author: myForm.value.author,
      imageUrl: myForm.value.imageUrl,
      books_count: myForm.value.books_count,
      lended: false
    }

    this.bookService.AddBook(book).subscribe((resp) => {
      console.log(resp);
      this.bookAdded = true;
    });

  }

}