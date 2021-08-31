import { ADD_TO_CART, DELETE_FROM_CART, GET_CART, INCREASE_QTY, DECREASE_QTY, UPDATE_QTY } from './types'
import { GET_ONE_PRODUCT, GET_ALL_PRODUCTS } from './types'
import { GET_COMMUNITY } from './types';

import ProductDataService from "../services/productsService";
import CartDataService from "../services/cartService";
import communityService from '../services/communityService';
// Cart Actions
export const addToCart = (cart) => async (dispatch) => {
    try {
        const res = await CartDataService.addToCart(cart);

        dispatch({
            type: ADD_TO_CART,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }

};

export const deleteFromCart = (cart_id) => async (dispatch) => {
    try {
        await CartDataService.deleteCartItem(cart_id);

        dispatch({
            type: DELETE_FROM_CART,
            payload: { cart_id },
        });
    } catch (err) {
        console.log(err);
    }
};

export const getCart = (customer_id) => async (dispatch) => {
    try {
        const res = await CartDataService.getCart(customer_id);
        console.log(res);
        dispatch({
            type: GET_CART,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}
export const updateCart = (cart_id, cart_quantity) => async (dispatch) => {
    try {
        const res = await CartDataService.updateQty(cart_id, cart_quantity);
        dispatch({
            type: UPDATE_QTY,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}



// Product Actions
export const getAllProducts = () => async (dispatch) => {
    try {
        const res = await ProductDataService.getAllProducts();
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}
// DetailProduct Actions
export const getOneProduct = (id) => async (dispatch) => {
    try {
        const res = await ProductDataService.getOneProduct(id);
        dispatch({
            type: GET_ONE_PRODUCT,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}

// Community Actions

export const getAllCommunity = () => async (dispatch) => {
    try {
        const res = await communityService.getAllCommunity();
        dispatch({
            type: GET_COMMUNITY,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}
