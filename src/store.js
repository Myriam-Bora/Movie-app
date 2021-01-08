import { createStore } from "redux";

export const moviesReducer = (state = 0, action) => {
  switch (action.type) {
    case "LOAD_MOVIES":
      return { isLoading: false, movies: action.movies };
    default:
      return state;
  }
};

export const modalReducer = (state = 0, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      console.log("open modal");
      return {
        open: true,
        dimmer: action.dimmer,
        title: action.title,
        genres: action.genres,
        summary: action.summary,
      };
    case "CLOSE_MODAL":
      console.log("close modal");
      return { open: false };
    default:
      return state;
  }
};

export const store = createStore(moviesReducer);
export const modalStore = createStore(modalReducer);

export default store;
