import React, {useContext,useReducer} from "react";

import postReducer from "./Reducer"
import PostContext from './Context';
import { GET_DATA } from './../types';

const initialState = {
  items:[],
};

const PostState = ({children})=>{
  const [state,dispatch] = useReducer(postReducer,initialState);
  
  const getPosts = async ()=>{
    //api prueba
   return await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(res =>(
        dispatch({
          type: GET_DATA,
          payload:res.slice(0,3) // mostrar solo 3
        })
      ))
   
  }

  return( <PostContext.Provider value={{
    items:state.items,
    getPosts,
  }}>
    {children}
  </PostContext.Provider>
  )
};

export default PostState;
