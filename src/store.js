import { createStore } from "redux";

export const moviesReducer = (state = 0, action) => {
  switch (action.type) {
    case "LOAD_MOVIES":
      return { isLoading: false, movies: action.movies };
    default:
      return state;
  }
};

const store = createStore(moviesReducer);

export default store;
