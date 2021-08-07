import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // this service is available throughout(root) the application
})
export class UserService {
  constructor(private http: HttpClient) { }
  //This will fetch data from API and return
  getUserData() {
    return {
      name: 'Adarsh',
      email: 'adarsh@mail.com'
    }
  }
  fetchUserData() {
    return this.http.get('https://reqres.in/api/users?page=2');
  }
}
