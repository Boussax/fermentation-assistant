import { Injectable } from '@angular/core';
import { Ferment } from './ferment';
import { Observable, of } from 'rxjs';
import { MessageService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FermentService {
  private fermentsUrl  = 'api/ferments';  // URL to web api
  private archiveUrl  = 'api/archive';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET hero by id. Will 404 if id not found */
  getFerment(id: number): Observable<Ferment> {
    const url = `${this.fermentsUrl}/${id}`;
    return this.http.get<Ferment>(url).pipe(
      tap(_ => this.log(`fetched ferment id=${id}`)),
      catchError(this.handleError<Ferment>(`getFerment id=${id}`))
    );
  }

  /** GET ferments from the server */
  getFerments(fermentList: string):Observable<Ferment[]> {
    return this.http.get<Ferment[]>('api/'+fermentList)
      .pipe(
        tap(_ => this.log('fetched ferments list')),
        catchError(this.handleError<Ferment[]>('getFerments', []))
      );
  }

  addFerment(fermentList: string, ferment: Ferment): Observable<any> {
    return this.http.post<Ferment>('api/'+fermentList, ferment, 
      this.httpOptions).pipe(
        tap((newFerment : Ferment) => this.log(`added ferment w/ id=${newFerment.id} to ${fermentList}`)),
        catchError(this.handleError<Ferment>('addFerment'))
      );
  }

  deleteFerment(id: number): Observable<Ferment> {
    const url = `${this.fermentsUrl}/${id}`;

    return this.http.delete<Ferment>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted ferment id=${id}`)),
      catchError(this.handleError<Ferment>('deleteFerment'))
    );
  }

  /** PUT: update the hero on the server */
  updateFerment(fermentList: string, ferment: Ferment): Observable<any> {
    return this.http.put('api/'+fermentList, ferment, this.httpOptions).pipe(
      tap(_ => this.log(`updated ferment id=${ferment.id}`)),
      catchError(this.handleError<any>('updateFerment'))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`FermentService: ${message}`);
  }

}
