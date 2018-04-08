

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpEvent,HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs/observable';
import {of} from 'rxjs/observable/of';
import{ Competition} from '../model/model';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers : new HttpHeaders( {'Content-Type' : 'application/json'})
}
 
@Injectable()
export class CompetitionService {
  private CompetitionsUrl = 'http://localhost:8080/api/competitions';  // URL to web api

  constructor( private httpClient : HttpClient) { }
  getCompetitions (): Observable<Competition[]> {
    return this.httpClient.get<Competition[]>(this.CompetitionsUrl)
      .pipe(
        tap(competitions => this.log(`fetched competitions`)),
        catchError(this.handleError('get all competition', []))
      );
    }
/** GET Competition by id. Will 404 if id not found */
getCompetition(id: number): Observable<Competition> {
  const url = `${this.CompetitionsUrl}/${id}`;
  return this.httpClient.get<Competition>(url).pipe(
    tap(_ => this.log(`fetched competition id=${id}`)),
    catchError(this.handleError<Competition>(`get competition id=${id}`))
  );
}

/** POST: add a new Competition to the server */
addCompetition (competition: Competition): Observable<Competition> {
  
  return this.httpClient.post<Competition>(this.CompetitionsUrl,competition, httpOptions).pipe(
    tap((Competition: Competition) => this.log(`added Competition w/ id=${Competition.id}`)),
    catchError(this.handleError<Competition>('add competition'))
  );
}
 /** PUT: update the Competition on the server */
updateCompetition (competition: Competition): Observable<any> {
  return this.httpClient.put(this.CompetitionsUrl, competition , httpOptions).pipe(
    tap(_ => this.log(`updated competition id=${competition.id}`)),
    catchError(this.handleError<any>('update competition'))
  );
}

/** DELETE: delete the Competition from the server */
deleteCompetition (competition: Competition | number): Observable<Competition> {
  const id = typeof competition === 'number' ? competition : competition.id;
  const url = `${this.CompetitionsUrl}/${id}`;

  return this.httpClient.delete<Competition>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted Competition id=${id}`)),
    catchError(this.handleError<Competition>('deleteCompetition'))
  );
}



 /** Log a CompetitionService message with the MessageService */
 private log(message: string) {
  console.log('CompetitionService: ' + message);
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

