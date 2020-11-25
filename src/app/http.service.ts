import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, tap, map, mergeMap} from 'rxjs/operators';
import{ api } from './globale';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private getHttpHeaders() {
    return new HttpHeaders({
      //'Access-Control-Allow-Origin': '*'
    });
  }

  public get<T>( url: string): Observable<T> {
    return this.http.get<any>(
      `${api.baseApiUrl}/${url}`,
        {
          headers: this.getHttpHeaders(),
          observe: 'response',
         // params: queryStringParams,
        }
    )
    .pipe(
      catchError( (err: HttpErrorResponse) => {
        return this.handleError(err);
      }),
      map((response: any) => {
        return (response != null) && response.body ? response.body : null;
      }),
    );
  }

  private handleError(errorResponse: HttpErrorResponse) {
    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.')
  }
}
