import { Component } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  genre: string = '';

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.genre = params['genre'] || '';
      this.fetchMovies();
    });
  }

  fetchMovies(): void {
    if (this.genre && this.genre !== '') {
      this.movieService.getMoviesByGenre(this.genre).subscribe(movies => {
        this.movies = movies;
        this.filteredMovies = this.movies;
      });
    } else {
      this.movieService.getMovies().subscribe(movies => {
        this.movies = movies;
        this.filteredMovies = this.movies;
      });
    }
  }
}
