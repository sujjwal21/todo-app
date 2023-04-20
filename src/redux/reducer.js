import { 
    GET_TODOS_ERROR,
     GET_TODOS_REQUEST, 
     GET_TODOS_SUCCESS,
      POST_TODOS_ERROR,
      POST_TODOS_REQUEST,
      POST_TODOS_SUCCESS
       } from "./actionTypes"

export const reducer =(state,{type,payload})=>{
    switch(type){
        case GET_TODOS_REQUEST:{
            return {...state,isLoading:true}
        }
        case GET_TODOS_SUCCESS:{
            return {...state,isLoading:false,todos:[...payload]}
        }
        case GET_TODOS_ERROR:{
            return {...state,isError:true,isLoading:false}
        }

        case POST_TODOS_REQUEST:{
            return {...state,isLoading:true}
        }
        case POST_TODOS_SUCCESS:{
            return {...state,isLoading:false,todos:[...state.todos,payload]}
        }
        case POST_TODOS_ERROR:{
            return {...state,isError:true,isLoading:false}
        }
        default:return state;
    }
}