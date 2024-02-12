import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../models/food';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart!:Cart
private cartItems!:CartItem
private cartSubject:BehaviorSubject<Cart> = new BehaviorSubject(this.cart)
  constructor() { }
  //add to cart method
  addToCart(food:Food):void{
    let cartItem = this.cart.items.find(item =>  item['food'].id ===  food.id)
    if (cartItem) return
    this.cart.items.push(this.cartItems['food'])
  }
  removeCart(foodId:string){
    this.cart.items = this.cart.items.filter(items => items['food'].id != foodId)
  }
  //change quantity
  changeQuantity(foodId:string, quantity:number){
    let cartItem = this.cart.items.find(item => item['food'].id === foodId)
    if (!cartItem) return

    cartItem.quantity = quantity
    cartItem.price = quantity * cartItem['food'].price
  }
  //clear cart
  clearCart(){
    this.cart = this.cart
  }
  // get Cart Obserable mean check obserable data
   getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable()
   }
}
