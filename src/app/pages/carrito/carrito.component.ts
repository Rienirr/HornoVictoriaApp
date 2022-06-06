import { Component, OnInit } from '@angular/core';
import { ProductInCart } from 'src/app/shared/interfaces/product.interface';
import { CartService } from '../../services/cart-service.service';
import { Product } from '../../shared/interfaces/product.interface';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {
  public products: ProductInCart[] =[];
  public totalPrice: number ;
  constructor(private cartService: CartService) { 
    this.products= this.cartService.productsInCart;
    this.totalPrice= this.cartService.totalPrice;
  }
  
 TotalPriceItem(price: number, quantity:number): number{
 
   return Math.round(( (price *quantity) + Number.EPSILON) * 100) / 100;
 }
 addProduct(product: Product, quantity:number =1){
   this.cartService.addProductToCart(product,quantity);
 }
 removeProduct(index: number,quantity: number): void{
this.cartService.removeItem(index,quantity);
 }
 

}
