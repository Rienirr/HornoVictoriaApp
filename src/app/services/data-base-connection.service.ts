import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { Product } from '../shared/interfaces/product.interface';
import { AngularFirestore} from "@angular/fire/compat/firestore";
@Injectable({
  providedIn: 'root'
})
export class DataBaseConnectionService {
  public headers= new HttpHeaders()
 
  constructor(private http: HttpClient,
    private db: AngularFirestore) { 
   
  }
  getAllProducts(){

    return  of([
      {
          "id": 1,
          "image": "../../../assets/img/pan.jpeg",
          "name": "pan",
          "category": "pan",
          "description": "pan normal",
          "price": 1,
          "allergens": "Gluten"
      },
      {
          "id": 2,
          "image": "../../../assets/img/empanadilla.jpeg",
          "name": "empanadilla",
          "category": "tortas",
          "description": "empanadilla de fritada",
          "price": 2,
          "allergens": "Gluten"
      },
      {
          "id": 3,
          "image": "../../../assets/img/cola.jpeg",
          "name": "cola",
          "category": "refrescos",
          "description": "cola",
          "price": 1.2,
          "allergens": 'null'
      },
      {
        "id": 4,
        "image": "../../../assets/img/empanadilla.jpeg",
        "name": "tortas",
        "category": "tortas",
        "description": "empanadilla de fritada",
        "price": 2,
        "allergens": "Gluten"
    }, {
      "id": 5,
      "image": "../../../assets/img/empanadilla.jpeg",
      "name": "Pizza",
      "category": "tortas",
      "description": "empanadilla de fritada",
      "price": 2,
      "allergens": "Gluten"
  },
   ]);
  /*   return this.http.get<Product[]>('https://hornovictoria.com/public/products'); */
/*     return this.http.get<Product[]>('https://backendproyectovicen.herokuapp.com/public/products'); */
   
  }
} 

