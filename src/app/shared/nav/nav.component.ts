import { AfterContentChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from '../../services/cart-service.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements AfterContentChecked {
 logeado: boolean ;
 elementosCarrito: number;
  constructor(private cartService: CartService,
    private loginService: LoginService,
     ) { 
      this.elementosCarrito = this.cartService.totalItems;
      this.logeado= this.loginService.get();
  }
  ngAfterContentChecked(): void {
     this.logeado= this.loginService.get();
     this.elementosCarrito = this.cartService.totalItems;
  }
 
  

  public LoginTrue(){
    this.loginService.set();
    console.log("Cambio login");
  }
}
