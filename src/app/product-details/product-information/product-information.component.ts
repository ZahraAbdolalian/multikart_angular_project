import { Component } from '@angular/core';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.scss']
})
export class ProductInformationComponent {

  mediaIcons = [
    {
      name: 'fa fa-facebook',
      url: 'https://www.facebook.com/'
    },
    {
      name: 'fa fa-google-plus',
      url: 'https://plus.google.com/discover'
    },
    {
      name: 'fa fa-twitter',
      url: 'https://twitter.com/'
    },
    {
      name: 'fa fa-instagram',
      url: 'https://twitter.com/'
    }
  ]

  timer = [
    { className: 'day', amount: -861, timerCal: 'Days' },
    { className: 'hour', amount: -13, timerCal: 'Hrs' },
    { className: 'minute', amount: -2, timerCal: 'Min' },
    { className: 'second', amount: -8, timerCal: 'Sec' },
  ]
}
