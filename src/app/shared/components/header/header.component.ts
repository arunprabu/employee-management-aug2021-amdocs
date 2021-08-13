import { Component, OnInit } from '@angular/core';
import { CartDataService } from '../../services/cart-data.service';

@Component({
  selector: 'app-header', // element selector
  templateUrl: './header.component.html', // html
  styleUrls: ['./header.component.css'] // css
})
export class HeaderComponent implements OnInit {
  // ts

  cartItemsCount = 0;

  constructor( private cartDataService: CartDataService ) { }

  ngOnInit(): void {
    this.cartDataService.latestCartItemsList.subscribe( (cartItems) => {
      console.log(cartItems);
      this.cartItemsCount = cartItems.length;
    });
  }

}
