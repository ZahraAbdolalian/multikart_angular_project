import { Component } from '@angular/core';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent {
  sliderItems = [
    { id: 1, subtitile: 'Every Time', title: 'Mittnalier', url: '../../../assets/images/home-slider-image1.jpg' },
    { id: 2, subtitile: 'Welcome To Fashion', title: 'Men Watch', url: '../../../assets/images/home-slider-image2.jpg' },
  ]

  subtitle = 'Every Time'
  title = 'Mittnalier'
  imagePath  = '../../../assets/images/home-slider-image1.jpg'

  sliderToggle = true

  sliderHandler(){
      if (this.sliderToggle){
        this.subtitle = 'Welcome To Fashion'
        this.title = 'Men Watch'
        this.imagePath  = '../../../assets/images/home-slider-image2.jpg'
        this.sliderToggle = false
      }else {
        this.subtitle = 'Every Time'
        this.title = 'Mittnalier'
        this.imagePath  = '../../../assets/images/home-slider-image1.jpg'
        this.sliderToggle = true
      }
  }
}
