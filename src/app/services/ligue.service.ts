

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpEvent,HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs/observable';
import {of} from 'rxjs/observable/of';
import{ League} from '../model/model';
import { catchError, map, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
const httpOptions = {
  headers : new HttpHeaders( {'Content-Type' : 'application/json'})
}
 
@Injectable()
export class LeagueService {
  private LeaguesUrl = 'http://localhost:8080/api/leagues';  // URL to web api

  constructor( private httpClient : HttpClient,public snackBar: MatSnackBar) { }
  getLeagues (): Observable<League[]> {
    return this.httpClient.get<League[]>(this.LeaguesUrl)
      .pipe(
        tap(leagues => this.log(`fetched leagues`)),
        catchError(this.handleError('get all league', []))
      );
    }
/** GET League by id. Will 404 if id not found */
getLeague(id: number): Observable<League> {
  const url = `${this.LeaguesUrl}/${id}`;
  return this.httpClient.get<League>(url).pipe(
    tap(_ => this.log(`fetched league id=${id}`)),
    catchError(this.handleError<League>(`get league id=${id}`))
  );
}

/** POST: add a new League to the server */
addLeague (league: League): Observable<League> {
  
  return this.httpClient.post<League>(this.LeaguesUrl,league, httpOptions).pipe(
    tap((League: League) => this.log(`added League w/ id=${League.id}`)),
    catchError(this.handleError<League>('add league'))
  );
}
 /** PUT: update the League on the server */
updateLeague (league: League): Observable<any> {
  return this.httpClient.put(this.LeaguesUrl, league , httpOptions).pipe(
    tap(_ => this.log(`updated league id=${league.id}`)),
    catchError(this.handleError<any>('update league'))
  );
}

/** DELETE: delete the League from the server */
deleteLeague (league: League | number): Observable<League> {
  const id = typeof league === 'number' ? league : league.id;
  const url = `${this.LeaguesUrl}/${id}`;

  return this.httpClient.delete<League>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted League id=${id}`)),
    catchError(this.handleError<League>('deleteLeague'))
  );
}



 /** Log a LeagueService message with the MessageService */
 private log(message: string) {
 
  this.snackBar.open("League Service",message,{duration:3000});
}
  /**
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

