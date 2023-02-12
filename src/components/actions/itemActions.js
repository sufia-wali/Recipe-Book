import axios from "axios";
import { ITEM_LIST_SUCCESS,ITEM_LIST_REQUEST,ITEM_LIST_FAILURE, SET_CURRENT_PAGE } from "../../constants/itemConstants";
import { ITEM_DETAIL_REQUEST,ITEM_DETAIL_SUCCESS,ITEM_DETAIL_FAIL } from "../../constants/itemConstants";

export const listItem = (text) =>async (dispatch) =>{
  try{
    dispatch({type:ITEM_LIST_REQUEST});
    const response = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${text}`)
    console.log(response)
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
    const detailData = response['data']['recipe']
    console.log(detailData);
    dispatch({type : ITEM_DETAIL_SUCCESS, payload : detailData})
  }catch(error){
    dispatch({type : ITEM_DETAIL_FAIL, payload : 'Something went wrong!'})
  }
}


export const setCurrentPage = (page) => async (dispatch) =>{
  try{
    dispatch({type : SET_CURRENT_PAGE,payload : page})
  } catch(error){
    dispatch({type : 'ERROR_PAGE'})
  }
};
