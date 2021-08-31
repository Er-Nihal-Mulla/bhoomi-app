import React, { useEffect } from 'react'
import CartCheckout from './CartCheckout'
import CartHead from './CartHead'
import CartItemList from './CartItemList'
import { getCart } from '../../Actions'

import { useDispatch } from 'react-redux';

function Cart(props) {

    const dispatch = useDispatch();
    useEffect(()=>{
       
    dispatch(getCart(1));
    
    },[]);
    return (
        <div class={props.iscartvisible ? "quickcart show" : "quickcart"}>
            <CartHead cartviewhandler={props.cartviewhandler}></CartHead>
            <div class="cartcont">
                <CartItemList></CartItemList>
                <CartCheckout></CartCheckout>
            </div>
        </div>
    )
}

export default Cart
