import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BookService } from '../services/book.service';
import { IBook } from '../model/book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  myForm!: FormGroup;
  bookUpdated: boolean = false;
  bookDeleted: boolean = false;
  editId!: number;
  editBook!:IBook;

  constructor(private route: ActivatedRoute, 
    private bookService: BookService) {
      this.route.queryParams.subscribe(params => {
        this.editId = params['id'];
        this.GetBook(this.editId);
      })
     }

  ngOnInit(): void {

    this.myForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      author: new FormControl(''),
      imageUrl: new FormControl(''),
      books_count: new FormControl('')
    });
   }

   UpdateBook(myForm:FormGroup) {
    let book:IBook = {
      id: this.editBook.id,
      title: myForm.value.title,
      description: myForm.value.description,
      author: myForm.value.author,
      imageUrl: myForm.value.imageUrl,
      books_count: myForm.value.books_count,
      lended: this.editBook.lended
    }

    this.bookService.UpdateBook(book).subscribe((resp) => {
      console.log(resp);
      this.bookUpdated = true;
    });

  }

  GetBook(bookId:number) {
    this.bookService.GetBook(bookId).subscribe((resp) => {
      this.editBook = resp;
      let subset = (({title, description, author, imageUrl, books_count}) =>
      ({title, description, author, imageUrl, books_count}))(this.editBook);

      console.log(resp);
      this.myForm.setValue(subset);
    });
  }

  DeleteBook(bookId:number) {
    this.bookService.DeleteBook(bookId).subscribe((resp) => {
      console.log(resp);
      this.bookDeleted = true;
    });
  }

}