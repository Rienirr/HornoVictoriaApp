import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart-service.service';
import { DataBaseConnectionService } from 'src/app/services/data-base-connection.service';
import { LoginService } from 'src/app/services/login.service';
import { Product } from 'src/app/shared/interfaces/product.interface';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent {

  public readonly params$: Observable<Params>;
 
 public logged : boolean
  public readonly products$: Observable<Product[]>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private loginService:LoginService,
    private cartSerivce: CartService,
    private dataBaseConnection: DataBaseConnectionService
  ) {
 
   this.products$ = this.dataBaseConnection.getAllProducts();
    this.logged = this.loginService.get();
    this.params$ = this.activatedRoute.params;
  }

  
  public anyadirAlCarrito(product: Product, index: number){
   let cantidad = document.getElementById(`producto${index}`) as HTMLInputElement;
if(Number(cantidad.value) >0){
  this.cartSerivce.addProductToCart(product,  Number(cantidad.value));

}
cantidad.value="0";

  }
 
   include(termino: string, producto: string): boolean{
   return producto.includes(termino);
   }
}
