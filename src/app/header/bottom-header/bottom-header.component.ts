import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-header',
  templateUrl: './bottom-header.component.html',
  styleUrls: ['./bottom-header.component.scss']
})
export class BottomHeaderComponent {
[x: string]: any;
  headerItems = ['home','shop','products','features','pages','blogs']
  home = ['Clothing','Vegetable','Watch','Furniture','Flower','Beauty','Electronics','Pets',
    'Gym','Tools','Shoes','Bags','Marijuana']

  // headerItems1 = {
  //   'home': ['Clothing','Vegetable','Watch','Furniture','Flower','Beauty','Electronics','Pets',
  //   'Gym','Tools','Shoes','Bags','Marijuana'],
  // } 

  itemValue : string = ''

  items = [
    {
      name: 'Clothing',
      link: '#',
    },
    {
      name: 'Vegetable',
      link: '#',
    },
    {
      name: 'Watch',
      link: '#',
    },
    {
      name: 'Furniture',
      link: '#',
    },
    {
      name: 'Flower',
      link: '#',
    },
    {
      name: 'Beauty',
      link: '#',
    },
    {
      name: 'Electronics',
      link: '#',
    },
    {
      name: 'Pets',
      link: '#',
    },
    {
      name: 'Gym',
      link: '#',
    },
    {
      name: 'Tools',
      link: '#',
    },
    {
      name: 'Shoes',
      link: '#',
    },
    {
      name: 'Bags',
      link: '#',
    },
    {
      name: 'Marijuana',
      link: '#',
    },
  ];

  headerContent = 'Products';
}
