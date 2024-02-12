import { CartItem } from "./cartItem";

export interface Cart {
    items:CartItem[]
    totalPrice:number
    totalCount:number
}
