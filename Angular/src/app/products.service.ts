import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
// import { Iproducts } from './Products';
import { Observable, throwError } from 'rxjs';
import  { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  myObj;
  private url="http://localhost:3000/";
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(this.url+'products')
      .pipe(
        catchError(this.handleError)
      )
  }
  getProductById(_id: String){
    console.log(_id);
    return this.http.get(this.url+'productById/'+_id)
      .pipe(
        catchError(this.handleError)
      )
  }
  addProduct(obj){
    return this.http.post(this.url+'product', obj)
      .pipe(
        catchError(this.handleError)
      )
  }
  getSuggestions(char){
    return this.http.get(this.url+'suggestions/'+char)
      .pipe(
        catchError(this.handleError)
      )
  }
  getProductByKey(key: String){
    return this.http.get(this.url+'productByKey/'+key)
      .pipe(
        catchError(this.handleError)
      )
  }
  private handleError(error: HttpErrorResponse){
    console.log("Inside Error Handler: "+ error.status);
    if(error.status === 404)
      return throwError("Something went wrong");
    else
      return throwError("some other error");
  }
}
