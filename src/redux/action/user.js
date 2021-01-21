import { API } from '../../config/api';
import {GET_USER_SUCCESS,GET_USER_FAIL,DELET_USER_SUCCESS,DELET_USER_FAIL} from './types';


export const getUsers = () => async (dispatch) => {
	try {
		let res = await API.get("/user");
		dispatch({
			type: GET_USER_SUCCESS,
			payload: res.data.data
		});
	} catch (err) {
		dispatch({
			type: GET_USER_FAIL,
			payload: 'error'
		});
	}
};

export const deletUser = (id)=>async(dispatch)=>{
    try {
		let res = await API.delete(`/user/${id}`);
		dispatch({
			type: DELET_USER_SUCCESS,
			payload: res.data.data
		});
		dispatch(getUsers())
	} catch (err) {
		dispatch({
			type: DELET_USER_FAIL,
			payload: 'error'
		});
	}
}