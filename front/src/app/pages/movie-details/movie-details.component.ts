import { Component } from '@angular/core';
import { Movie } from '../../models/movie';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { RatingService } from '../../services/rating.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  movie: Movie | null = null;
  showRateForm = false;
  username!: string;
  score!: number;

  constructor(
    private route: ActivatedRoute, 
    private movieService: MovieService,
    private ratingService: RatingService) {}

  toggleRateForm() {
    this.showRateForm = !this.showRateForm;
  }

  submitRating() {
    const data = { username: this.username, score: this.score };
    this.ratingService.createRating(data).subscribe(() => {
      console.log('Rating submitted successfully');
      this.movieService.getMovieById(this.movie!.id).subscribe(movie => this.movie = movie);
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const movieId = Number(params.get('movieId'));
      this.movieService.getMovieById(movieId)
        .subscribe(movie => this.movie = movie);
    });
  }
}
