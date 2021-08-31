import React from 'react'

function CartHead(props) {
    return (
        <div class="carthead">
            <h3>Cart</h3>
            <button class="closebtn" title="Close" onClick={props.cartviewhandler}><i class="fa fa-times"></i></button>
        </div>
    )
}

export default CartHead
