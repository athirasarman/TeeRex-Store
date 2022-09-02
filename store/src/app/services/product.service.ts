import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from '../interfaces/product';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productListUrl = 'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json '
  
  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  /** GET products list from the server */
  getProductsList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productListUrl)
      .pipe(
        tap(_ => this.log('fetched Products')),
        catchError(this.handleError<Product[]>('getHeroes', []))
      );
  }

  /** Log a ProductService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ProductService: ${message}`);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
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
}
