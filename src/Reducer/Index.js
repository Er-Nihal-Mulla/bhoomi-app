import cartReducer from "./CartReducer";
import { combineReducers } from "redux";
import productReducer from './ProductsReducer';
import communityReducer from "./CommunityReducer";
import detailProductReducer from "./DetailProductReducer";
const rootReducer = combineReducers({
    cartReducer, productReducer, communityReducer, detailProductReducer
});

export default rootReducer;