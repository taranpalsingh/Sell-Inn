import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Iproducts } from './Products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  myObj;
  private url="http://localhost:3000/";
  constructor(private http: HttpClient) { }

  // getProducts(): Observable<Iproducts>{
    // return this.http.get(this.url+'products')
  getProducts(){
    return this.http.get(this.url+'products');
  }
  getProductById(_id: String){
    console.log(_id);
    return this.http.get(this.url+'productById/'+_id);
  }
  addProduct(obj){
    console.log(obj);
    return this.http.post(this.url+'product', obj);
  }
  getSuggestions(char){
    return this.http.get(this.url+'suggestions/'+char);
  }
  getProductByKey(key: String){
    console.log(key);
    return this.http.get(this.url+'productByKey/'+key);
  }
}
