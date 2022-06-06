import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { BusquedaComponent } from './busqueda/busqueda.component';


const routes: Routes = [
  
   
      {path: 'home',component: HomeComponent},
      {path: 'contacto',component: ContactoComponent},
      {path: 'categorias',component: CategoriasComponent},
      {path: 'productos/:categoria',component: ProductosComponent},
      { path: 'busqueda/:termino', component: BusquedaComponent},
      {path: 'carrito',component: CarritoComponent},
      {path: '**', redirectTo:'home'},

    
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
