import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  getRatings(): Observable<any> {
    return this.http.get(this.apiUrl + 'ratings/');
  }

  createRating(data: any): Observable<any> {
    return this.http.post(this.apiUrl + 'ratings/', data);
  }

  getRating(id: number): Observable<any> {
    return this.http.get(this.apiUrl + `ratings/${id}/`);
  }

  updateRating(id: number, data: any): Observable<any> {
    return this.http.put(this.apiUrl + `ratings/${id}/`, data);
  }

  deleteRating(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + `ratings/${id}/`);
  }
}
