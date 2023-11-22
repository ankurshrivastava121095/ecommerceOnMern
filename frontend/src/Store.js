import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import { productDetailsReducer, productsReducer } from './reducers/ProductReducer';
import { categoriesReducer, categoryDetailsReducer } from './reducers/CategoryReducer';
import { userRegisterReducer } from './reducers/UserReducer';
import { cartReducer } from './reducers/CartReducer';
import { allOrdersReducer, myOrdersReducer, newOrderReducer, orderDetailsReducer, orderReducer } from './reducers/OrderReducer';


const reducer = combineReducers({
    p: productsReducer,
    pDetail: productDetailsReducer,
    c: categoriesReducer,
    cDetail: categoryDetailsReducer,
    auth: userRegisterReducer,
    cart: cartReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    allOrders: allOrdersReducer,
    order: orderReducer,
    orderDetail: orderDetailsReducer,
})

let initializeState = {
    cart: {
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
        // shippingInfo: localStorage.getItem("shippingInfo")
        //     ? JSON.parse(localStorage.getItem("shippingInfo"))
        //     : {},
    },
}

const Store = createStore(reducer,initializeState,composeWithDevTools(applyMiddleware(thunk)))

export default Store