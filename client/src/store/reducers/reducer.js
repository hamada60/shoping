import { combineReducers } from "redux";
import { productsReducer } from './productsReducer';
import { cartReducer } from './cartReducer';
import { orderReducer } from "./orderReducer";

export default combineReducers({
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer
})


// export default reducer;