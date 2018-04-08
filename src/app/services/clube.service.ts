

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpEvent,HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import {of} from 'rxjs/observable/of';
import{ Clube} from '../model/model';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers : new HttpHeaders( {'Content-Type' : 'application/json'})
}
 
@Injectable()
export class ClubeService {
  private ClubesUrl = 'http://localhost:8080/api/clubes';  // URL to web api

  constructor( private httpClient : HttpClient) { }
  getClubes (): Observable<Clube[]> {
    return this.httpClient.get<Clube[]>(this.ClubesUrl)
      .pipe(
        tap(clubes => this.log(`fetched clubes`)),
        catchError(this.handleError('get all clube', []))
      );
    }
/** GET Clube by id. Will 404 if id not found */
getClube(id: number): Observable<Clube> {
  const url = `${this.ClubesUrl}/${id}`;
  return this.httpClient.get<Clube>(url).pipe(
    tap(_ => this.log(`fetched clube id=${id}`)),
    catchError(this.handleError<Clube>(`get clube id=${id}`))
  );
}

/** POST: add a new Clube to the server */
addClube (clube: Clube): Observable<Clube> {
  
  return this.httpClient.post<Clube>(this.ClubesUrl,clube, httpOptions).pipe(
    tap((Clube: Clube) => this.log(`added Clube w/ id=${Clube.id}`)),
    catchError(this.handleError<Clube>('add clube'))
  );
}
 /** PUT: update the Clube on the server */
updateClube (clube: Clube): Observable<any> {
  return this.httpClient.put(this.ClubesUrl, clube , httpOptions).pipe(
    tap(_ => this.log(`updated clube id=${clube.id}`)),
    catchError(this.handleError<any>('update clube'))
  );
}

/** DELETE: delete the Clube from the server */
deleteClube (clube: Clube | number): Observable<Clube> {
  const id = typeof clube === 'number' ? clube : clube.id;
  const url = `${this.ClubesUrl}/${id}`;

  return this.httpClient.delete<Clube>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted Clube id=${id}`)),
    catchError(this.handleError<Clube>('deleteClube'))
  );
}



 /** Log a ClubeService message with the MessageService */
 private log(message: string) {
  console.log('ClubeService: ' + message);
}
  /**
   * 
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
  
}
  
}

