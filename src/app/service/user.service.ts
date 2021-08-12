import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root' // this service is available throughout(root) the application
})
export class UserService {
  constructor(private http: HttpClient) {
  }
  fetchUserData() {
    return this.http.get('https://reqres.in/api/users?page=2', {});
  }

  getUser() {
    return this.http.get(`${environment.baseURL}/user`, {
      headers: {
        'app-id': environment.appId
      }
    });
  }
  getUserById(userId: string) {
    return this.http.get(`${environment.baseURL}/user/${userId}`, {
      headers: {
        'app-id': environment.appId
      }
    });
  }
  getMovies() {
    return this.http.get('http://localhost:3000/movies');
  }
  addMovie(data:any) {
    return this.http.post('http://localhost:3000/movies', data);
  }
  deleteMovie(movieId:string) {
    return this.http.delete(`http://localhost:3000/movies/${movieId}`);
    // return this.http.delete("http://localhost:3000/movies/" + movieId);
  }
}
