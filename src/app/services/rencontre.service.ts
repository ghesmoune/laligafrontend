

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpEvent,HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs/observable';
import {of} from 'rxjs/observable/of';
import{ Match} from '../model/model';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers : new HttpHeaders( {'Content-Type' : 'application/json'})
}
 
@Injectable()
export class MatchService {
  private MatchsUrl = 'http://localhost:8080/api/matchs';  // URL to web api

  constructor( private httpClient : HttpClient) { }
  getMatchs (): Observable<Match[]> {
    return this.httpClient.get<Match[]>(this.MatchsUrl)
      .pipe(
        tap(matchs => this.log(`fetched matchs`)),
        catchError(this.handleError('get all match', []))
      );
    }
/** GET Match by id. Will 404 if id not found */
getMatch(id: number): Observable<Match> {
  const url = `${this.MatchsUrl}/${id}`;
  return this.httpClient.get<Match>(url).pipe(
    tap(_ => this.log(`fetched match id=${id}`)),
    catchError(this.handleError<Match>(`get match id=${id}`))
  );
}

/** POST: add a new Match to the server */
addMatch (match: Match): Observable<Match> {
  
  return this.httpClient.post<Match>(this.MatchsUrl,match, httpOptions).pipe(
    tap((Match: Match) => this.log(`added Match w/ id=${Match.id}`)),
    catchError(this.handleError<Match>('add match'))
  );
}
 /** PUT: update the Match on the server */
updateMatch (match: Match): Observable<any> {
  return this.httpClient.put(this.MatchsUrl, match , httpOptions).pipe(
    tap(_ => this.log(`updated match id=${match.id}`)),
    catchError(this.handleError<any>('update match'))
  );
}

/** DELETE: delete the Match from the server */
deleteMatch (match: Match | number): Observable<Match> {
  const id = typeof match === 'number' ? match : match.id;
  const url = `${this.MatchsUrl}/${id}`;

  return this.httpClient.delete<Match>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted Match id=${id}`)),
    catchError(this.handleError<Match>('deleteMatch'))
  );
}



 /** Log a MatchService message with the MessageService */
 private log(message: string) {
  console.log('MatchService: ' + message);
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

