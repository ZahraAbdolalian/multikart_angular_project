import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  dataSource = [
    { image: "../../assets/images/test2.jpg", name: 'test name', price: 1200, quantity: 1, action: '', total: 1200 },
  ]

  displayedColumns: string[] = ['image', 'name', 'price', 'quantity', 'action', 'total'];

}
