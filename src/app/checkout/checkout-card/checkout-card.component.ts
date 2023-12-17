import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkout-card',
  templateUrl: './checkout-card.component.html',
  styleUrls: ['./checkout-card.component.scss']
})
export class CheckoutCardComponent {
  // dataSourceStripeJs = [
  //   { title: 'CART NUMBER', value: '4242424242424242' },
  //   { title: 'MM/YY', value: '2/2020' },
  //   { title: 'CVC', value: '2222' },
  // ]
  displayedColumns: string[] = ['title', 'value']

  @Input() cardTitle: string = '';
  @Input() cardSubtitle: string = '';
  @Input() dataSource!: { title: string, value: string }[];
}
