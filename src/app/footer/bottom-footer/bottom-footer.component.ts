import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-footer',
  templateUrl: './bottom-footer.component.html',
  styleUrls: ['./bottom-footer.component.scss']
})
export class BottomFooterComponent {
  iconsList = ['fa-facebook', 'fa-google-plus', 'fa-twitter', 'fa-instagram', 'fa-rss']

  categoriesList = ['Electronics', 'Jewelery', "Men's clothing", "Women's clothing"]
  chooseList = ['shipping & return', 'secure shopping', 'gallary', 'affiliates', 'contacts']
  informationsList = [
    { text: 'Multikart Demo Store, Demo Store India 345-659', icon: 'fa-map-marker' },
    { text: 'Call Us: 123-456-7898', icon: 'fa-phone' },
    { text: 'Email Us: Support@Fiot.Com', icon: 'fa-envelope-o' },
    { text: 'Fax: 123456', icon: 'fa-fax' }
  ]
}
