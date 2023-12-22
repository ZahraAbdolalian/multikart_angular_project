import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkout-card',
  templateUrl: './checkout-card.component.html',
  styleUrls: ['./checkout-card.component.scss']
})
export class CheckoutCardComponent {

  displayedColumns: string[] = ['title', 'value']

  @Input() cardTitle: string = '';
  @Input() cardSubtitle: string = '';
  @Input() dataSource!: { title: string, value: string }[];
}
