// Import HttpClient and User (assuming User is a custom type) into your enrollment.service.ts file
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { User } from './user'; // Import User if it's defined in a separate file

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = 'http://localhost:3000/enroll'; // Provide the URL where you want to send the POST request

  constructor(private _http: HttpClient) { } // Inject HttpClient

  enroll(user: User) {
    return this._http.post<any>(this._url, user);
  }
}
