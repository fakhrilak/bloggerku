import {GET_USER_SUCCESS,
    GET_USER_FAIL,
    DELET_USER_SUCCESS,
    DELET_USER_FAIL} from '../action/types';

    const initialState = {
        Alluser: [],
        loading: true,
        error:null,
        deleteduser:null
    };

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_USER_SUCCESS:
            return{
                ...state,
                Alluser:payload,
                error:null,
                loading:false
            }
        case GET_USER_FAIL:
            return{
                ...state,
                Alluser:[],
                error:payload,
                loading:false
            }
        case DELET_USER_SUCCESS:
            return{
                ...state,
                deleteduser:payload,
                error:null,
                loading:false,
            }
        case DELET_USER_FAIL:
            return{
                ...state,
                error:payload,
                deleteduser:null,
                loading:false
            }
        default:
        return state;
    }
}