

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpEvent,HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs/observable';
import {of} from 'rxjs/observable/of';
import{ Team} from '../model/model';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers : new HttpHeaders( {'Content-Type' : 'application/json'})
}
 
@Injectable()
export class TeamService {
  private TeamsUrl = 'http://localhost:8080/api/teams';  // URL to web api

  constructor( private httpClient : HttpClient) { }
  getTeams (): Observable<Team[]> {
    return this.httpClient.get<Team[]>(this.TeamsUrl)
      .pipe(
        tap(teams => this.log(`fetched teams`)),
        catchError(this.handleError('get all team', []))
      );
    }
/** GET Team by id. Will 404 if id not found */
getTeam(id: number): Observable<Team> {
  const url = `${this.TeamsUrl}/${id}`;
  return this.httpClient.get<Team>(url).pipe(
    tap(_ => this.log(`fetched team id=${id}`)),
    catchError(this.handleError<Team>(`get team id=${id}`))
  );
}

/** POST: add a new Team to the server */
addTeam (team: Team): Observable<Team> {
  
  return this.httpClient.post<Team>(this.TeamsUrl,team, httpOptions).pipe(
    tap((Team: Team) => this.log(`added Team w/ id=${Team.id}`)),
    catchError(this.handleError<Team>('add team'))
  );
}
 /** PUT: update the Team on the server */
updateTeam (team: Team): Observable<any> {
  return this.httpClient.put(this.TeamsUrl, team , httpOptions).pipe(
    tap(_ => this.log(`updated team id=${team.id}`)),
    catchError(this.handleError<any>('update team'))
  );
}

/** DELETE: delete the Team from the server */
deleteTeam (team: Team | number): Observable<Team> {
  const id = typeof team === 'number' ? team : team.id;
  const url = `${this.TeamsUrl}/${id}`;

  return this.httpClient.delete<Team>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted Team id=${id}`)),
    catchError(this.handleError<Team>('deleteTeam'))
  );
}



 /** Log a TeamService message with the MessageService */
 private log(message: string) {
  console.log('TeamService: ' + message);
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

