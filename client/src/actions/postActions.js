import { NEW_POST } from "./type";
import axios from 'axios';

export const createPost = (postData) => (dispatch) => {
  axios.post(`api/v1/echo/`, postData) 
    .then((res) => {
      const { errors, ok, data} = res.data;
      if (!ok) {
        console.error(errors)
        return false
      }
      dispatch({
        type: NEW_POST,
        payload: data[0],
      });
    });
};
