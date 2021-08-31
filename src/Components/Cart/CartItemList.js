import React from 'react'
import CartItem from './CartItem'

// Redux Import
import { useSelector } from 'react-redux';

function CartItemList(props) {

    const cart = useSelector((state) => state.cartReducer)
    const products = useSelector((state) =>state.productReducer);
    return (
        <div class="cartitems custscrollA">
            <ul class="cartlist">
                {cart.map((item) => {
                        
                         return products.map((product)=>{
                            if(product.product_id === item.cart_product_id){
                                 return <CartItem item = { item } product = {product} ></CartItem>
                            }
                            
                        })
                }
                )}
            </ul>
        </div >
    )
}

export default CartItemList
