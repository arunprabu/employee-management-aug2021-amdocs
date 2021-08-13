import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  // default cart items
  // you should load this from you rest api.
  // but now mocking it with static data
  private defaultCartItems: any[] = [
    {
      id: 2,
      name: 'Cheese',
      category: 'Dairy',
      price: '$6.38'
    }
  ];

  // in order to make the above data subscribable,
  // create an Observable with the default items

  // 1. Create BehaviourSubject with default item
  private cartItemsList = new BehaviorSubject(this.defaultCartItems);

  // 2. Making it as Observable so that other comp can subscribe to it.
  latestCartItemsList: Observable<any[]> = this.cartItemsList.asObservable();
  // latestCartItemsList is subscribable

  constructor() { }

  updateCart(product: any): void{
    console.log(product);

    this.latestCartItemsList.pipe( take(1)).subscribe( (value) => {
      console.log(value);
      console.log(...value); // spread operator
      const newCartItemArr = [ ...value, product];
      console.log(newCartItemArr);
      this.cartItemsList.next(newCartItemArr);
    });
  }

}
