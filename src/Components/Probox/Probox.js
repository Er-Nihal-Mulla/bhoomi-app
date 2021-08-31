import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, updateCart } from '../../Actions/index';
import { imageLink } from '../../Helper/ImageLink';

function Probox(props) {
    const [qty, setQty] = useState(1);
    const [isActive, setActive] = useState('cartform');
    const [addToCartBtnDisplay, setAddToCartBtnDisplay] = useState('block');
    const dispatch = useDispatch();
    // const [cartqty, setCartQty] = useState(0);

    useEffect(() => {
        if (props.cart !== null) {

            setActive("cartform active");
            setAddToCartBtnDisplay('none');
            // setCartQty(props.cart.cart_quantity);
            console.log("Whuuuuuu")
        }
       
    }, [])

    const qtyMinus = () => {
        var cartqty2 = props.cart.cart_quantity - 1;

        if (cartqty2 > 0) {
            // setCartQty(cartqty2);
            dispatch(updateCart(props.cart.cart_id, cartqty2))
        }
    }
    const qtyPlus = () => {
        var cartqty2 = props.cart.cart_quantity + 1;
        // setCartQty(cartqty2);
        dispatch(updateCart(props.cart.cart_id, cartqty2))

    }
    // Add to Cart Button Cliked
    const addToCartHandler = (e) => {
        if (props.cart === null) {
            const cart = {
                'cart_customer_id': 1,
                'cart_product_id': props.id,
                'cart_quantity': 1
            }
            dispatch(addToCart(cart));
            setActive("cartform active");
            setAddToCartBtnDisplay('none')
        }
    }
    let stylef = { display: 'block' };
    if (props.stockout === true && props.allproactive === true) {
        stylef = { display: 'block' };
    }
    else if (props.stockout === true && props.allproactive === false) {
        stylef = { display: 'none' };
    }
    return (

        <div className={props.stockout ? 'procol stockout' : 'procol'} style={stylef}>
            <div className="probox" id="probox1">
                <a className="proimg" href="#">
                    <img src={`${imageLink()}${props.image}`} alt=""></img>
                </a>
                <div className="procont">
                <Link to={`/details/${props.id}`}><h5 className="name">{props.name}</h5></Link>
                    <div className="addtocart">
                        <p className="price">Rs. {props.price} <span className="cut">/Kg</span></p>
                        <div className="plusminus">
                            <form className={isActive}>
                                <input type="button" className="qtyminus" field="quantity" onClick={qtyMinus}></input>
                                <input type="text" name="quantity" value={props.cart?props.cart.cart_quantity:0} className="qty" readOnly></input>
                                <input type="button" className="qtyplus" field="quantity" onClick={qtyPlus}></input>
                            </form>
                        </div>
                        <div className="addcol">
                            <button className="addbtn" id="addbtn" style={{ display: addToCartBtnDisplay }} onClick={addToCartHandler}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Probox
