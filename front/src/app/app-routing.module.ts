import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage/homepage.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RatingComponent } from './pages/rating/rating.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  // { path: 'genres', component: GenresComponent },
  // { path: 'companies', component: CompaniesComponent },
  // { path: 'top-movies', component: TopMoviesComponent },
  { path: 'myratings', component: RatingComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:movieId', component: MovieDetailsComponent },
  { path: 'login', component: LoginpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
