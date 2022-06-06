import { Injectable } from '@angular/core';
import { ProductInCart, Product } from '../shared/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public totalPrice: number =0;
   public productsInCart: ProductInCart[] =[];
    private _totalItems:number = 0;
  constructor() { }
  
  public get totalItems(): number{
    return this._totalItems
  }

  addProductToCart(productAdded: Product, quantityAdded: number): void{
    let isinCart: Boolean = false
  this.productsInCart.map( (v,i, a) => {
    if(v.product.id === productAdded.id){
     v.quantity+= quantityAdded;
     isinCart =true;
     this._totalItems+=quantityAdded;
     if(v.quantity !==0){
      
      this.addFinalPrice(v.product.price,quantityAdded);
     }
     else{
       
        this.productsInCart.splice(i,1);
     }
     
    }
    
  })
  if(!isinCart){
    this.productsInCart.push({product: productAdded, quantity: quantityAdded});
    this.addFinalPrice(productAdded.price,quantityAdded);
    this._totalItems+=quantityAdded;
  }
     
   }
   addFinalPrice(price:number, quantityAdded: number ){
     this.totalPrice+= price*quantityAdded; 
   }
   removeItem(index:number, quantity:number):void{
     this._totalItems-=quantity;
    this.productsInCart.splice(index,1);
   }
}
