import { Product } from './product.interface';
export interface Cart {
    products: Product[],
    itemsAdd: number,
    totalPrice: number,
}

