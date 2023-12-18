import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Post } from 'src/app/model/post.model';
import { CartProduct } from 'src/app/model/cart-product.model';
import { ApiService } from 'src/app/service/api.service';
import { UserCartService } from 'src/app/service/user-cart.service';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.scss']
})
export class ProductInformationComponent implements OnInit {

  @Output() productName = new EventEmitter<string>();
  @Output() productCategory = new EventEmitter<string>();

  mediaIcons = [
    {
      name: 'fa fa-facebook',
      url: 'https://www.facebook.com/'
    },
    {
      name: 'fa fa-google-plus',
      url: 'https://plus.google.com/discover'
    },
    {
      name: 'fa fa-twitter',
      url: 'https://twitter.com/'
    },
    {
      name: 'fa fa-instagram',
      url: 'https://twitter.com/'
    }
  ]

  timer = [
    { className: 'day', amount: -861, timerCal: 'Days' },
    { className: 'hour', amount: -13, timerCal: 'Hrs' },
    { className: 'minute', amount: -2, timerCal: 'Min' },
    { className: 'second', amount: -8, timerCal: 'Sec' },
  ]

  product !: Post
  isLoading = true
  stock = 'In Stock'
  productId = 0
  priceBeforeDiscount = 0

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private userCart: UserCartService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {

        this.productId = params['id']
        this.isLoading = true

        this.apiService.getProductsWithId(this.productId)
          .subscribe(data => {
            this.product = data
            this.productName.emit(this.product.title)
            this.productCategory.emit(this.product.category)
            this.priceBeforeDiscount = (this.product.price * 100) / 40
            this.isLoading = false
          })
      }
    )
  }

  reduceQuantity(quantityElem: HTMLInputElement) {
    let quantity = +quantityElem.value
    if (quantity > 1) {
      quantity--
      if (quantity <= 15) {
        this.stock = 'In Stock'
      }
    }
    quantityElem.value = quantity.toString()
  }

  increaseQuantity(quantityElem: HTMLInputElement) {
    let quantity = +quantityElem.value
    quantity++
    if (quantity < 15) {
      this.stock = 'In Stock'
    } else {
      this.stock = 'Out of Stock'
    }
    quantityElem.value = quantity.toString()
  }

  addToCart(product: Post , quantity: HTMLInputElement) {
    const newProduct : CartProduct= {
      name: product.title,
      id: product.id,
      image : product.image,
      price : product.price,
      quantity : +quantity.value,
      total : (product.price * +quantity.value)
    }
    this.userCart.addProduct(newProduct)
    console.log(this.userCart.cartProducts);

  }
}
