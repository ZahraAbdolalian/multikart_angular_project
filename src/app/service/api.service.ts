import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../post.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getSomeProducts(num: number) {
    return this.http.get<Post[]>(`https://fakestoreapi.com/products?limit=${num}`)
  }

  getSomeProductFromElectronics(num : number) {
    return this.http.get<Post[]>(`https://fakestoreapi.com/products/category/electronics?limit=${num}`)
  }

  getSomeProductFromJewelery(num : number) {
    return this.http.get<Post[]>(`https://fakestoreapi.com/products/category/jewelery?limit=${num}`)
  }

  getSomeProductFromMenClothing(num : number) {
    return this.http.get<Post[]>(`https://fakestoreapi.com/products/category/men's clothing?limit=${num}`)
  }

  getSomeProductFromWomenClothing(num : number){
    return this.http.get<Post[]>(`https://fakestoreapi.com/products/category/women's clothing?limit=${num}`)
  }

  getProductsWithId (id : number) {
    return this.http.get<Post>(`https://fakestoreapi.com/products/${id}`)
  }
}
