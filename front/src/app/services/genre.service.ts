import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private apiUrl = 'http://127.0.0.1:8000/api/genres/';

  constructor(private http: HttpClient) { }

  getGenres(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getGenre(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}${id}/`);
  }

  updateGenre(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}${id}/`, data);
  }

  deleteGenre(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
}
