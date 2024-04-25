import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/homepage/header/header.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthInterceptor } from './services/AuthInterceptor';
import { RatingComponent } from './pages/rating/rating.component';
import { GenreListComponent } from './pages/genre-list/genre-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListComponent,
    MovieDetailsComponent,
    LoginpageComponent,
    SignupComponent,
    RatingComponent,
    GenreListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
