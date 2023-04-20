import {  GET_TODOS_ERROR, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, POST_TODOS_ERROR, POST_TODOS_REQUEST, POST_TODOS_SUCCESS } from "./actionTypes";
import axios from "axios";

export const todoGetRequestAction=()=>{
	return {type:GET_TODOS_REQUEST}
}
export const todoGetSuccessAction=(payload)=>{
	return {type:GET_TODOS_SUCCESS,payload}
}

export const todoGetErrorAction=()=>{
	return {type:GET_TODOS_ERROR}
}

//post todos
export const todoPostRequestAction=()=>{
	return {type:POST_TODOS_REQUEST}
}
export const todoPostSuccessAction=(payload)=>{
	return {type:POST_TODOS_SUCCESS,payload}
}

export const todoPostErrorAction=()=>{
	return {type:POST_TODOS_ERROR}
}


export const getTodo = (dispatch) => {
		// Request action
		dispatch(todoGetRequestAction());
		axios
			.get("https://mock4backend.onrender.com/todos")
			.then((res) => {
				console.log(res);
				//success action
				dispatch(todoGetSuccessAction(res.data));
			})
			.catch((err) => {
				//Failuer action
				dispatch(todoGetErrorAction());
			});
	};

	export const postTodo = (title,desc) => (dispatch)=>{
		// request

		if(title){
			let newTodo={
				title:title,
				desc:desc,
				status:false
			}
			dispatch(todoPostRequestAction());
			axios
				.post("https://mock4backend.onrender.com/todos", newTodo)
				.then((res) => {
					//success
					dispatch(todoPostSuccessAction(res.data));
				})
				.catch((err) => {
					//failuer
					dispatch(todoPostErrorAction());
				})
		}
		
	};