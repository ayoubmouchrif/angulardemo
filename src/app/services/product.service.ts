import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  public getProducts(page:number=1, size:number=4):Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`http://localhost:8089/products?_page=${page}&_limit=${size}`)
  }
  public checkProduct(p : Product):Observable<Product>{
    return this.http.patch<Product>(`http://localhost:8089/products/${p.id}`, {checked:!p.checked})
  }
  public deleteProduct(p : Product){
    return this.http.delete<any>(`http://localhost:8089/products/${p.id}`)
  }

  public saveProduct(p:Product):Observable<Product>{
    return this.http.post<Product>(`http://localhost:8089/products`, p)
  }

  public searchProducts(keyword:string):Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`http://localhost:8089/products?name=${keyword}`);
  }
}
