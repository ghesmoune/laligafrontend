import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/observable';
import {of} from 'rxjs/observable/of';
import { HttpClient, HttpHeaders ,HttpEvent,HttpRequest} from '@angular/common/http';
import { Image } from '../model/model';
import { catchError, map, tap } from 'rxjs/operators';
const urlFiles:string ="http://localhost:8080/api/files";

@Injectable()
export class FilesService {
 private imageUrl:string ="http://localhost:8080/api/images";
  constructor(public httpClient:HttpClient ) { }
 /*** Push upload file to storage and get its url*/
 pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
  let formdata: FormData = new FormData();
  formdata.append('file', file);
  const req = new HttpRequest('POST', urlFiles, formdata, {
    reportProgress: true,
    responseType: 'text'
  });
  return this.httpClient.request(req);
}
getImage(id: number): Observable<Image> {
  const url = `${this.imageUrl}/${id}`;
  return this.httpClient.get<Image>(url).pipe(
    tap(_ => this.log(`fetched image id=${id}`)),
    catchError(this.handleError<Image>(`get image id=${id}`))
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
