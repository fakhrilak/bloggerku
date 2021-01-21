import { API, setAuthToken } from '../../config/api';
import dayjs from 'dayjs'
import {
    GET_SUBCATEGORY_SUCCESS,
    GET_CONTENT_SUCCESS,
    GET_SUBCATEGORY_FAIL,
	GET_CONTENT_FAIL,
	POST_SUBCATEGORY_SUCCESS,
	POST_SUBCATEGORY_FAIL,
	POST_CONTENT_SUCCESS,
	POST_CONTENT_FAIL,
	DELETE_CONTENT_FAIL,
	DELETE_CONTENT_SUCCESS
} from './types';

export const getContent=()=>async(dispatch)=>{
    try {
		let res = await API.get('/content');
		dispatch({
			type: GET_CONTENT_SUCCESS,
			payload: res.data.data
		});
	} catch (err) {
		dispatch({
			type: GET_CONTENT_FAIL,
			payload: 'error'
		});
	}
}

export const getSubcategory=()=>async(dispatch)=>{
	try{
		let res = await API.get('/sub-category');
		dispatch({
			type: GET_SUBCATEGORY_SUCCESS,
			payload: res.data.data
		});
	}catch(err){
		dispatch({
			type: GET_SUBCATEGORY_FAIL,
			payload: 'error'
		});
	}
}

export const postSubcategory=(title,category,userId)=>async(dispatch)=>{
	const config = {
		headers: {
		  "Content-Type": "application/json",
		},
	  };
	  const body = JSON.stringify({
		title,
		category,
		userId
	  });
	try{
		let res = await API.post('/sub-category',body,config);
		dispatch({
			type: POST_SUBCATEGORY_SUCCESS,
			payload: res.data.data
		});
	}catch(err){
		dispatch({
			type: POST_SUBCATEGORY_FAIL,
			payload: 'error'
		});
	}
}

export const postContent=(userId,title,body,categoryId)=>async(dispatch)=>{
	let dateNow = dayjs();
	let now = dateNow.format('YYYY-MM-DD');
	const config = {
		headers: {
		  "Content-Type": "application/json",
		},
	  };
	  const Body = JSON.stringify({
		userId,
		categoryId,
		title,
		body,
		date:now
	  });
	try{
		let res = await API.post('/content',Body,config);
		dispatch({
			type: POST_CONTENT_SUCCESS,
			payload: res.data.data
		});
	}catch(err){
		dispatch({
			type: POST_CONTENT_FAIL,
			payload: err
		});
	}
}

export const deletContent = (id) => async (dispatch) => {
	try {
		let res = await API.delete(`/content/${id}`);
		dispatch({
			type: DELETE_CONTENT_SUCCESS,
			payload: res.data.data
		});
		dispatch(getContent())
	} catch (err) {
		dispatch({
			type: DELETE_CONTENT_FAIL,
			payload: 'error'
		});
	}
};