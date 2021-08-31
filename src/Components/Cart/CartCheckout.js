import React from 'react'
import {useSelector} from 'react-redux';
import { getBillAmount,getGSTAmount,getTotalAmount} from "../../Helper/CartCheckoutHelper";

function CartCheckout(props) {
    // const billamount = useSelector((state) => state.cartReducer.billamount);
    // const gst = useSelector((state) => state.cartReducer.gst);
    // const deliverycharges = useSelector((state) => state.cartReducer.deliverycharges);
    // const totalamount = useSelector((state) => state.cartReducer.totalamount);

    // Redux
const cart = useSelector((state) => state.cartReducer);
const products = useSelector((state) => state.productReducer);


    return (
        <div class="cartchekout">

            <div class="summary">
                <h5>Checkout Summary</h5>
                <span class="amrow">Bill Amount <span class="amount">Rs. {getBillAmount(cart,products)}</span></span>
                <span class="amrow">GST(18%) <span class="amount">Rs. {getGSTAmount(cart,products)}</span></span>
                <span class="amrow">Delivery Charges <span class="amount">Free</span></span>
                <span class="amrow total">Total Order Amount <span class="amount">Rs. {getTotalAmount(cart,products)}</span></span>
                <button class="checkout">Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default CartCheckout
