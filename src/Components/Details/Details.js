import $ from 'jquery';
import React, { useEffect, useState } from 'react'

import ReadMore from './ReadMore'
import TopSellers from './TopSellers/TopSellers'

// Redux Imports
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addToCart, getCart, getOneProduct, updateCart } from '../../Actions/index'

// Swiper Imports
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { imageLink } from '../../Helper/ImageLink';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


function Details({ match }) {


  const id = match.params.id;
  let detailProduct = useSelector((state) => state.detailProductReducer);
  let allcart = useSelector((state) => state.cartReducer);
  let [cart, setCart] = useState({});
  let [isAddToCart, setIsAddToCart] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProduct(id));
    dispatch(getCart(1));

  }, [id]);

  useEffect(() => {
    if (detailProduct.product) {
      allcart.map((item) => {
        if (detailProduct.product.product_id === item.cart_product_id) {
          setCart(item)
          setIsAddToCart(true)
        }else{
          setCart({})
          setIsAddToCart(false)
        }
      })
    }
  }, [detailProduct, allcart])


  const qtyMinus = () => {
    if (cart.cart_id) {
      var cartqty2 = cart.cart_quantity - 1;

      if (cartqty2 > 0) {
        // setCartQty(cartqty2);
        dispatch(updateCart(cart.cart_id, cartqty2))
      }
    }
  }
  const qtyPlus = () => {
    if (cart.cart_id) {
      var cartqty2 = cart.cart_quantity + 1;
      // setCartQty(cartqty2);
      dispatch(updateCart(cart.cart_id, cartqty2))
    }
  }
  // Add to Cart Button Cliked
  const addToCartHandler = (e) => {
    console.log(cart)
    if (cart.cart_id == null) {
      const cart = {
        'cart_customer_id': 1,
        'cart_product_id': detailProduct.product.product_id,
        'cart_quantity': 1
      }
      dispatch(addToCart(cart));
      setIsAddToCart(true);
    }
  }




  return (
    <div className="detailpage">
      {Object.keys(detailProduct).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div class="details">
          <div class="container-fluid cmpad">
            <div class="row">
              <div class="prozoom">
                <Swiper
                  spaceBetween={10}
                  allowTouchMove={false}
                  effect='fade'
                  observer={true}
                  observeParents={true}
                  className="product-original"
                >
                  <SwiperSlide>
                    <span class="zoom" id="pro3">
                      <img src={`${imageLink()}${detailProduct.product.product_image_main}`} alt />
                    </span>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div class="prodetail">
                <div class="detinfo">
                  <h1 class="name">{detailProduct.product.product_name_english}</h1>
                  <div class="price">
                    <h2 class="amount">Rs. {detailProduct.product.product_cost}</h2>
                    <p class="cut">/Kg</p>
                  </div>
                  <div class="detbutton">
                    <div className="plusminus">
                      <form className="cartform">
                        <input type="button" onClick={qtyMinus} className="qtyminus" field="quantity" ></input>
                        <input type="text" name="quantity" value={cart.cart_quantity ? cart.cart_quantity : 1} className="qty" readOnly></input>
                        <input type="button" onClick={qtyPlus} className="qtyplus" field="quantity"></input>
                      </form>
                    </div>
                    <button onClick={addToCartHandler} class={isAddToCart ? 'addcart selected' : 'addcart'}><img src="../img/icons/tick.svg" alt="" /> <span>Add to Cart</span></button>
                  </div>
                  <h4 class="dchead">Description</h4>

                  <p class="description toggle-text">
                    <ReadMore>
                      {detailProduct.product.product_description ? detailProduct.product.product_description : " "}
                    </ReadMore>
                  </p>
                  <span class="farmer">Farmer Name: <span>{detailProduct.farmer ? detailProduct.farmer.farmer_name : "Unknown"}</span></span>
                </div>
              </div>
            </div>
            <TopSellers />
          </div>
        </div>
      )}
    </div>

  )
}

export default Details
