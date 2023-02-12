import axios from "axios";
import { ITEM_LIST_SUCCESS,ITEM_LIST_REQUEST,ITEM_LIST_FAILURE, SET_CURRENT_PAGE } from "../../constants/itemConstants";
import { ITEM_DETAIL_REQUEST,ITEM_DETAIL_SUCCESS,ITEM_DETAIL_FAIL } from "../../constants/itemConstants";
import { ADD_TO_CART,REMOVE_FROM_CART } from "../../constants/itemConstants";


export const listItem = (text) =>async (dispatch) =>{
  try{
    dispatch({type:ITEM_LIST_REQUEST});
    const response = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${text}`)
    const clearResponse = response['data']['data']['recipes'];
    dispatch({type : ITEM_LIST_SUCCESS, payload : clearResponse });
  } catch (error){
    dispatch({ type : ITEM_LIST_FAILURE, payload : 'Something Went Wrong.'})
  }
};




export const listDetail = (id) => async (dispatch) => {
  try{
    dispatch({type : ITEM_DETAIL_REQUEST});
    const response = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
    const detailData = response['data']['data']['recipe']
    dispatch({type : ITEM_DETAIL_SUCCESS, payload : detailData})
  }catch(error){
    dispatch({type : ITEM_DETAIL_FAIL, payload : 'Something went wrong!'})
  }
}


// export const updateIngredient = (val) => async (dispatch,getState) =>{
//   try{
//     console.log(getState());
//     dispatch({type : 'UPDATE_ING', payload : val })
//   }catch(error){
//     dispatch({type : 'UPDATE_ERR', payload : 'Not updated'})

//   }
// }



export const setCurrentPage = (page) => async (dispatch) =>{
  try{
    dispatch({type : SET_CURRENT_PAGE,payload : page})
  } catch(error){
    dispatch({type : 'ERROR_PAGE'})
  }
};


export const addToWishlist = (data) => async (dispatch,getState) => {
  try{
    console.log(getState());
    dispatch({type : 'ADD_WHISHLIST', payload : data})
    localStorage.setItem('bookmarkItems', JSON.stringify(getState().wishList.cartItems))
  } catch(error){
    dispatch({type : 'ERROR_ID'})
  }
}

export const removeFromWishlist = (id) => async (dispatch,getState) => {
  try{
    console.log(getState());
    dispatch({type : REMOVE_FROM_CART, payload : id})
    localStorage.setItem('bookmarkItems', JSON.stringify(getState().wishList.cartItems))
  } catch(error){
    dispatch({type : 'ERROR_ID'})
  }
}

// export const updateQuantity