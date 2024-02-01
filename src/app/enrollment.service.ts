// Import HttpClient and User (assuming User is a custom type) into your enrollment.service.ts file
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; // Import HttpClient and HttpErrorResponse
import { User } from './user'; // Import User if it's defined in a separate file
import { catchError } from 'rxjs/operators'; // Import catchError operator from 'rxjs/operators'
import { throwError } from 'rxjs'; // Import throwError from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = 'http://localhost:3000/enroll'; // Provide the URL where you want to send the POST request

  constructor(private _http: HttpClient) { } // Inject HttpClient

  enroll(user: User) {
    return this._http.post<any>(this._url, user)
      .pipe(
        catchError(this.errorHandler) // Use catchError operator to handle errors
      );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
