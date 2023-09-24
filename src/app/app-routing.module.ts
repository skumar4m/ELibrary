import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PricingComponent } from './pricing/pricing.component';
import { RulesComponent } from './rules/rules.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "add-book", component: AddBookComponent},
  {path: "edit-book", component: EditBookComponent},
  {path: "search-book", component: SearchBooksComponent},
  {path: "home", component: HomeComponent},
  {path: "rules", component: RulesComponent},
  {path: "pricing", component: PricingComponent},
  {path: "about", component: AboutComponent},
  {path: "", redirectTo: "home", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
