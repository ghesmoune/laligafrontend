

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpEvent,HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import {of} from 'rxjs/observable/of';
import{ Categorie} from '../model/model';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers : new HttpHeaders( {'Content-Type' : 'application/json'})
}
 
@Injectable()
export class CategorieService {
  private CategoriesUrl = 'http://localhost:8080/api/categories';  // URL to web api

  constructor( private httpClient : HttpClient) { }
  getCategories (): Observable<Categorie[]> {
    return this.httpClient.get<Categorie[]>(this.CategoriesUrl)
      .pipe(
        tap(categories => this.log(`fetched categories`)),
        catchError(this.handleError('get all categorie', []))
      );
    }
/** GET Categorie by id. Will 404 if id not found */
getCategorie(id: number): Observable<Categorie> {
  const url = `${this.CategoriesUrl}/${id}`;
  return this.httpClient.get<Categorie>(url).pipe(
    tap(_ => this.log(`fetched categorie id=${id}`)),
    catchError(this.handleError<Categorie>(`get categorie id=${id}`))
  );
}

/** POST: add a new Categorie to the server */
addCategorie (categorie: Categorie): Observable<Categorie> {
  
  return this.httpClient.post<Categorie>(this.CategoriesUrl,categorie, httpOptions).pipe(
    tap((Categorie: Categorie) => this.log(`added Categorie w/ id=${Categorie.id}`)),
    catchError(this.handleError<Categorie>('add categorie'))
  );
}
 /** PUT: update the Categorie on the server */
updateCategorie (categorie: Categorie): Observable<any> {
  return this.httpClient.put(this.CategoriesUrl, categorie , httpOptions).pipe(
    tap(_ => this.log(`updated categorie id=${categorie.id}`)),
    catchError(this.handleError<any>('update categorie'))
  );
}

/** DELETE: delete the Categorie from the server */
deleteCategorie (categorie: Categorie | number): Observable<Categorie> {
  const id = typeof categorie === 'number' ? categorie : categorie.id;
  const url = `${this.CategoriesUrl}/${id}`;

  return this.httpClient.delete<Categorie>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted Categorie id=${id}`)),
    catchError(this.handleError<Categorie>('deleteCategorie'))
  );
}



 /** Log a CategorieService message with the MessageService */
 private log(message: string) {
  console.log('CategorieService: ' + message);
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

