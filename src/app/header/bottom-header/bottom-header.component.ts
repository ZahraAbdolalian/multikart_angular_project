import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-header',
  templateUrl: './bottom-header.component.html',
  styleUrls: ['./bottom-header.component.scss']
})

export class BottomHeaderComponent {


  homeItems = [
    {
      name: 'Clothing',
      subSubmenu: ['Fashion 01', 'Fashion 02', 'Fashion 03'],
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

  shopItems = [
    {
      name: 'Left Sidebar',
      link: '#',
    },
    {
      name: 'Right Sidebar',
      link: '#',
    },
    {
      name: 'No Sidebar',
      link: '#',
    },
    {
      name: 'Infinite Scroll',
      link: '#',
    },
  ];

  productsItem = [
    {
      name: 'Sidebar',
      subSubmenu: ['Left Sidebar', 'Right Sidebar', 'No sidebar'],
      link: '#',
    },
    {
      name: 'Three Olumn',
      link: '#',
    },
    {
      name: 'our Image',
      link: '#',
    },
    {
      name: 'Bundle Product',
      link: '#',
    },
    {
      name: 'Image Outside',
      link: '#',
    },
  ]

  pagesItem = [
    {
      name: 'Account',
      subSubmenu: ['Wishlist', 'Cart', 'Dashboard', 'Login', 'Register', 'Contact', 'Forget Password', 'Profile', 'Checkout'],
      link: '#',
    }, {
      name: 'About us',
      link: '#',
    }, {
      name: 'Search',
      link: '#',
    }, {
      name: 'Typography',
      link: '#',
      newTag: true
    }, {
      name: 'Review',
      link: '#',
      newTag: true
    }, {
      name: 'Order Success',
      link: '#',
    }, {
      name: 'Compare',
      subSubmenu: ['Compare 1', 'Compare 2'],
      link: '#',
    }, {
      name: 'Collection',
      link: '#',
    }, {
      name: 'Lookbook',
      link: '#',
    }, {
      name: '404',
      link: '#',
    }, {
      name: 'Coming Soon',
      link: '#',
      newTag: true
    }, {
      name: 'Faq',
      link: '#',
    },
  ]

  blogItems = [
    {
      name: 'Left Sidebar',
      link: '#',
    },
    {
      name: 'Right Sidebar',
      link: '#',
    },
    {
      name: 'No Sidebar',
      link: '#',
    },
    {
      name: 'Blog Details',
      link: '#',
    },
  ]

  settingItems = [
    {
      language: ['English', 'French'],
      currency: ['Euro', 'Rupees', 'Pound', 'Dollar']
    }
  ]

}
