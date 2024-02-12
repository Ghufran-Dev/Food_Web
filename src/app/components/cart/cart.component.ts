import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart!:Cart
  constructor(private cart_service:CartService){
    this.cart_service.getCartObservable().subscribe((cart)=>{
      this.cart = cart
    })
  }
  ngOnInit(): void {
    
  }
  removeFromCart(cartItem:CartItem){
    this.cart_service.removeCart(cartItem['food'].id)
  }
  changeQuantity(cartItem:CartItem, quantity:string){
    const quanity = parseInt(quantity)
    this.cart_service.changeQuantity(cartItem['food'].id, quanity)
  }
}
