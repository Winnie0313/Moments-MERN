import * as api from '../api';

// action creators that retuns an action that tells reducer how to update state. 
// action is an object with tyle a payload. payload is where to store the data
export const getPosts = () => async (dispatch) => {
  try {
    //fetch the data from server api
    const { data } = await api.fetchPosts();
    // dispatch the action to update the store
    dispatch({ type: 'FETCH_ALL', payload: data })
  } catch (error) {
    console.log(error.message);
  }
}

export const createPost = () => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error);
  }
}