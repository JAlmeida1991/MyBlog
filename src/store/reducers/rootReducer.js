import { ADD_POST, REMOVE_POST, EDIT_POST } from "../actions/actionTypes";

const initState = [];

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.post];
    case REMOVE_POST:
      return state.filter(post => post.id !== action.post.id);
    case EDIT_POST:
      return state.map(post => {
        if (post.id === action.post.id) {
          return {
            ...post,
            ...action.updates
          };
        } else {
          return state;
        }
      });
    default:
      return state;
  }
};

export default rootReducer;
