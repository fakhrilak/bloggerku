import {
    GET_CATEGORY_SUCCESS,
    POST_CATEGORY_SUCCESS,
    GET_CATEGORY_FAIL,
    POST_CATEGORY_FAIL
} from '../action/types';

const initialState = {
    Allcategory: [],
    loading: true,
    error:null,
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_CATEGORY_SUCCESS:
        return {
          ...state,
          Allcategory: payload,
          loading: false,
          error: null,
        };
      case GET_CATEGORY_FAIL:
          return{
            ...state,
            Allcategory: [],
            loading: false,
            error: payload,
          }
      case POST_CATEGORY_SUCCESS:
      case POST_CATEGORY_FAIL:
      default:
        return state;
    }
  }