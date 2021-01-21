import {
    GET_SUBCATEGORY_SUCCESS,
    GET_CONTENT_SUCCESS,
    GET_SUBCATEGORY_FAIL,
    GET_CONTENT_FAIL,
    POST_SUBCATEGORY_FAIL,
    POST_SUBCATEGORY_SUCCESS,
    POST_CONTENT_FAIL,
    POST_CONTENT_SUCCESS,
    DELETE_CONTENT_SUCCESS,
    DELETE_CONTENT_FAIL
} from '../action/types';

const initialState = {
    Allcontent: [],
    subcategory: [],
    loading: true,
    error:null,
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_CONTENT_SUCCESS:
        return {
          ...state,
          Allcontent: payload,
          loading: false,
          error: null,
        };
      case GET_CONTENT_FAIL:
          return{
            ...state,
            Allcontent: [],
            loading: false,
            error: payload,
          }
      case GET_SUBCATEGORY_SUCCESS:
        return{
          ...state,
          subcategory:payload,
          loading:false,
          error:null
        }
      case POST_SUBCATEGORY_SUCCESS:
      case POST_SUBCATEGORY_FAIL:
      case POST_CONTENT_SUCCESS:
      case POST_CONTENT_FAIL:
      case DELETE_CONTENT_FAIL:
      case DELETE_CONTENT_SUCCESS:
      default:
        return state;
    }
  }