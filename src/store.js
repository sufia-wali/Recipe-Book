import {combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { createStore } from "redux";
import { itemListReducer,itemDetailReducer,addToWishlistReducer } from "./components/reducers/itemReducers";


const reducer = combineReducers({
  productList : itemListReducer,
  productDetail : itemDetailReducer,
  wishList : addToWishlistReducer
})

// const wishlistFromStorage = localStorage.getItem('bookmarkItem')
  // ? JSON.parse(localStorage.getItem('bookmarkItem'))
  // : [];


const initialState = {
  bookmarkItems : []
}

const middleWare = [thunk]


const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);


export default store;
