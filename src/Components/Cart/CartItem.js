import React from 'react'

import {useDispatch} from 'react-redux'
import {updateCart, deleteFromCart} from '../../Actions/index'
import { imageLink } from '../../Helper/ImageLink';

function CartItem(props) {
    const dispatch = useDispatch();
    const item = props.item;
    const product = props.product
    const incqtyhandler = ()=>{
        var cartqty = item.cart_quantity + 1 ;

        dispatch(updateCart(item.cart_id, cartqty))
    }
    const decqtyhandler = ()=>{
        
        var cartqty = item.cart_quantity - 1 ;
        
        if(cartqty>0){
        dispatch(updateCart(item.cart_id, cartqty))
        }
    }
    return (
        <li>
            <span class="cartpro">
                <span class="cartimg">
                    <a href="#">
                        <img src={`${imageLink()}${product.product_image_main}`} alt="" />
                    </a>
                </span>
                <span class="cartdet">
                    <span class="remove" title="Remove" onClick={()=>{dispatch(deleteFromCart(item.cart_id))}}><span class="fa fa-trash-alt"></span></span>
                    <a href="#" class="name">{product.product_name_english}</a>
                    <form class="cartform">
                        <input type="button" class="qtyminus" field="quantity" onClick={decqtyhandler} />
                        <input type="text" name="quantity" value={item.cart_quantity} class="qty" />
                        <input type="button" class="qtyplus" field="quantity" onClick={incqtyhandler} />
                    </form>
                    <span class="price">Rs. {product.product_cost}</span>
                </span>
            </span>
        </li>
    )
}

export default CartItem
