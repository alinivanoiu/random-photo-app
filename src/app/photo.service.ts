import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';

interface UnsplashResponse {
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
  };
}
@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  BASE_URL = `https://api.unsplash.com`;
  API_KEY = '';
  constructor(private http: HttpClient) {}
  getRandomPhoto() {
    return this.http
      .get<UnsplashResponse>(`${this.BASE_URL}/photos/random`, {
        headers: {
          Authorization: 'Client-ID ' + this.API_KEY,
        },
      })
      .pipe(pluck('urls', 'regular'));
  }
}
