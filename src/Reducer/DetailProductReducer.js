import {GET_ONE_PRODUCT } from "../Actions/types";

const initialState = { };

const detailProductReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        
        case GET_ONE_PRODUCT:
            return payload;

        default:
            return state;
    }
}

export default detailProductReducer;