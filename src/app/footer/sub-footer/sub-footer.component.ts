import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-footer',
  templateUrl: './sub-footer.component.html',
  styleUrls: ['./sub-footer.component.scss']
})
export class SubFooterComponent {
  paymentCards = [
    {name : 'visa' , imgUrl : '../../../assets/images/visa.png'},
    {name : 'mastercard' ,imgUrl : '../../../assets/images/mastercard.png'},
    {name : 'paypal' ,imgUrl : '../../../assets/images/paypal.png'},
    {name : 'american-express' ,imgUrl : '../../../assets/images/american-express.png'},
    {name : 'discover' ,imgUrl : '../../../assets/images/discover.png'},
  ]
}
