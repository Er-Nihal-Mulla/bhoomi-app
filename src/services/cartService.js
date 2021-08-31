import http from "../http-common";

class CartDataService{
    getCart(customer_id){
        return http.get(`/cart/${customer_id}`);
    }
    addToCart(cart){
        return http.post('/cart',cart);
    }
    updateQty(cart_id,cart_quantity){
        console.log(cart_id+""+cart_quantity)
       return http.put(`/cart/update/${cart_id}`,{cart_quantity});

    }
    deleteCartItem(cart_id){
       return http.delete(`/cart/delete/${cart_id}`);
    }
} 

export default new CartDataService();