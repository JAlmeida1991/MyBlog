import { REMOVE_POST, ADD_POST, EDIT_POST } from "./actionTypes";

export const addPost = post => ({
  type: ADD_POST,
  post
});

export const removePost = post => ({
  type: REMOVE_POST,
  post
});

export const editPost = (post, updates) => ({
  type: EDIT_POST,
  post,
  updates
});
