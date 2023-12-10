import { Component } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent {
  bannerItems = [
    { imgUrl: '../../../assets/images/banner1.jpg', subtitle: 'minimum 10% off', title: 'new watch' },
    { imgUrl: '../../../assets/images/banner2.jpg' },
    { imgUrl: '../../../assets/images/banner3.jpg', subtitle: 'minimum 10% off', title: 'gold watch' }
  ]
}
