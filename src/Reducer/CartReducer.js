import { ADD_TO_CART, DELETE_FROM_CART, GET_CART, INCREASE_QTY, DECREASE_QTY, UPDATE_QTY } from '../Actions/types'


const initialState = [];



const cartReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_TO_CART:
            return [...state, payload];

        case DELETE_FROM_CART:

            return state.filter(({ cart_id }) => cart_id !== payload.cart_id);

        case GET_CART:
            console.log(payload)
            return payload;

        case UPDATE_QTY:
            return state.map((item) => {
                if (item.cart_id === payload.cart_id) {
                    return {
                        ...item,
                        ...payload,
                    };
                } else {
                    return item;
                }
            });



        default:
            return state;
    }
}

export default cartReducer;