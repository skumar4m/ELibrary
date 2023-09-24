import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { AddBookComponent } from './add-book/add-book.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    AboutComponent,
    PricingComponent,
    SignupComponent,
    AddBookComponent,
    SearchBooksComponent,
    FooterComponent,
    HomeComponent,
    RulesComponent,
    EditBookComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
