import { Component } from '@angular/core';
import { UserCartService } from '../service/user-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  dataSource = this.userCart.cartProducts

  displayedColumns: string[] = ['image', 'name', 'price', 'quantity', 'action', 'total'];

  constructor(private userCart: UserCartService) { }

  getTotalCost() {
    return this.dataSource.map(t => t.total).reduce((acc, value) => acc + value, 0);
  }

  reduceQuantity(quantityElem: HTMLInputElement, id: number) {
    let quantity = +quantityElem.value
    if (quantity > 1) {
      quantity--
      this.userCart.updateQuantity(id, quantity)
    }
    quantityElem.value = quantity.toString()
  }
  increaseQuantity(quantityElem: HTMLInputElement, id: number) {
    let quantity = +quantityElem.value
    quantity++
    quantityElem.value = quantity.toString()
    this.userCart.updateQuantity(id, quantity)
  }
}
