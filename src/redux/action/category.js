import { API, setAuthToken } from '../../config/api';
import {
    GET_CATEGORY_SUCCESS,
    POST_CATEGORY_FAIL,
    GET_CATEGORY_FAIL,
    POST_CATEGORY_SUCCESS
} from './types';

export const getCategory=()=>async(dispatch)=>{
    try {
		let res = await API.get('/category');
		dispatch({
			type: GET_CATEGORY_SUCCESS,
			payload: res.data.data
		});
	} catch (err) {
		dispatch({
			type: GET_CATEGORY_FAIL,
			payload: 'error'
		});
	}
}

export const postCategory=(title,img,text)=>async(dispatch)=>{
	const config = {
		headers: {
		  "Content-Type": "application/json",
		},
	  };
	  const body = JSON.stringify({
		title,
		img,
		text
	  });
	try{
		let res = await API.post('/category',body,config)
		dispatch({
			type: POST_CATEGORY_SUCCESS,
			payload: res.data.data
		});
	}catch(error){
		console.log(error)
		dispatch({
			type: POST_CATEGORY_FAIL,
			payload: error,
			});
	}
}