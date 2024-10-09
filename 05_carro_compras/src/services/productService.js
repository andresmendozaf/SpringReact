import { products } from "../data/products"

export const getProducts = () => {
    
    return products;
    
}

export const calculateTotal = (item) => {
    return item.reduce(
        (accumulator, item) => accumulator + item.product.price * item.quantity, 
        0);
    }
