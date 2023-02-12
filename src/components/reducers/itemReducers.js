import { ITEM_LIST_REQUEST, ITEM_LIST_SUCCESS, ITEM_LIST_FAILURE, SET_CURRENT_PAGE } from "../../constants/itemConstants";
import { ITEM_DETAIL_REQUEST,ITEM_DETAIL_SUCCESS, ITEM_DETAIL_FAIL } from "../../constants/itemConstants";



export const itemListReducer = (state = {products : [], loading : false, error : '', currentPage : 1, pageSize : 10 }, action) =>{
  switch(action.type){
    case ITEM_LIST_REQUEST:
      return {...state,loading : true, products : [] };
    case ITEM_LIST_SUCCESS:
      return {...state,loading : false, products : action.payload}
    case ITEM_LIST_FAILURE:
      return {...state,loading : false, error : action.payload}
    case SET_CURRENT_PAGE:
      return {...state,currentPage : action.payload}
    default:
      return state
  }
};

export const itemDetailReducer = (state={products : [], loading : false,error : ''},action)=>{
  switch(action.type){
    case ITEM_DETAIL_REQUEST:
      return {...state, loading : true};
    case ITEM_DETAIL_SUCCESS:
      return {...state, loading : false};
    case ITEM_DETAIL_FAIL:
      return {...state, loading : false, error : 'Detail Not Found!'}
    default:
      return state;
  }
}