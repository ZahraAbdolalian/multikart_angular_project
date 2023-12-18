import { Injectable } from '@angular/core';
import { CartProduct } from '../model/cart-product.model';

@Injectable({
  providedIn: 'root'
})
export class UserCartService {

  cartProducts: CartProduct[] = []

  constructor() { }

  addProduct(newProduct: CartProduct) {
    const existingProductIndex = this.cartProducts.findIndex((p) => p.id === newProduct.id);
    if (existingProductIndex !== -1) {
      this.cartProducts[existingProductIndex].quantity += newProduct.quantity;
    } else {
      this.cartProducts.push({ ...newProduct });
    }
  }

  updateQuantity(id: number, newQuantity: number) {
    const productIndex = this.cartProducts.findIndex(p => p.id === id)
    const price = this.cartProducts[productIndex].price
    this.cartProducts[productIndex].quantity = newQuantity
    this.cartProducts[productIndex].total = this.getTotal(newQuantity, price)
  }

  getTotal(quantity: number, price: number): number {
    return quantity * price
  }
}
