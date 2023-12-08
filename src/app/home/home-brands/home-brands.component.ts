import { Component } from '@angular/core';

@Component({
  selector: 'app-home-brands',
  templateUrl: './home-brands.component.html',
  styleUrls: ['./home-brands.component.scss']
})
export class HomeBrandsComponent {
  brandsItems = [
    {
      url : '../../../assets/images/brand1.png',
      alt : 'premium'
    },
    {
      url : '../../../assets/images/brand2.png',
      alt : 'premium'
    },
    {
      url : '../../../assets/images/brand3.png',
      alt : 'elegant'
    },
    {
      url : '../../../assets/images/brand4.png',
      alt : 'elegant'
    },
    {
      url : '../../../assets/images/brand5.png',
      alt : 'emerald'
    },
  ]
}
