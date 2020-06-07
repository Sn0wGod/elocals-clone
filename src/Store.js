  
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer, sellerListReducer } from './Reducers/Reducer';


const initialState = {}

const reducer = combineReducers({
    Product_Detail :   productListReducer,
    Seller_Detail : sellerListReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;