import { GET_ALL_PRODUCTS } from "../Actions/types";

const initialState = [

];

const productReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_ALL_PRODUCTS:
            return payload;
        default:
            return state;
    }
}

export default productReducer;