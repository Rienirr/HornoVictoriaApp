export interface Product {
    id:  number;
    image:       string;
    name:        string;
    category:    string;
    description: string;
    price:       number;
    allergens:   string;
    
}
export interface ProductInCart {
    product:  Product;
    quantity: number;
 
}
