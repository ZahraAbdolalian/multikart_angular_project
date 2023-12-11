import { Component } from '@angular/core';

@Component({
  selector: 'app-home-recent-story',
  templateUrl: './home-recent-story.component.html',
  styleUrls: ['./home-recent-story.component.scss']
})
export class HomeRecentStoryComponent {

  stories = [
    {imgUrl : '../../../assets/images/recent-story1.jpg', date : '25 January 2018'},
    {imgUrl : '../../../assets/images/recent-story2.jpg', date : '26 January 2018'},
    {imgUrl : '../../../assets/images/recent-story3.jpg', date : '27 January 2018'},
  ]
}
