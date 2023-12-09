import { Component } from '@angular/core';

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.scss']
})
export class HomeCategoryComponent {
  categoryItems = [
    {title : 'watch model' , imgUrl : '../../../assets/images/test1.png', 
    content : ['D1 milano', 'damaskeening', 'diving watch','dollar watch']},
    {title : 'watch model' , imgUrl : '../../../assets/images/test1.png', 
    content : ['D1 milano', 'damaskeening', 'diving watch','dollar watch']},
    {title : 'watch model' , imgUrl : '../../../assets/images/test1.png', 
    content : ['D1 milano', 'damaskeening', 'diving watch','dollar watch']},
    {title : 'watch model' , imgUrl : '../../../assets/images/test1.png', 
    content : ['D1 milano', 'damaskeening', 'diving watch','dollar watch']},
  ]
}
