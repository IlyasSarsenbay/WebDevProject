import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RatingComponent } from './pages/rating/rating.component';
import { HeaderComponent } from './pages/homepage/header/header.component';
import { GenreListComponent } from './pages/genre-list/genre-list.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'genres', component: GenreListComponent },
  // { path: 'movies/:genre', component: MovieListComponent },
  // { path: 'companies', component: CompaniesComponent },
  // { path: 'top-movies', component: TopMoviesComponent },
  { path: 'myratings', component: RatingComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:movieId', component: MovieDetailsComponent },
  { path: 'movies/:genre', component: MovieListComponent },
  { path: 'login', component: LoginpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
