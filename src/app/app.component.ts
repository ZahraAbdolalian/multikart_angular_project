import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'multikart_angular_project';

  collection = ['Electronics', 'Jewelery', "Men's clothing", "Women's clothing"]
}
