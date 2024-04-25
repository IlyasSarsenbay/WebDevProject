import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
//import { movies } from '../mock-data/movies-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Provides the service at the root injector level
})
export class MovieService {
  private apiUrl = 'http://127.0.0.1:8000/api/';
  private movies: Movie[] = [];

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}movies/`);
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}movies/${id}/`);
  }

  getMoviesByGenre(genre: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl + 'movies/?genre=' + genre);
  }
}