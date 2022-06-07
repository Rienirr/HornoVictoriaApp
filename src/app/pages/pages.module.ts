import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ContactoComponent } from './contacto/contacto.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    ContactoComponent,
    CategoriasComponent,
    HomeComponent,
    ProductosComponent,
    CarritoComponent,
    BusquedaComponent,
    LoginComponent,
    RegistroComponent,
   
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PagesModule { }
